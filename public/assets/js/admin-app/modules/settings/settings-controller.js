angular.module('app')
    .controller('SettingsController', ['$scope', 'Settings', function($scope, Settings) {
        $scope.settings = Settings.query();
        console.log(Settings.prototype);


        $scope.aGridOptions = {
            caption: 'All settings available in templates.',
            orderBy: '-id',
            model: Settings,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Setting',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value',
                    required: true
                },
                {
                    name: 'title',
                    label: 'Title'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);