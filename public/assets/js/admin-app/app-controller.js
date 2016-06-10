angular.module('app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'AppData', function($scope, $http, AppPaths, AppData) {
        var self = this;

        self.menuList = [
            {
                heading: 'Dashboard',
                route:   'app.dashboard'
            },
            {
                heading: 'Settings',
                route:   'app.settings'
            },
            {
                heading: 'Pages',
                route:   'app.pages'
            },
            {
                heading: 'Logs',
                route:   'app.logs'
            },
            {
                heading: 'Users',
                route:   'app.users'
            },
            {
                heading: 'Accounts',
                route:   'app.accounts',
                disable: true
            }
        ];
    }]);