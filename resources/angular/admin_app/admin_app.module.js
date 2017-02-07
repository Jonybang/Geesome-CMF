angular
    .module('admin_app', [
        'ngResource',
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngMaterial',
        'ui.router',
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
    .config(['$mdThemingProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', '$compileProvider', '$mdDateLocaleProvider', 'AppPaths',
        function($mdThemingProvider, $urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, $compileProvider, $mdDateLocaleProvider, AppPaths) {

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

            $mdThemingProvider.theme('default')
                .primaryPalette('orange', {
                    'default': '800',
                    'hue-1': '200',
                    'hue-2': '100',
                    'hue-3': '100'
                })
                .accentPalette('cyan', {
                    'default': '800',
                    'hue-1': '700'
                })
                .warnPalette('pink', {
                    'default': 'A700',
                    'hue-1': '700',
                    'hue-2': '800',
                    'hue-3': '900'
                })
                .backgroundPalette('grey', {
                    'default': '50',
                    'hue-1': '50',
                    'hue-2': '100',
                    'hue-3': '400'
                });

            $compileProvider.preAssignBindingsEnabled(true);

            $mdDateLocaleProvider.formatDate = function(date) {
                return moment(date).format('DD.MM.YYYY');
            };
        }])
    .run(['$rootScope', 'ServerData', 'AEditConfig', function($rootScope, ServerData, AEditConfig){

        //Get current user and set his id as author id
        ServerData.getCurrentUser(function(current_user){
            $rootScope.current_user = current_user;
        });

        //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
        //    ServerData.reload();
        //});
        //config for marcelgwerder/laravel-api-handler
        AEditConfig.grid_options.additional_request_params._config = "meta-total-count,meta-filter-count,response-envelope";
    }]);