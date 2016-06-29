angular.module('app')
    .controller('DashboardController', ['$scope', '$state', '$http', '$uibModal', 'AppPaths', 'AppData', 'Pages', 'Templates', 'Users', 'Tags', 'SubFields', 'ControllerActions',
        function($scope, $state, $http, $uibModal, AppPaths, AppData, Pages, Templates, Users, Tags, SubFields, ControllerActions) {
        var defaultPage = new Pages();

        if($state.params.pageId){
            $scope.page = Pages.get({id: $state.params.pageId});
            $scope.page.id = $state.params.pageId;
        } else {
            defaultPage.is_menu_hide = true;
            defaultPage.tags_ids = [];
            defaultPage.controller_actions_ids = [];

            $scope.page = angular.copy(defaultPage);
        }

        //Get current user and set his id as author id
        function setCurUserAuthorId(){
            defaultPage.author_id = AppData.cur_user.id;
            angular.extend($scope.page, defaultPage);
        }
        if(AppData.cur_user.$promise)
            AppData.cur_user.$promise.then(setCurUserAuthorId);
        else
            setCurUserAuthorId();

        var site_settings = {};
        //Get site settings and set default values to page object
        function setDefaultSettings(){
            site_settings = AppData.site_settings;
            defaultPage.template_id =  site_settings.default_template_id;
            angular.extend($scope.page, defaultPage);
        }
        if(AppData.site_settings.$promise)
            AppData.site_settings.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        var old_alias = '';
        $scope.$watch('page.title', function(title){
            if(!title)
                return;

            function changeAlias(new_alias){
                //Change alias if its empty or if it not touched by manual
                if((!old_alias && $scope.page.alias) || (old_alias && $scope.page.alias != old_alias))
                    return;

                $scope.page.alias = new_alias;
                old_alias = $scope.page.alias;
            }

            //Translate title to english and paste to alias field if defined yandex_translate_api_key site setting
            //if not: just insert replace spaces to dashes and get lowercase title for set alias
            if(title && site_settings.yandex_translate_api_key){
                $http.get(
                    'https://translate.yandex.net/api/v1.5/tr.json/translate' +
                    '?key=' + site_settings.yandex_translate_api_key +
                    '&text=' + title +
                    '&lang=en')
                    .then(function(result){
                        changeAlias(result.data.text[0].replace(/\s+/g, '-').toLowerCase());
                    });
            } else {
                changeAlias(title.replace(/\s+/g, '-').toLowerCase());
            }
        });

        function getSubFields(){
            SubFields.query({'template_id': $scope.page.template_id}).$promise.then(function(data){
                $scope.sub_fields = data;
            });
        }

        $scope.$watch('page.template_id', function(template_id){
            if(!template_id)
                return;

            getSubFields();

            ControllerActions.query({'template_id': template_id}).$promise.then(function(data){
                $scope.page.controller_actions_ids = data.map(function(action){return action.id});
            });
        });
        $scope.subFieldsApi = {};

        //Models for select inputs
        $scope.models = {
            templates: Templates,
            pages: Pages,
            users: Users,
            tags: Tags,
            controller_actions: ControllerActions
        };
        //Fields for adder functional at select inputs
        $scope.fields = {
            templates: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'path',
                    label: 'Path'
                }
            ],
            pages: [
                {
                    name: 'title',
                    label: 'Title'
                },
                {
                    name: 'template_id',
                    label: 'Template',
                    type: 'select',
                    model: Templates,
                    list: 'templates'
                }
            ],
            users: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'email',
                    label: 'Email'
                },
                {
                    name: 'password',
                    label: 'Password',
                    type: 'password'
                }
            ],
            tags: [
                {
                    name: 'name',
                    label: 'Name'
                }
            ],
            controller_actions: [
                {
                    name: 'name',
                    label: 'Name'
                }
            ]
        };

        $scope.savePage = function(){
            //Validate for require fields
            $scope.hasErrors = {};
            var required = ['title', 'template_id'];
            required.forEach(function(reqField){
                if(!$scope.page[reqField])
                    $scope.hasErrors[reqField] = true;
                else
                    delete $scope.hasErrors[reqField];
            });

            if(!_.isEmpty($scope.hasErrors))
                return;

            //If page is new - Create, if it not - Update
            var is_new = $scope.page.id ? false : true;

            var page_query;
            if(is_new)
                page_query = $scope.page.$save();
            else
                page_query = $scope.page.$update();

            page_query.then(function(result_page){
                //After save page - we have it id, so save sub fields
                $scope.subFieldsApi.saveSubFieldsValues(result_page);

                if(is_new)
                    $scope.page = angular.copy(defaultPage);
                else
                    $scope.page = result_page;

                $scope.alert = 'Page saved!';

                $scope.app.refreshPagesTree();
            })
        };

        $scope.closeAlert = function(){
            $scope.alert = ''
        };

        $scope.addSubField = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: AppPaths.dashboard_tpls + 'addSubFieldModal.html',
                controller: ['$scope', 'subField', 'SubFieldsTypes', function($scope, subField, SubFieldsTypes){
                    $scope.subField = subField;

                    $scope.models = {
                        SubFields: SubFields,
                        SubFieldsTypes: SubFieldsTypes
                    };
                    $scope.fields = {
                        sub_field_type: [
                            {
                                name: 'name',
                                label: 'Name'
                            },
                            {
                                name: 'directive',
                                label: 'Directive'
                            }
                        ]
                    };
                    $scope.ok = function () {

                        $scope.hasErrors = {};

                        var required;
                        if($scope.mode == 'create')
                            required = ['name', 'sub_field_type_id'];
                        else if($scope.mode == 'select')
                            required = ['id'];

                        required.forEach(function(reqField){
                            if(!$scope.subField[reqField])
                                $scope.hasErrors[reqField] = true;
                            else
                                delete $scope.hasErrors[reqField];
                        });

                        if(!_.isEmpty($scope.hasErrors))
                            return;


                        if($scope.mode == 'select')
                            $scope.subField = $scope.subField.$get();

                        $scope.$close($scope.subField);
                    };

                    $scope.cancel = function () {
                        $scope.$dismiss(false);
                    };
                }],
                size: 'md',
                resolve: {
                    subField: function () {
                        return new SubFields();
                    }
                }
            });

            modalInstance.result.then(function (subField) {
                if(subField.templates_ids)
                    subField.templates_ids.push($scope.page.template_id);
                else
                    subField.templates_ids = [$scope.page.template_id];

                if(subField.id)
                    subField.$update();
                else
                    subField.$save();

                getSubFields();
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        }
    }]);