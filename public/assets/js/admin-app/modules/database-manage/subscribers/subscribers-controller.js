angular.module('admin-app')
    .controller('DBManageSubscribersController', ['$scope', 'DBManageGeneralConfig', 'EntityConfig', function($scope, DBManageGeneralConfig, EntityConfig) {
            angular.extend($scope, EntityConfig);

            $scope.subscribers_groups = [];
            $scope.aeGridSubscribersGroupsOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubscribersGroupsOptions);

            $scope.subscribers = [];
            $scope.aeGridSubscribersOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubscribersOptions);
    }]);