angular.module('admin-app.database')
    .controller('DBManageGeneralController', ['$scope', 'DBManageGeneralConfig', 'EntityConfig', function($scope, DBManageGeneralConfig, EntityConfig) {
        $scope.items = [];

        angular.extend($scope, EntityConfig);

        $scope.aeGridOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridOptions);
    }]);