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
angular.module('app')
    .factory('AppPaths', [function(){
        this.app = '/assets/js/admin-app/';
        this.app_tpls = this.app_path + 'templates/';

        this.modules = this.app_path + 'modules/';
        this.dashboard_tpls = this.modules_path + 'dashboard/templates/';
        this.settings_tpls = this.modules_path + 'settings/templates/';

        return this;
    }]);
angular.module('app')
    .controller('SettingsController', ['$scope', 'Settings', function($scope, Settings) {
        $scope.settings = Settings.get();
    }]);

angular.module('app')
    .controller('DashboardController', ['$scope', function($scope) {

    }]);
