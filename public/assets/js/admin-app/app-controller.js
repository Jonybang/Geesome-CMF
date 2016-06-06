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