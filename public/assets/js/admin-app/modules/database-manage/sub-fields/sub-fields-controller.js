angular.module('admin-app')
    .controller('DBManageSubFieldsController', ['$scope', 'DBManageGeneralConfig', 'EntityConfig', function($scope, DBManageGeneralConfig, EntityConfig) {

        angular.extend($scope, EntityConfig);

        $scope.sub_fields_types = [];
        $scope.aeGridSubFieldsTypesOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubFieldsTypesOptions);

        $scope.sub_fields = [];
        $scope.aeGridSubFieldsOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubFieldsOptions);

        $scope.sub_fields_values = [];
        $scope.aeGridSubFieldsValuesOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubFieldsValuesOptions);
    }]);