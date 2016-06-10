angular.module('app')
    .controller('UserController', ['$scope', 'Users', function($scope, Users) {
        $scope.users = Users.query();

        $scope.aGridOptions = {
            caption: '',
            create: true,
            edit: true,
            orderBy: '-id',
            model: Users,
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