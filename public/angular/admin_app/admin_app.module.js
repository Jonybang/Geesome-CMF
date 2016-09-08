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
    .config(['$mdThemingProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 'AppPaths', 'NotificationProvider',
        function($mdThemingProvider, $urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, AppPaths, NotificationProvider) {

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

            var cyanWithWhite = $mdThemingProvider.extendPalette('orange', {
                '50': 'FFFFFF',
                '100': 'FFF3E0',
                '200': 'FFE0B2',
                'A100': 'FFFFFF',   // md-menu-content background,
                'A200': '212121'    // md-menu-content text
            });
            $mdThemingProvider.definePalette('deepPurpleWithWhite', cyanWithWhite);

            $mdThemingProvider.theme('default')
                .primaryPalette('orange', {
                    'default': '500',
                    'hue-1': '400',
                    'hue-2': '300',
                    'hue-3': '200'
                })
                .accentPalette('green', {
                    'default': '300',
                    'hue-1': '400',
                    'hue-2': '500',
                    'hue-3': '700'
                })
                .warnPalette('red', {
                    'default': '500',
                    'hue-1': '700'
                })
                .backgroundPalette('deepPurpleWithWhite', {
                    'default': '50',
                    'hue-1': '50',
                    'hue-2': '100',
                    'hue-3': '200'
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
        //config for marcelgwerder/laravel-api-handler
        AEditConfig.grid_options.additional_request_params._config = "meta-total-count,meta-filter-count,response-envelope";
    }]);