angular
    .module('app', ['ngResource', 'a-edit', 'ui.router', 'ui.router.tabs', 'wiz.markdown', 'dndLists'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 'AppPaths',
        function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, AppPaths) {

            $stateProvider
                .state('app', {
                    url: '/admin',
                    controller: 'AppController as app',
                    templateUrl: AppPaths.app_tpls + 'index.html',
                    abstract: true
                })
                .state('app.dashboard', {
                    url: '',
                    controller: 'DashboardController',
                    templateUrl: AppPaths.dashboard_tpls + 'index.html'
                })
                .state('app.pages', {
                    url: '/pages',
                    controller: 'PagesController',
                    templateUrl: AppPaths.pages_tpls + 'index.html'
                })
                .state('app.dictionary', {
                    url: '/dictionary',
                    controller: 'DictionaryController',
                    templateUrl: AppPaths.dictionary_tpls + 'index.html'
                })
                .state('app.settings', {
                    url: '/settings',
                    controller: 'SettingsController',
                    templateUrl: AppPaths.settings_tpls + 'index.html'
                })
                .state('app.logs', {
                    url: '/logs',
                    controller: 'LogsController',
                    templateUrl: AppPaths.logs_tpls + 'index.html'
                })
                .state('app.tags', {
                    url: '/tags',
                    controller: 'TagsController',
                    templateUrl: AppPaths.tags_tpls + 'index.html'
                })
                .state('app.templates', {
                    url: '/templates',
                    controller: 'TemplatesController',
                    templateUrl: AppPaths.templates_tpls + 'index.html'
                })
                .state('app.sub_fields', {
                    url: '/sub_fields',
                    controller: 'SubFieldsController',
                    templateUrl: AppPaths.sub_fields_tpls + 'index.html'
                })
                .state('app.users', {
                    url: '/users',
                    controller: 'UserController',
                    templateUrl: AppPaths.users_tpls + 'index.html'
                });
            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise("/admin");
        }])
    .run(['$rootScope', 'AppData', function($rootScope, AppData){

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
    }]);