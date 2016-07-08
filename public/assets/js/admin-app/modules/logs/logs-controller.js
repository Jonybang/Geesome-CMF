angular.module('app')
    .controller('LogsController', ['$scope', 'Logs', function($scope, Logs) {
        $scope.logs = Logs.query();

        $scope.aGridOptions = {
            caption: '',
            create: false,
            edit: false,
            orderBy: '-id',
            resource: Logs,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'action',
                    modal: 'self',
                    label: 'Action',
                    new_placeholder: 'New Action',
                    required: true
                },
                {
                    name: 'user_id',
                    label: 'User'
                },
                {
                    name: 'logable_name',
                    label: 'Item Name'
                },
                {
                    name: 'logable_type',
                    label: 'Item Type'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);