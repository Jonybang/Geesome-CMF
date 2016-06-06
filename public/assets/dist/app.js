angular
    .module('app', ['a-edit', 'ui.router'])
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
                .state('app.settings', {
                    url: '/settings',
                    controller: 'SettingsController',
                    templateUrl: AppPaths.settings_tpls + 'index.html'
                });

            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("/admin");
        }]);
angular.module('app')
    .controller('AppController', ['$scope', function($scope) {
        this.menuList = [
            {
                heading: 'Dashboard',
                route:   'app.dashboard'
            },
            {
                heading: 'Settings',
                route:   'app.settings'
            },
            {
                heading: 'Accounts',
                route:   'app.accounts',
                disable: true
            }
        ];
    }]);
var app = angular.module('app');

var defaultOptions = {
    'update': { method:'PUT' }
};

app.factory('Settings', ['$resource', function($resource) {
    return $resource('/settings/:id', null, defaultOptions);
}]);
var app_path = '/assets/js/admin-app/';
angular.module('app')
    .constant('AppPaths', {
            app: app_path,
            app_tpls: app_path + 'templates/',
            modules: app_path + 'modules/',
            dashboard_tpls: app_path + 'modules/dashboard/templates/',
            settings_tpls: app_path + 'modules/settings/templates/'
    });
angular.module('app')
    .controller('DashboardController', ['$scope', function($scope) {

    }]);

angular.module('app')
    .controller('SettingsController', ['$scope', 'Settings', function($scope, Settings) {
        $scope.settings = Settings.get();
    }]);
