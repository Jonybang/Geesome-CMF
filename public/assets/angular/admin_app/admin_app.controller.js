angular.module('admin_app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'ServerData', 'Contexts', 'Pages', 'DatabaseConfig', function($scope, $http, AppPaths, ServerData, Contexts, Pages, DatabaseConfig) {
        var self = this;

        self.tabs = [
            {title:'Pages Tree', route: 'app.page.create', icon: 'description'},
            {title: 'Database Manage', icon: 'storage', children: DatabaseConfig.menu}
        ];

        self.databaseMenu = DatabaseConfig.menu;
    }]);