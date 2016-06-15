angular.module('app')
    .controller('LogsController', ['$scope', 'Logs', function($scope, Logs) {
        $scope.logs = Logs.query();

        $scope.aGridOptions = {
            caption: '',
            create: false,
            edit: false,
            orderBy: '-id',
            model: Logs,
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
                    label: 'TableName'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);