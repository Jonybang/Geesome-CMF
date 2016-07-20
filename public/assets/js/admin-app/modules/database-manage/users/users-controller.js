angular.module('app')
    .controller('UserController', ['$scope', 'Users', function($scope, Users) {
        $scope.users = [];

        $scope.aGridOptions = {
            caption: '',
            create: true,
            edit: true,
            orderBy: '-id',
            resource: Users,
            ajax_handler: true,
            get_list: true,
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
                    new_placeholder: 'New User',
                    required: true
                },
                {
                    name: 'email',
                    label: 'E-mail',
                    required: true
                },
                {
                    name: 'password',
                    type: 'password',
                    label: 'Password',
                    required: true
                }
            ]
        };
    }]);