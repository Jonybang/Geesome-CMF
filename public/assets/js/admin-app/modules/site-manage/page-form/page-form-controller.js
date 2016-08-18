angular.module('admin-app')
    .controller('PageFormController', ['$scope', '$state', '$http', '$uibModal', 'Notification', 'AppPaths', 'AppData', 'PageFormManage', 'Contexts', 'Pages', 'PagesSEO', 'Templates', 'Users', 'Tags', 'SubFields', 'ControllerActions',
        function($scope, $state, $http, $uibModal, Notification, AppPaths, AppData, PageFormManage, Contexts, Pages, PagesSEO, Templates, Users, Tags, SubFields, ControllerActions) {

            $scope.subFieldsApi = {};

            //Models for select inputs
            $scope.models = PageFormManage.models;

            //Fields for adder functional at select inputs
            $scope.fields = PageFormManage.fields;

            var defaultPage = new Pages();

            if($state.params.pageId){
                $scope.page = Pages.get({id: $state.params.pageId});
                $scope.page.id = $state.params.pageId;
            } else {
                defaultPage.is_menu_hide = true;
                defaultPage.tags_ids = [];
                defaultPage.controller_actions_ids = [];
                defaultPage.seo = {};

                defaultPage.context_id = $state.params.context_id;

                $scope.page = angular.copy(defaultPage);
            }

            //Get current user and set his id as author id
            AppData.getCurrentUser(function(current_user){
                $scope.current_user = current_user;
                defaultPage.author_id = current_user.id;

                angular.extend($scope.page, angular.extend({}, defaultPage, $scope.page));
            });

            //Get site settings and set default values to page object
            AppData.getSiteSettings(function(site_settings){
                $scope.site_settings = site_settings;
                defaultPage.template_id = $scope.site_settings.default_template_id;
                defaultPage.context_id = $scope.site_settings.default_context_id;

                angular.extend($scope.page, angular.extend({}, defaultPage, $scope.page));
            });

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
                if(title && $scope.site_settings.yandex_translate_api_key){
                    $http.get(
                        'https://translate.yandex.net/api/v1.5/tr.json/translate' +
                        '?key=' + $scope.site_settings.yandex_translate_api_key +
                        '&text=' + title +
                        '&lang=en')
                        .then(function(result){
                            changeAlias(result.data.text[0].replace(/\s+/g, '-').toLowerCase());
                        });
                } else {
                    changeAlias(title.replace(/\s+/g, '-').toLowerCase());
                }
            });

            $scope.getSubFields = function(){
                SubFields.query({'template_id': $scope.page.template_id}).$promise.then(function(data){
                    $scope.sub_fields = data;
                });
            };

            $scope.$watch('page.template_id', function(template_id){
                if(!template_id)
                    return;

                $scope.getSubFields();

                ControllerActions.query({'template_id': template_id}).$promise.then(function(data){
                    $scope.page.controller_actions_ids = data.map(function(action){return action.id});
                });
            });

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

                var page_seo = angular.copy($scope.page.seo);

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

                    var seo_resource = new PagesSEO(page_seo);
                    seo_resource.$save({page_id: $scope.page.id}).then(function(seo){
                        $scope.page.seo = seo;
                    });

                    Notification.success('Page saved!');
                    $scope.app.refreshPagesTree();
                })
            };
    }]);