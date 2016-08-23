angular
    .module('admin_app', [
        'ngResource',
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngMaterial',
        'ui.bootstrap',
        'ui.router',
        'ui.router.tabs',
        'ui-notification',
        'wiz.markdown',
        'dndLists',
        'rt.debounce',
        'ckeditor',
        'a-edit',

        'admin_app.general',
        'admin_app.pages',
        'admin_app.database',
        'admin_app.mailing'
    ])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 'AppPaths', 'NotificationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, AppPaths, NotificationProvider) {

            $stateProvider
                .state('app', {
                    url: '/admin',
                    controller: 'AppController as app',
                    templateUrl: AppPaths.app + 'templates/index.html',
                    abstract: true
                });

            //=====================================================
            // PAGES ROUTES: modules/pages/pages.routes.js
            //=====================================================

            //=====================================================
            // DATABASE ROUTES: modules/database/database.routes.js
            //=====================================================

            //=====================================================
            // MAILING ROUTES: modules/mailing/mailing.routes.js
            //=====================================================

            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise("/admin");

            NotificationProvider.setOptions({
                delay: 5000,
                startTop: 20,
                startRight: 10,
                verticalSpacing: 20,
                horizontalSpacing: 20,
                positionX: 'right',
                positionY: 'top'
            });
        }])
    .run(['$rootScope', 'ServerData', 'AEditConfig', function($rootScope, ServerData, AEditConfig){

        //Get current user and set his id as author id
        ServerData.getCurrentUser(function(current_user){
            $rootScope.current_user = current_user;
        });

        //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
        //    ServerData.reload();
        //});

        $rootScope.CKEditorOptions = {
            language: 'en',
            allowedContent: true,
            entities: false,
            toolbarGroups: [
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'justify'] },
                { name: 'styles' },
                { name: 'colors' },
                '/',
                { name: 'links' },
                { name: 'insert' },
                { name: 'tools' },
                { name: 'others' },
                { name: 'document',     groups: [ 'mode', 'document', 'doctools' ] },
                { name: 'editing',     groups: [ 'find', 'selection' ] }
            ]
        };

        //config for marcelgwerder/laravel-api-handler
        AEditConfig.grid_options.additional_request_params._config = "meta-total-count,meta-filter-count,response-envelope";
    }]);
angular
    .module('admin_app.general', [
    ]);
angular
    .module('admin_app.database', [
        'ui.router',

        'admin_app.general'
    ]);
angular
    .module('admin_app.mailing', [
        'ui.router',

        'admin_app.general'
    ]);
angular
    .module('admin_app.pages', [
        'ui.router',

        'admin_app.general'
    ]);
angular.module('admin_app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'ServerData', 'Contexts', 'Pages', 'DatabaseConfig', function($scope, $http, AppPaths, ServerData, Contexts, Pages, DatabaseConfig) {
        var self = this;

        self.tabs = [
            {title:'Pages Tree', route: 'app.page.create', icon: 'description'},
            {title: 'Database Manage', icon: 'storage', children: DatabaseConfig.menu}
        ];

        self.databaseMenu = DatabaseConfig.menu;
    }]);
//<loading-gif ng-if="!dataLoaded"> </loading-gif>
// TODO: добавить throttle - не показывать гифку если идет тут-же переключение туда - обратно
angular.module('admin_app')
    .directive('loadingGif', [function() {
        return {
            restrict: 'E',
            template: '<img ng-if="lgIf" src="assets/img/ajax-loading.gif"/>',
            scope: {
                lgIf: '='
            }
        };
    }]);
var defaultOptions = {
    'update': { method: 'PUT' }
};

//  simple resources
var resources_names = [
    'settings', 'contexts', 'pages', 'templates', 'mail_templates', 'logs', 'users', 'roles', 'tags',
    'sub_fields', 'sub_fields_types', 'sub_fields_values', 'controller_actions', 'translations', 'translations_groups',
    'translations_locales', 'subscribers', 'subscribers_groups', 'sent_mails'
];

resources_names.forEach(function(resource_name){
    var ResourceName = _.upperFirst(_.camelCase(resource_name));
    console.log('ResourceName', ResourceName);
    angular.module('admin_app').factory(ResourceName, ['$resource', function($resource) {
        return $resource('admin/api/' + resource_name + '/:id', { id: '@id' }, defaultOptions);
    }]);
});

// advanced resources
angular.module('admin_app').factory('PagesSEO', ['$resource', function($resource) {
    return $resource('admin/api/pages/:page_id/seo', { id: '@page_id' }, defaultOptions);
}]);

angular
    .module('admin_app')
    .service('ServerData', ['$http', function($http){
        var self = this;

        var data_variables = {
            'CurrentUser': '/admin/api/current_user',
            'SiteSettings': '/admin/api/site_settings_dictionary'
        };

        self.reload = function(){
            angular.forEach(data_variables, function(url, var_name) {
                //get data from service and set to service object as field by var_name
                self[var_name] = {};
                self[var_name].$promise = $http.get(url).then(function (response) {
                    angular.extend(self[var_name], response.data);
                    self[var_name].$promise = null;
                    return self[var_name];
                });

                //generate callbacks for simple get data, for example:
                //
                //ServerData.getCurrentUser(function(current_user){
                //  $scope.current_user = current_user;
                //});
                //
                self['get' + var_name] = function(callback){
                    //if data not yet received or already received
                    if(self[var_name].$promise)
                        self[var_name].$promise.then(callback);
                    else
                        callback(self[var_name]);
                }
            });
        };

        self.reload();

        return self;
    }]);
angular.module('admin_app.database')
    .service('DatabaseConfig', [function(){

        this.menu = [
            {
                title: 'Pages',
                route:   'app.db.pages'
            },
            {
                title: 'Translations',
                route:   'app.db.translations'
            },
            {
                title: 'Mail Templates',
                route:   'app.db.mail_templates'
            },
            {
                title: 'Subscribers',
                route:   'app.db.subscribers'
            },
            {
                title: 'Sent Mails',
                route:   'app.db.sent_mails'
            },
            {
                title: 'Settings',
                route:   'app.db.settings'
            },
            {
                title: 'Contexts',
                route:   'app.db.contexts'
            },
            {
                title: 'Logs',
                route:   'app.db.logs'
            },
            {
                title: 'Tags',
                route:   'app.db.tags'
            },
            {
                title: 'Templates',
                route:   'app.db.templates'
            },
            {
                title: 'SubFields',
                route:   'app.db.sub_fields'
            },
            {
                title: 'Users',
                route:   'app.db.users'
            }
        ];

        return this;
    }]);
angular
    .module('admin_app.database')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

        $stateProvider

        //=====================================================
        // DATABASE
        //=====================================================

            .state('app.db', {
                url: '/db',
                abstract: true,
                views: {
                    header:     { template: "<h3>Database</h3>" },
                    content:    { template: "<ui-view></ui-view>" }
                }
            });

        // states WITHOUT custom controller and template
        var generalStates = [
            'pages', 'mail_templates', 'sent_mails', 'settings', 'logs', 'tags', 'templates', 'users', 'contexts'
        ];

        generalStates.forEach(function(state_name){
            var StateName = _.upperFirst(_.camelCase(state_name));

            $stateProvider.state('app.db.' + state_name, {
                url: '/' + state_name,
                controller: 'DBManageGeneralController',
                templateUrl: AppPaths.database + 'general/templates/index.html',
                resolve: {
                    EntityConfig: 'DBManage' + StateName + 'Config'
                }
            })
        });

        // states WITH custom controller and template
        var customStates = [
            'subscribers', 'sub_fields', 'translations'
        ];

        customStates.forEach(function(state_name){
            var StateName = _.upperFirst(_.camelCase(state_name));

            $stateProvider.state('app.db.' + state_name, {
                url: '/' + state_name,
                controller: 'DBManage' + StateName + 'Controller',
                templateUrl: AppPaths.database + state_name + '/templates/index.html',
                resolve: {
                    EntityConfig: 'DBManage' + StateName + 'Config'
                }
            })
        });
    }]);
angular
    .module('admin_app.mailing')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

            $stateProvider

            //=====================================================
            // MAILING
            //=====================================================

                .state('app.mailing', {
                    url: '/manage',
                    abstract: true,
                    views: {
                        header:     { template: "<h3>Mailing</h3>" },
                        content:    { template: "<ui-view></ui-view>" }
                    }
                })
                    .state('app.mailing.manage', {
                        url: '/mailing/:sentMailId',
                        controller: 'MailFormController',
                        templateUrl: AppPaths.mailing + 'mail_form/templates/index.html'
                    });
        }]);
angular.module('admin_app')
    .controller('PagesController', ['$scope', '$http', 'AppPaths', 'ServerData', 'Contexts', 'Pages', 'DatabaseConfig', function($scope, $http, AppPaths, ServerData, Contexts, Pages, DatabaseConfig) {

        $scope.refreshPagesTree = function(){
            $scope.contexts = Contexts.query({_with: 'pages_tree', is_hide: 0});
        };

        $scope.refreshPagesTree();

        $scope.changeParent = function(event, dropped_index, dropped_item, parent){
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
    }]);
angular
    .module('admin_app.pages')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

            $stateProvider

            //=====================================================
            // PAGES
            //=====================================================

                .state('app.page', {
                    url: '',
                    abstract: true,
                    views: {
                        header:     { template: "<h3>Pages</h3>" },
                        content:    { templateUrl: AppPaths.pages + 'templates/index.html', controller: "PagesController" }
                    }
                })
                    .state('app.page.create', {
                        url: '?context_id',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.pages + 'page_form/templates/index.html'
                    })
                    .state('app.page.edit', {
                        url: '/page/:pageId?context_id',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.pages + 'page_form/templates/index.html'
                    });
        }]);
angular
    .module('admin_app')
    .directive('sfDate', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_date/sf_date.html',
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
    .module('admin_app')
    .directive('sfImage', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_image/sf_image.html',
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
    .module('admin_app')
    .directive('sfText', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_text/sf_text.html',
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
    .module('admin_app')
    .directive('sfJson', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_json/sf_json.html',
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
    .module('admin_app')
    .directive('sfTextarea', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_textarea/sf_textarea.html',
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
    .module('admin_app')
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

                    var template = angular.element("<div>" + tplHtml + "</div>");

                    var linkFn = $compile(template)(scope);
                    element.empty();
                    element.append(linkFn);
                }

                var debounceInit = _.debounce(init, 300);

                function checkForInit(){
                    if(!scope.ngModel || (scope.pageResource && scope.pageResource.$promise && !scope.pageResource.$promise.$$state.status))
                        return;

                    debounceInit();
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
                        templateUrl: AppPaths.directives + 'sub_fields_manager/add_sub_field.modal.html',
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
var app_path = '/assets/angular/admin_app/',
    modules_path = app_path + 'modules/';

angular.module('admin_app.general')
    .constant('AppPaths', {
        app:            app_path,
        modules:        modules_path,
        directives:     app_path + 'directives/',

        database:       modules_path + 'database/',
        pages:          modules_path + 'pages/',
        mailing:        modules_path + 'mailing/'
    });
angular.module('admin_app.database')
    .factory('DBManageContextsConfig', ['Contexts', function(Contexts) {

        this.entityName = 'Contexts';

        this.aeGridOptions = {
            resource: Contexts,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Context key',
                    new_placeholder: 'New Context',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description'
                },
                {
                    name: 'role',
                    label: 'Role'
                },
                {
                    name: 'index',
                    label: 'Index'
                },
                {
                    name: 'is_hide',
                    label: 'Is hide',
                    type: 'bool'
                }
            ]
        };

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageGeneralConfig', [function() {

        this.entityName = 'Entity Name';

        this.aeGridOptions = {
            caption: '',
            create: true,
            edit: true,
            orderBy: '-id',
            resource: null,
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
                    new_placeholder: 'New Entity',
                    required: true
                }
            ]
        };

        return this;
    }]);
angular.module('admin_app.database')
    .controller('DBManageGeneralController', ['$scope', 'DBManageGeneralConfig', 'EntityConfig', function($scope, DBManageGeneralConfig, EntityConfig) {
        $scope.items = [];

        angular.extend($scope, EntityConfig);

        $scope.aeGridOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridOptions);
    }]);
angular.module('admin_app.database')
    .factory('DBManageLogsConfig', ['Logs', 'Users', function(Logs, Users) {

        this.entityName = 'Logs';

        this.aeGridOptions = {
            create: false,
            edit: false,
            resource: Logs,
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

        return this;
}]);
angular.module('admin_app.database')
    .factory('DBManageMailTemplatesConfig', ['MailTemplates', function(MailTemplates) {

        this.entityName = 'Mail templates';

        this.aeGridOptions = {
            resource: MailTemplates,
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

        return this;
}]);
angular.module('admin_app.database')
    .factory('DBManagePagesConfig', ['Pages', 'Templates', 'Users', function(Pages, Templates, Users) {

        this.entityName = 'Pages';

        this.aeGridOptions = {
            resource: Pages,
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

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageSentMailsConfig', ['SentMails', 'MailTemplates', 'Pages', 'SubscribersGroups', function(SentMails, MailTemplates, Pages, SubscribersGroups) {

        this.entityName = 'Sent Mails';

        this.aeGridOptions = {
            resource: SentMails,
            create: false,
            edit: false,
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

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageSettingsConfig', ['Settings', 'Contexts', function(Settings, Contexts) {

        this.entityName = 'Settings';

        this.aeGridOptions = {
            caption: 'All settings available in templates.',
            resource: Settings,
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
                },
                {
                    name: 'context_id',
                    label: 'Context',
                    type: 'select',
                    list: 'contexts',
                    resource: Contexts
                }
            ]
        };

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageSubFieldsConfig', ['SubFields', 'SubFieldsTypes', 'SubFieldsValues', 'Templates', 'Pages', 'DBManageGeneralConfig', function(SubFields, SubFieldsTypes, SubFieldsValues, Templates, Pages, DBManageGeneralConfig) {

        this.subFieldsTypesName = 'Sub Fields Types';

        this.aeGridSubFieldsTypesOptions = {
            resource: SubFieldsTypes,
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

        this.subFieldsName = 'Sub Fields';

        this.aeGridSubFieldsOptions = {
            resource: SubFields,
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

        this.subFieldsValuesName = 'Sub Fields Values';

        this.aeGridSubFieldsValuesOptions = {
            resource: SubFieldsValues,
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

        return this;
    }]);
angular.module('admin_app.database')
    .controller('DBManageSubFieldsController', ['$scope', 'DBManageGeneralConfig', 'EntityConfig', function($scope, DBManageGeneralConfig, EntityConfig) {

        angular.extend($scope, EntityConfig);

        $scope.sub_fields_types = [];
        $scope.aeGridSubFieldsTypesOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubFieldsTypesOptions);

        $scope.sub_fields = [];
        $scope.aeGridSubFieldsOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubFieldsOptions);

        $scope.sub_fields_values = [];
        $scope.aeGridSubFieldsValuesOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubFieldsValuesOptions);
    }]);
angular.module('admin_app.database')
    .factory('DBManageSubscribersConfig', ['SubscribersGroups', 'Subscribers', function(SubscribersGroups, Subscribers) {

        this.subscribersGroupsName = 'Subscribers Groups';

        this.aeGridSubscribersGroupsOptions = {
            resource: SubscribersGroups,
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

        this.subscribersName = 'Subscribers';

        this.aeGridSubscribersOptions = {
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

        return this;
    }]);
angular.module('admin_app.database')
    .controller('DBManageSubscribersController', ['$scope', 'DBManageGeneralConfig', 'EntityConfig', function($scope, DBManageGeneralConfig, EntityConfig) {
            angular.extend($scope, EntityConfig);

            $scope.subscribers_groups = [];
            $scope.aeGridSubscribersGroupsOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubscribersGroupsOptions);

            $scope.subscribers = [];
            $scope.aeGridSubscribersOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubscribersOptions);
    }]);
angular.module('admin_app.database')
    .factory('DBManageTagsConfig', ['Tags', function(Tags) {

        this.entityName = 'Tags';

        this.aeGridOptions = {
            resource: Tags,
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

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageTemplatesConfig', ['Templates', 'SubFields', 'ControllerActions', function(Templates, SubFields, ControllerActions) {

        this.entityName = 'Tags';

        this.aeGridOptions = {
            caption: 'You must to add blade template file on address /resources/views/templates/example.bade.php(path:"example") before/after add row to DB!',
            resource: Templates,
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

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageTranslationsConfig', ['Translations', 'TranslationsGroups', 'TranslationsLocales', 'DBManageGeneralConfig', function(Translations, TranslationsGroups, TranslationsLocales, DBManageGeneralConfig) {

        this.entityName = 'Translations';

        this.aeGridOptions = {
            resource: Translations,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Translation key',
                    new_placeholder: 'New Translation',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value'
                },
                {
                    name: 'locale',
                    label: 'Locale',
                    type: 'textselect',
                    list: 'locales',
                    adder: true
                },
                {
                    name: 'group',
                    label: 'Group',
                    type: 'textselect',
                    list: 'groups',
                    adder: true
                }
            ],
            lists: {
                locales: TranslationsLocales.query(),
                groups: TranslationsGroups.query()
            }
        };

        return this;
    }]);
angular.module('admin_app.database')
    .controller('DBManageTranslationsController', ['$scope', '$http', 'Notification', 'DBManageGeneralConfig', 'EntityConfig', function($scope, $http, Notification, DBManageGeneralConfig, EntityConfig) {

        angular.extend($scope, EntityConfig);

        $scope.items = [];
        $scope.aeGridOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridOptions);

        $scope.importWithReplace = function(){
            if(!confirm('Are you sure to IMPORT to database with replace all translations? This action will rewrite database data.'))
                return;

            $http.post('admin/api/import_translations').then(function(){
                Notification.success('Import success!');
                $scope.aGridOptions = angular.copy($scope.aGridOptions);
            }, function(){
                Notification.error('Import error!');
            });
        };

        $scope.exportToFiles = function(){
            if(!confirm('Are you sure to EXPORT to files all translations? This action will rewrite resources/lang files content.'))
                return;

            $http.post('admin/api/export_translations').then(function(){
                Notification.success('Export success!');
            }, function(){
                Notification.error('Export error!');
            });
        }
    }]);
angular.module('admin_app.database')
    .factory('DBManageUsersConfig', ['Users', 'Roles', function(Users, Roles) {

        this.entityName = 'Users';

        this.aeGridOptions = {
            resource: Users,
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
                },
                {
                    name: 'roles_ids',
                    type: 'multiselect',
                    label: 'Roles',
                    list: 'roles',
                    resource: Roles,
                    table_hide: true
                }
            ]
        };

        return this;
    }]);
angular.module('admin_app.mailing')
    .controller('MailFormController', ['$scope', '$state', '$http', '$uibModal', 'debounce', 'Notification', 'AppPaths', 'ServerData', 'Pages', 'Templates', 'MailTemplates', 'SentMails', 'SubscribersGroups', 'Subscribers',
        function($scope, $state, $http, $uibModal, debounce, Notification, AppPaths, ServerData, Pages, Templates, MailTemplates, SentMails, SubscribersGroups, Subscribers) {

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
                    };
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
                Notification.info({message: 'Sending mail...', replaceMessage: true, delay: 999999});

                $scope.mail.sub_data = {};
                $scope.mail.sub_data_array.forEach(function(sub_item){
                    $scope.mail.sub_data[sub_item.key] = sub_item.value;
                });

                //always create new mail
                $scope.mail.id = null;
                $scope.mail.$save().then(function(result){
                    $scope.mail = angular.copy(defaultMail);

                    Notification.success({message: 'Mail sent!', replaceMessage: true});

                    $scope.getSentMails();

                    $scope.status.mail = {};
                }, function(){
                    $scope.status.mail.error = true;
                    Notification.error({message: 'Error. Something wrong...', replaceMessage: true});
                })
            };

            $scope.addNewSubItem = function(){
                angular.merge($scope.mail.sub_data, {'':''});
            }
    }]);
angular
    .module('admin_app.pages')
    .factory('PageFormConfig', ['Templates', 'Contexts', 'Pages', 'Users', 'Tags', 'ControllerActions', function(Templates, Contexts, Pages, Users, Tags, ControllerActions) {

    this.models = {
        templates: Templates,
        contexts: Contexts,
        pages: Pages,
        users: Users,
        tags: Tags,
        controller_actions: ControllerActions
    };

    this.fields = {
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
        contexts: [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'key',
                label: 'Key'
            },
            {
                name: 'role',
                label: 'Role of context(lang for example)'
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

    return this;
}]);
angular
    .module('admin_app.pages')
    .controller('PageFormController', ['$scope', '$state', '$http', '$uibModal', 'Notification', 'AppPaths', 'ServerData', 'PageFormConfig', 'Contexts', 'Pages', 'PagesSEO', 'Templates', 'Users', 'Tags', 'SubFields', 'ControllerActions',
        function($scope, $state, $http, $uibModal, Notification, AppPaths, ServerData, PageFormConfig, Contexts, Pages, PagesSEO, Templates, Users, Tags, SubFields, ControllerActions) {

            $scope.subFieldsApi = {};

            //Models for select inputs
            $scope.models = PageFormConfig.models;

            //Fields for adder functional at select inputs
            $scope.fields = PageFormConfig.fields;

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
            ServerData.getCurrentUser(function(current_user){
                $scope.current_user = current_user;
                defaultPage.author_id = current_user.id;

                angular.extend($scope.page, angular.extend({}, defaultPage, $scope.page));
            });

            //Get site settings and set default values to page object
            ServerData.getSiteSettings(function(site_settings){
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