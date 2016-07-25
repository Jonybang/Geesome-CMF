angular
    .module('app', ['ngResource', 'ui.bootstrap', 'ui.router', 'ui.router.tabs', 'wiz.markdown', 'dndLists', 'rt.debounce', 'ckeditor', 'a-edit'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 'AppPaths',
        function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, AppPaths) {

            $stateProvider
                .state('app', {
                    url: '/admin',
                    controller: 'AppController as app',
                    templateUrl: AppPaths.app_tpls + 'index.html',
                    abstract: true
                })

                //=====================================================
                // PAGE FORM
                //=====================================================

                .state('app.page', {
                    url: '',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.page.create', {
                        url: '',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.page_form_tpls + 'index.html'
                    })
                    .state('app.page.edit', {
                        url: '/page/:pageId',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.page_form_tpls + 'index.html'
                    })

                //=====================================================
                // DATABASE MANAGE
                //=====================================================

                .state('app.db', {
                    url: '/db',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.db.pages', {
                        url: '/pages',
                        controller: 'PagesController',
                        templateUrl: AppPaths.pages_tpls + 'index.html'
                    })
                    .state('app.db.dictionary', {
                        url: '/dictionary',
                        controller: 'DictionaryController',
                        templateUrl: AppPaths.dictionary_tpls + 'index.html'
                    })
                    .state('app.db.mail_templates', {
                        url: '/mail_templates',
                        controller: 'MailTemplatesController',
                        templateUrl: AppPaths.mail_templates_tpls + 'index.html'
                    })
                    .state('app.db.subscribers', {
                        url: '/subscribers',
                        controller: 'SubscribersController',
                        templateUrl: AppPaths.subscribers_tpls + 'index.html'
                    })
                    .state('app.db.sent_mails', {
                        url: '/sent_mails',
                        controller: 'SentMailsController',
                        templateUrl: AppPaths.sent_mails_tpls + 'index.html'
                    })
                    .state('app.db.settings', {
                        url: '/settings',
                        controller: 'SettingsController',
                        templateUrl: AppPaths.settings_tpls + 'index.html'
                    })
                    .state('app.db.logs', {
                        url: '/logs',
                        controller: 'LogsController',
                        templateUrl: AppPaths.logs_tpls + 'index.html'
                    })
                    .state('app.db.tags', {
                        url: '/tags',
                        controller: 'TagsController',
                        templateUrl: AppPaths.tags_tpls + 'index.html'
                    })
                    .state('app.db.templates', {
                        url: '/templates',
                        controller: 'TemplatesController',
                        templateUrl: AppPaths.templates_tpls + 'index.html'
                    })
                    .state('app.db.sub_fields', {
                        url: '/sub_fields',
                        controller: 'SubFieldsController',
                        templateUrl: AppPaths.sub_fields_tpls + 'index.html'
                    })
                    .state('app.db.users', {
                        url: '/users',
                        controller: 'UserController',
                        templateUrl: AppPaths.users_tpls + 'index.html'
                    })

                //=====================================================
                // DATABASE MANAGE
                //=====================================================

                .state('app.manage', {
                    url: '/manage',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.manage.mailing', {
                        url: '/mailing/:sentMailId',
                        controller: 'MailingController',
                        templateUrl: AppPaths.mailing_tpls + 'index.html'
                    });

            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise("/admin");
        }])
    .run(['$rootScope', 'AppData', 'AEditConfig', function($rootScope, AppData, AEditConfig){

        function setDefaultSettings(){
            $rootScope.cur_user = AppData.cur_user;
        }
        if(AppData.cur_user.$promise)
            AppData.cur_user.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            AppData.reload();
        });

        $rootScope.CKEditorOptions = {
            language: 'en',
            allowedContent: true,
            entities: false,
            toolbarGroups: [
                { name: 'editing',     groups: [ 'find', 'selection' ] },
                '/',
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
                { name: 'links' },
                { name: 'insert' },
                '/',
                { name: 'styles' },
                { name: 'colors' },
                { name: 'tools' },
                { name: 'others' },
                { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
            ]
        };

        //config for marcelgwerder/laravel-api-handler
        AEditConfig.grid_options.additional_request_params._config = "meta-total-count,meta-filter-count,response-envelope";
    }]);
angular.module('app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'AppData', 'Pages', function($scope, $http, AppPaths, AppData, Pages) {
        var self = this;

        self.menuList = [
            {
                heading: 'Pages',
                route:   'app.db.pages'
            },
            {
                heading: 'Dictionary',
                route:   'app.db.dictionary'
            },
            {
                heading: 'Mail Templates',
                route:   'app.db.mail_templates'
            },
            {
                heading: 'Subscribers',
                route:   'app.db.subscribers'
            },
            {
                heading: 'Sent Mails',
                route:   'app.db.sent_mails'
            },
            {
                heading: 'Settings',
                route:   'app.db.settings'
            },
            {
                heading: 'Logs',
                route:   'app.db.logs'
            },
            {
                heading: 'Tags',
                route:   'app.db.tags'
            },
            {
                heading: 'Templates',
                route:   'app.db.templates'
            },
            {
                heading: 'SubFields',
                route:   'app.db.sub_fields'
            },
            {
                heading: 'Users',
                route:   'app.db.users'
            }
        ];

        self.refreshPagesTree = function(){
            self.pages_tree = Pages.query({tree_mode: true});
        };

        self.refreshPagesTree();

        self.changeParent = function(event, dropped_index, dropped_item, parent){
            if(parent.id == dropped_item.id)
                return;

            dropped_item.parent_page_id = parent.id;
            dropped_item.menu_index = dropped_index;

            Pages.update({ id: dropped_item.id }, dropped_item);

            parent.child_pages_by_index.forEach(function(page, page_index){
                if(page_index >= dropped_index && page.id != dropped_item.id){
                    page.menu_index = page_index + 1;
                    Pages.update({ id: page.id }, page);
                }
            });

            return dropped_item;
        };

        self.activeTab = 'pages-tree';

        self.tabs = [{title:'Pages Tree', name: 'pages-tree'}, {title: 'Database Manage', name:'db-manage'}];
    }]);
//<loading-gif ng-if="!dataLoaded"> </loading-gif>
// TODO: добавить throttle - не показывать гифку если идет тут-же переключение туда - обратно
angular.module('app')
    .directive('loadingGif', [function() {
        return {
            restrict: 'E',
            template: '<img ng-if="lgIf" src="assets/img/ajax-loading.gif"/>',
            scope: {
                lgIf: '='
            }
        };
    }]);
angular
    .module('app')
    .directive('sfDate', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-date.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {
                scope.$watch('ngModel', function(){
                    if(!scope.ngModel || !scope.ngModel.value)
                        return;

                    if(new Date(scope.ngModel.value) != scope.fakeModel)
                        scope.fakeModel = new Date(scope.ngModel.value);
                });
                scope.$watch('fakeModel', function(){
                    scope.ngModel.value = scope.fakeModel;
                });
            }
        };
    }]);
angular
    .module('app')
    .directive('sfImage', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-image.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {

            }
        };
    }]);
angular
    .module('app')
    .directive('sfJson', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-json.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                config: '=?',
                pageResource: '=?',
                templateResource: '=?',
                subFieldResource: '=?'
            },
            link: function (scope, element) {
                var defaultConfig = {
                    caption: 'For add data - fill first row fields, than save.',
                    orderBy: '-id',
                    boldHeaders: false,
                    fields: [
                        {
                            name: 'json_id',
                            label: '#',
                            readonly: true
                        },
                        {
                            name: 'name',
                            modal: 'self',
                            label: 'Name',
                            new_placeholder: 'New Item',
                            required: true
                        }
                    ]
                };

                scope.gridOptions = defaultConfig;

                scope.$watch('subFieldResource.config', function(config){
                    if(!config)
                        return;

                    scope.gridOptions = angular.extend({}, defaultConfig, JSON.parse(config));
                });

                scope.$watch('ngModel', function(){
                    if(!scope.ngModel)
                        return;

                    if(scope.ngModel.value){
                        if(JSON.parse(scope.ngModel.value) != scope.fakeModel)
                            scope.fakeModel = JSON.parse(scope.ngModel.value);
                    }
                    else
                        scope.fakeModel = [];
                });

                scope.changed = function(){
                    scope.ngModel.value = JSON.stringify(scope.fakeModel);
                }
            }

        };
    }]);
angular
    .module('app')
    .directive('sfText', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-text.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {

            }
        };
    }]);
angular
    .module('app')
    .directive('sfTextarea', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-textarea.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {

            }
        };
    }]);
angular
    .module('app')
    .directive('subFieldsManager', ['$timeout', '$compile', '$uibModal', 'AppPaths', 'SubFields', 'SubFieldsValues', function($timeout, $compile, $uibModal, AppPaths, SubFields, SubFieldsValues) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?',
                api: '=?',
                refreshSubFields: '&'
            },
            link: function (scope, element) {
                var sub_fields_values_names = [];

                function init(){
                    var tplHtml = '';
                    scope.resources = {};
                    sub_fields_values_names = [];

                    scope.ngModel.forEach(function(sub_field){
                        scope.resources[sub_field.key] = sub_field;
                        var sub_field_value_name = sub_field.key + '_value';

                        if(scope.pageResource && scope.pageResource.id)
                             SubFieldsValues.query({sub_field_id: sub_field.id, page_id: scope.pageResource.id}).$promise.then(function(result){
                                 scope.resources[sub_field_value_name] = result[0] || new SubFieldsValues({sub_field_id: sub_field.id});
                             });
                        else
                            scope.resources[sub_field_value_name] = new SubFieldsValues({sub_field_id: sub_field.id});

                        sub_fields_values_names.push(sub_field_value_name);

                        var directive = sub_field.type.directive;
                        tplHtml += '<label><span uib-tooltip="{ { $' + sub_field.key + ' } }">' + (sub_field.name || sub_field.key) + '</span></label>';
                        tplHtml += '<' + directive + ' ng-model="resources.' + sub_field_value_name + '" ' +
                            'page-resource="pageResource" template-resource="templateResource" ' +
                            'sub-field-resource="resources.' + sub_field.key + '"></' + directive + '>';
                        tplHtml += '<div><small>' + (sub_field.description || '') + '</small></div><hr>';
                    });

                    tplHtml += '<button class="btn btn-warning margin-top" ng-click="addSubField()" title="Add SubField"><span class="glyphicon glyphicon-plus"></span> Add sub field to current template</button>' +
                        ' <span class="glyphicon glyphicon-question-sign" style="color: #8a6d3b;" uib-tooltip="Need to change template source code for take effect!"></span>';

                    var template = angular.element(tplHtml);

                    var linkFn = $compile(template)(scope);
                    element.html(linkFn);
                }

                function checkForInit(){
                    if(!scope.ngModel || (scope.pageResource && scope.pageResource.$promise && !scope.pageResource.$promise.$$state.status))
                        return;

                    init();
                }
                scope.$watchCollection('ngModel', checkForInit);
                scope.$watchCollection('pageResource', checkForInit);

                if(scope.api){
                    scope.api.saveSubFieldsValues = function(pageResource){
                        sub_fields_values_names.forEach(function(sf_val_name){
                            var subFieldValueResource = scope.resources[sf_val_name];
                            subFieldValueResource.page_id = pageResource.id;

                            if(subFieldValueResource.id)
                                subFieldValueResource.$update();
                            else
                                subFieldValueResource.$save();
                        });

                        init();
                    }
                }

                scope.addSubField = function(){
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: AppPaths.app + 'directives/addSubFieldModal.html',
                        controller: ['$scope', 'subField', 'SubFieldsTypes', function($scope, subField, SubFieldsTypes){
                            $scope.subField = subField;

                            $scope.models = {
                                SubFields: SubFields,
                                SubFieldsTypes: SubFieldsTypes
                            };
                            $scope.fields = {
                                sub_field_type: [
                                    {
                                        name: 'key',
                                        label: 'Key'
                                    },
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
                                    required = ['key', 'sub_field_type_id'];
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
                            subField.templates_ids.push(scope.pageResource.template_id);
                        else
                            subField.templates_ids = [scope.pageResource.template_id];

                        if(subField.id)
                            subField.$update();
                        else
                            subField.$save();

                        if(scope.refreshSubFields)
                            $timeout(scope.refreshSubFields);
                    }, function () {
                        //$log.info('Modal dismissed at: ' + new Date());
                    });
                }
            }
        };
    }]);
angular.module('app')
    .service('AppData', ['$http', function($http){
        var self = this;

        var data_variables = {
            'cur_user': '/admin/api/cur_user',
            'site_settings': '/admin/api/site_settings_dictionary'
        };

        self.reload = function(){
            angular.forEach(data_variables, function(url, var_name){
                self[var_name] = {};
                self[var_name].$promise = $http.get(url).then(function(response){
                    angular.extend(self[var_name], response.data);
                    self[var_name].$promise = null;
                    return self[var_name];
                });
            });
        };

        self.reload();

        return self;
    }]);
var app = angular.module('app');

var defaultOptions = {
    'update': { method: 'PUT' }
};

app.factory('Settings', ['$resource', function($resource) {
    return $resource('admin/api/settings/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Pages', ['$resource', function($resource) {
    return $resource('admin/api/pages/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('PagesSEO', ['$resource', function($resource) {
    return $resource('admin/api/pages/:page_id/seo', { id: '@page_id' }, defaultOptions);
}]);

app.factory('Templates', ['$resource', function($resource) {
    return $resource('admin/api/templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('MailTemplates', ['$resource', function($resource) {
    return $resource('admin/api/mail_templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Logs', ['$resource', function($resource) {
    return $resource('admin/api/logs/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Users', ['$resource', function($resource) {
    return $resource('admin/api/users/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Tags', ['$resource', function($resource) {
    return $resource('admin/api/tags/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Templates', ['$resource', function($resource) {
    return $resource('admin/api/templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('SubFieldsTypes', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields_types/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubFieldsValues', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields_values/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubFields', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('ControllerActions', ['$resource', function($resource) {
    return $resource('admin/api/controller_actions/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Dictionaries', ['$resource', function($resource) {
    return $resource('admin/api/dictionaries/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('DictionariesWords', ['$resource', function($resource) {
    return $resource('admin/api/dictionaries_words/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Subscribers', ['$resource', function($resource) {
    return $resource('admin/api/subscribers/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubscribersGroups', ['$resource', function($resource) {
    return $resource('admin/api/subscribers_groups/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('SentMails', ['$resource', function($resource) {
    return $resource('admin/api/sent_mails/:id', { id: '@id' }, defaultOptions);
}]);
var app_path = '/assets/js/admin-app/';
var app_modules_path = app_path + 'modules/';

angular.module('app')
    .constant('AppPaths', {
            app:                    app_path,
            app_tpls:               app_path + 'templates/',
            modules:                app_modules_path,
            db_manage_module:       app_modules_path + 'database-manage',
            page_form_tpls:         app_modules_path + 'page-form/templates/',

            settings_tpls:          app_modules_path + 'database-manage/settings/templates/',
            pages_tpls:             app_modules_path + 'database-manage/pages/templates/',
            mail_templates_tpls:    app_modules_path + 'database-manage/mail-templates/templates/',
            logs_tpls:              app_modules_path + 'database-manage/logs/templates/',
            users_tpls:             app_modules_path + 'database-manage/users/templates/',
            tags_tpls:              app_modules_path + 'database-manage/tags/templates/',
            templates_tpls:         app_modules_path + 'database-manage/templates/templates/',
            sub_fields_tpls:        app_modules_path + 'database-manage/sub-fields/templates/',
            dictionary_tpls:        app_modules_path + 'database-manage/dictionary/templates/',
            subscribers_tpls:       app_modules_path + 'database-manage/subscribers/templates/',
            sent_mails_tpls:       app_modules_path + 'database-manage/sent-mails/templates/',

            mailing_tpls:           app_modules_path + 'site-manage/mailing/templates/'
    });
angular.module('app')
    .controller('PageFormController', ['$scope', '$state', '$http', '$uibModal', 'AppPaths', 'AppData', 'Pages', 'PagesSEO', 'Templates', 'Users', 'Tags', 'SubFields', 'ControllerActions',
        function($scope, $state, $http, $uibModal, AppPaths, AppData, Pages, PagesSEO, Templates, Users, Tags, SubFields, ControllerActions) {
        var defaultPage = new Pages();

        if($state.params.pageId){
            $scope.page = Pages.get({id: $state.params.pageId});
            $scope.page.id = $state.params.pageId;
        } else {
            defaultPage.is_menu_hide = true;
            defaultPage.tags_ids = [];
            defaultPage.controller_actions_ids = [];
            defaultPage.seo = {};

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

        $scope.site_settings = {};
        //Get site settings and set default values to page object
        function setDefaultSettings(){
            $scope.site_settings = AppData.site_settings;
            defaultPage.template_id = $scope.site_settings.default_template_id;
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
                    name: 'key',
                    label: 'Key(Path in templates directory)'
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
                    list: 'templates',
                    or_name_field: 'key'
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
                    name: 'key',
                    label: 'Key(ControllerName@actionName)'
                },
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

                $scope.alert = 'Page saved!';

                $scope.app.refreshPagesTree();
            })
        };

        $scope.closeAlert = function(){
            $scope.alert = ''
        };
    }]);

angular.module('app')
    .controller('DictionaryController', ['$scope', 'Dictionaries', 'DictionariesWords', function($scope, Dictionaries, DictionariesWords) {
        $scope.dictionaries = [];

        $scope.aGridDictionariesOptions = {
            caption: '',
            orderBy: '-id',
            resource: Dictionaries,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Dictionary key',
                    new_placeholder: 'New Dictionary',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Dictionary name'
                }
            ]
        };

        $scope.dictionaries_words = [];

        $scope.aGridDictionariesWordsOptions = {
            caption: '',
            orderBy: '-id',
            resource: DictionariesWords,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Key',
                    new_placeholder: 'New Dictionary Word',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value'
                },
                {
                    name: 'dictionary_id',
                    label: 'Dictionary',
                    resource: Dictionaries,
                    type: 'select',
                    list: 'dictionaries',
                    or_name_field: 'key',
                    required: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('LogsController', ['$scope', 'Logs', 'Users', function($scope, Logs, Users) {
        $scope.logs = [];

        $scope.aGridOptions = {
            caption: '',
            create: false,
            edit: false,
            orderBy: '-id',
            resource: Logs,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'action',
                    modal: 'self',
                    label: 'Action',
                    new_placeholder: 'New Action',
                    required: true
                },
                {
                    name: 'user_id',
                    label: 'User',
                    type: 'select',
                    list: 'users',
                    resource: Users
                },
                {
                    name: 'logable.name || item.logable.key || item.logable.title',
                    label: 'Item Name'
                },
                {
                    name: 'logable_type',
                    label: 'Item Type'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('MailTemplatesController', ['$scope', 'MailTemplates', function($scope, MailTemplates) {
        $scope.mail_templates = [];

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: MailTemplates,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    label: 'Template key',
                    modal: 'self',
                    required: true,
                    new_placeholder: 'New Mail Template'
                },
                {
                    name: 'name',
                    label: 'Template name'
                },
                {
                    name: 'title',
                    label: 'Mail Title'
                },
                {
                    name: 'content',
                    label: 'Main Content',
                    type: 'textarea',
                    width: '500px'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('PagesController', ['$scope', 'Pages', 'Templates', 'Users', function($scope, Pages, Templates, Users) {

        $scope.aGridOptions = {
            caption: '',
            order_by: '-id',
            resource: Pages,
            get_list: true,
            ajax_handler: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'title',
                    modal: 'self',
                    label: 'Title',
                    new_placeholder: 'New page',
                    required: true
                },
                {
                    name: 'alias',
                    label: 'Alias'
                },
                {
                    name: 'sub_title',
                    label: 'SubTitle'
                },
                {
                    name: 'parent_page_id',
                    label: 'Parent page',
                    type: 'select',
                    list: 'self',
                    resource: Pages,
                    name_field: 'title'
                },
                {
                    name: 'template_id',
                    label: 'Template',
                    type: 'select',
                    resource: Templates,
                    list: 'templates',
                    required: true
                },
                {
                    name: 'description',
                    label: 'Description',
                    table_hide: true
                },
                {
                    name: 'content',
                    label: 'Content',
                    type: 'textarea',
                    table_hide: true
                },
                {
                    name: 'author_id',
                    label: 'Author',
                    type: 'select',
                    resource: Users,
                    list: 'users',
                    table_hide: true
                },
                {
                    name: 'menu_title',
                    label: 'MenuTitle',
                    table_hide: true
                },
                {
                    name: 'menu_index',
                    label: 'Menu Index',
                    table_hide: true
                },
                {
                    name: 'is_menu_hide',
                    label: 'Is hide from menu',
                    type: 'bool',
                    table_hide: true
                },
                {
                    name: 'is_published',
                    label: 'Is published',
                    type: 'bool'
                },
                {
                    name: 'is_abstract',
                    label: 'Is abstract page(has no body, but have children)',
                    type: 'bool',
                    table_hide: true
                },
                {
                    name: 'is_part',
                    label: 'Is part of parent page',
                    type: 'bool',
                    table_hide: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SentMailsController', ['$scope', 'SentMails', 'MailTemplates', 'Pages', 'SubscribersGroups', function($scope, SentMails, MailTemplates, Pages, SubscribersGroups) {
        $scope.sent_mails = SentMails.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: SentMails,
            create: false,
            edit: false,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'result_title',
                    modal: 'self',
                    label: 'Result Title'
                },
                {
                    name: 'result_content',
                    label: 'Result Content',
                    type: 'textarea'
                },
                {
                    name: 'result_addresses',
                    label: 'Addresses Mail',
                    type: 'textarea'
                },
                {
                    name: 'mail_template_id',
                    label: 'Mail template',
                    type: 'select',
                    resource: MailTemplates,
                    list: 'mail_templates'
                },
                {
                    name: 'page_id',
                    label: 'Source page',
                    type: 'select',
                    resource: Pages,
                    list: 'pages'
                },
                {
                    name: 'subscribers_groups_ids',
                    label: 'Subscribers groups',
                    type: 'multiselect',
                    resource: SubscribersGroups,
                    list: 'subscribers_groups',
                    table_hide: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SettingsController', ['$scope', 'Settings', function($scope, Settings) {
        $scope.settings = [];

        $scope.aGridOptions = {
            caption: 'All settings available in templates.',
            orderBy: '-id',
            resource: Settings,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Setting key',
                    new_placeholder: 'New Setting',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SubFieldsController', ['$scope', 'SubFields', 'SubFieldsTypes', 'SubFieldsValues', 'Templates', 'Pages', function($scope, SubFields, SubFieldsTypes, SubFieldsValues, Templates, Pages) {
        $scope.sub_fields_types = [];

        $scope.aGridSubFieldsTypesOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubFieldsTypes,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Sub field type key',
                    new_placeholder: 'New Sub Field Type',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'directive',
                    label: 'Angular directive name'
                }
            ]
        };

        $scope.sub_fields = [];

        $scope.aGridSubFieldsOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubFields,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Sub field key',
                    new_placeholder: 'New Sub Field',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea'
                },
                {
                    name: 'config',
                    label: 'Config',
                    type: 'textarea'
                },
                {
                    name: 'default_value',
                    label: 'Default value',
                    type: 'textarea'
                },
                {
                    name: 'sub_field_type_id',
                    label: 'Sub field type',
                    type: 'select',
                    resource: SubFieldsTypes,
                    list: 'sub_fields_types',
                    or_name_field: 'key'
                },
                {
                    name: 'templates_ids',
                    label: 'Templates',
                    type: 'multiselect',
                    resource: Templates,
                    list: 'templates',
                    table_hide: true,
                    or_name_field: 'key'
                }
            ]
        };

        $scope.sub_fields_values = [];

        $scope.aGridSubFieldsValuesOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubFieldsValues,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'value',
                    label: 'Sub field value',
                    type: 'textarea',
                    new_placeholder: 'New Sub Field value',
                    required: true
                },
                {
                    name: 'sub_field_id',
                    label: 'Sub field',
                    resource: SubFields,
                    type: 'select',
                    list: 'sub_fields',
                    or_name_field: 'key',
                    required: true
                },
                {
                    name: 'page_id',
                    label: 'Page',
                    type: 'select',
                    list: 'pages',
                    resource: Pages,
                    name_field: 'title',
                    required: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SubscribersController', ['$scope', 'SubscribersGroups', 'Subscribers', 'Templates', function($scope, SubscribersGroups, Subscribers, Templates) {
        $scope.subscribers_groups = [];

        $scope.aGridSubscribersGroupsOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubscribersGroups,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Subscriber group key',
                    new_placeholder: 'New Subscriber group',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'subscribers_ids',
                    label: 'Subscribers',
                    type: 'multiselect',
                    resource: Subscribers,
                    list: 'subscribers',
                    table_hide: true,
                    or_name_field: 'mail'
                }
            ]
        };

        $scope.subscribers = [];

        $scope.aGridSubscribersOptions = {
            caption: '',
            orderBy: '-id',
            resource: Subscribers,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'mail',
                    modal: 'self',
                    label: 'Mail',
                    new_placeholder: 'New Subscriber',
                    required: true
                },
                {
                    name: 'provider',
                    label: 'Provider',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'user_agent',
                    label: 'User agent info',
                    type: 'textarea'
                },
                {
                    name: 'groups_ids',
                    label: 'Subscribers groups',
                    type: 'multiselect',
                    resource: SubscribersGroups,
                    list: 'subscribers_groups',
                    table_hide: true,
                    or_name_field: 'key'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('TagsController', ['$scope', 'Tags', function($scope, Tags) {
        $scope.tags = Tags.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: Tags,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Tag',
                    required: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('TemplatesController', ['$scope', 'Templates', 'SubFields', 'ControllerActions', function($scope, Templates, SubFields, ControllerActions) {
        $scope.templates = [];

        $scope.aGridOptions = {
            caption: 'You must to add blade template file on address /resources/views/templates/example.bade.php(path:"example") before/after add row to DB!',
            orderBy: '-id',
            resource: Templates,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    label: 'Template key',
                    new_placeholder: 'New Template',
                    modal: 'self',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea'
                },
                {
                    name: 'sub_fields_ids',
                    label: 'Sub fields',
                    type: 'multiselect',
                    resource: SubFields,
                    list: 'sub_fields',
                    table_hide: true,
                    or_name_field: 'key'
                },
                {
                    name: 'controller_actions_ids',
                    label: 'Controller actions',
                    type: 'multiselect',
                    resource: ControllerActions,
                    list: 'controller_actions',
                    table_hide: true,
                    or_name_field: 'key'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('UserController', ['$scope', 'Users', function($scope, Users) {
        $scope.users = [];

        $scope.aGridOptions = {
            caption: '',
            create: true,
            edit: true,
            orderBy: '-id',
            resource: Users,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New User',
                    required: true
                },
                {
                    name: 'email',
                    label: 'E-mail',
                    required: true
                },
                {
                    name: 'password',
                    type: 'password',
                    label: 'Password',
                    required: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('MailingController', ['$scope', '$state', '$http', '$uibModal', 'debounce', 'AppPaths', 'AppData', 'Pages', 'Templates', 'MailTemplates', 'SentMails', 'SubscribersGroups', 'Subscribers',
        function($scope, $state, $http, $uibModal, debounce, AppPaths, AppData, Pages, Templates, MailTemplates, SentMails, SubscribersGroups, Subscribers) {

            //======================================
            //INITIAL ACTIONS
            //======================================

            var defaultMail = new SentMails();

            if($state.params.sentMailId){
                $scope.mail = SentMails.get({id: $state.params.sentMailId});

                $scope.mail.$promise.then(function(mail){
                    $scope.mail.sub_data_array = [];

                    angular.forEach(mail.sub_data, function(value, key){
                        $scope.mail.sub_data_array.push({key: key, value: value})
                    });
                });

                $scope.mail.id = $state.params.sentMailId;
            } else {
                defaultMail.subscribers_groups_ids = [];
                defaultMail.sub_data_array = [];
                $scope.mail = angular.copy(defaultMail);
            }

            //Models for select inputs
            $scope.models = {
                subscribers_groups: SubscribersGroups,
                mail_templates: MailTemplates,
                pages: Pages
            };

            //Fields for adder functional at select inputs
            $scope.fields = {
                subscribers_groups: [
                    {
                        name: 'key',
                        label: 'Key',
                        required:true
                    },
                    {
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        name: 'subscribers_ids',
                        label: 'Subscribers',
                        type: 'multiselect',
                        model: Subscribers,
                        list: 'subscribers'
                    }
                ],
                mail_templates: [
                    {
                        name: 'key',
                        label: 'Key',
                        required:true
                    },
                    {
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        name: 'title',
                        label: 'Title template'
                    },
                    {
                        name: 'content',
                        label: 'Content template',
                        type: 'textarea'
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
                ]
            };

            $scope.getSentMails = function(){
                $scope.sent_mails = SentMails.query();
            };
            $scope.getSentMails();

            $scope.status = {
                subscribers_list: {},
                mail_template: {},
                preview_mail: {},
                mail: {}
            };

            //======================================
            //SUBSCRIBERS GROUPS ACTIONS
            //======================================

            function getSubscribersListByGroups(){
                if(!$scope.mail.subscribers_groups_ids || !$scope.mail.subscribers_groups_ids.length){
                    $scope.status.subscribers_list = {
                        error: 'Subscribers groups not select'
                    };
                    return;
                }

                var received_groups = 0;
                $scope.mail.subscribers_groups_ids.forEach(function(subscriber_group_id){
                    SubscribersGroups.get({id: subscriber_group_id, with_subscribers: true}).$promise.then(function(response){
                        response.subscribers.forEach(function(subscriber){
                            if($scope.subscribers_list.indexOf(subscriber.mail) == -1)
                                $scope.subscribers_list.push(subscriber.mail);
                        });

                        received_groups++;
                        if(received_groups == $scope.mail.subscribers_groups_ids.length)
                            $scope.status.subscribers_list.loading = false;
                    });
                });
            }

            var debounceGetSubscribersList = debounce(1000, getSubscribersListByGroups);

            function loadingSubscribersList(){
                $scope.subscribers_list = [];
                $scope.status.subscribers_list = {
                    loading: true
                };

                debounceGetSubscribersList();
            }

            $scope.$watchCollection('mail.subscribers_groups_ids', loadingSubscribersList);

            //======================================
            //MAIL TEMPLATE ACTIONS
            //======================================

            $scope.$watch('mail.mail_template_id', function(){
                if(!$scope.mail.mail_template_id){
                    $scope.status.mail_template = {
                        error: 'Mail template not selected.'
                    };
                    return;
                }
                $scope.status.mail_template = {
                    loading: true
                };

                $scope.mail.mail_template = MailTemplates.get({id: $scope.mail.mail_template_id});
                $scope.mail.mail_template.$promise.then(function(){
                    $scope.status.mail_template = {};
                });
            });

            function renderMailPreview(){
                if(!$scope.mail.mail_template_id){
                    $scope.status.preview_mail = {
                        error: 'Please choose some mail template.'
                    };
                    return;
                }

                if($scope.mail.sub_data_array && $scope.mail.sub_data_array.length){
                    $scope.mail.sub_data = {};
                    $scope.mail.sub_data_array.forEach(function(sub_item){
                        $scope.mail.sub_data[sub_item.key] = sub_item.value;
                    });
                }

                $http.post('/admin/api/preview_mail', $scope.mail).then(function(response){
                    $scope.preview_mail = response.data;
                    $scope.status.preview_mail = {};
                }, function(){
                    $scope.status.preview_mail = {
                        error: 'Compiling error. Perhaps the problem is to use currently not existing variables ot just not set page object'
                    }
                })
            }
            var debounceRenderPreview = debounce(1000, renderMailPreview);

            function loadingRenderPreview(){
                $scope.preview_mail = {};
                $scope.status.preview_mail = {
                    loading: true
                };

                debounceRenderPreview();
            }
            $scope.$watch('mail.mail_template_id', loadingRenderPreview);
            $scope.$watch('mail.page_id', loadingRenderPreview);

            $scope.$watch('mail.mail_template.title', loadingRenderPreview);
            $scope.$watch('mail.mail_template.content', loadingRenderPreview);

            $scope.$watch('mail.sub_data_array', loadingRenderPreview, true);

            $scope.saveMailTemplate = function(){
                $scope.mail.mail_template.$update().then(function(){
                    $scope.status.mail_template = {};
                })
            };

            //======================================
            //SEND MAIL
            //======================================

            $scope.sendMail = function(){
                //Validate for require fields
                $scope.hasErrors = {};
                var required = ['subscribers_groups_ids', 'mail_template_id'];
                required.forEach(function(reqField){
                    if(!$scope.mail[reqField] || (angular.isArray($scope.mail[reqField]) && !$scope.mail[reqField].length))
                        $scope.hasErrors[reqField] = true;
                    else
                        delete $scope.hasErrors[reqField];
                });

                if(!_.isEmpty($scope.hasErrors))
                    return;

                if($scope.status.mail_template.dirty){
                    if(!confirm('Are you sure want to send mail without last not saved changes in mail template? For save changes click "Save mail template" button.'))
                        return;
                }

                $scope.status.mail.loading = true;

                $scope.mail.sub_data = {};
                $scope.mail.sub_data_array.forEach(function(sub_item){
                    $scope.mail.sub_data[sub_item.key] = sub_item.value;
                });

                //always create new mail
                $scope.mail.id = null;
                $scope.mail.$save().then(function(result){
                    $scope.mail = angular.copy(defaultMail);

                    $scope.alert = 'Mail sent!';

                    $scope.getSentMails();

                    $scope.status.mail = {};
                }, function(){
                    $scope.status.mail.error = true;
                })
            };

            $scope.closeAlert = function(){
                $scope.alert = ''
            };

            $scope.addNewSubItem = function(){
                angular.merge($scope.mail.sub_data, {'':''});
            }
    }]);
