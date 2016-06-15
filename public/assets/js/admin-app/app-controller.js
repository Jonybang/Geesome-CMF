angular.module('app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'AppData', function($scope, $http, AppPaths, AppData) {
        var self = this;

        self.menuList = [
            {
                heading: 'Dashboard',
                route:   'app.dashboard'
            },
            {
                heading: 'Pages',
                route:   'app.pages'
            },
            {
                heading: 'Tags',
                route:   'app.tags'
            },
            {
                heading: 'Settings',
                route:   'app.settings'
            },
            {
                heading: 'Logs',
                route:   'app.logs'
            },
            {
                heading: 'Templates',
                route:   'app.templates'
            },
            {
                heading: 'SubFields',
                route:   'app.sub_fields'
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