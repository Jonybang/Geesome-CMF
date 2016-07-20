angular.module('app')
    .controller('SettingsController', ['$scope', 'Settings', function($scope, Settings) {
        $scope.settings = [];

        $scope.aGridOptions = {
            caption: 'All settings available in templates.',
            orderBy: '-id',
            resource: Settings,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Setting key',
                    new_placeholder: 'New Setting',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);