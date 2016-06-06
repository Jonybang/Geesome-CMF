angular.module('app')
    .controller('SettingsController', ['$scope', 'Settings', function($scope, Settings) {
        $scope.settings = Settings.get();
    }]);