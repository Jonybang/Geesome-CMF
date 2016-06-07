angular.module('app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', function($scope, $http, AppPaths) {
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
                heading: 'Accounts',
                route:   'app.accounts',
                disable: true
            }
        ];

        $http.get('/admin/api/cur_user').then(function(response){
            self.cur_user = response.data;
        });
    }]);