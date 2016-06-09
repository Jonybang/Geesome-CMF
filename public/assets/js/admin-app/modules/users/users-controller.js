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
                    new_placeholder: 'New Name',
                    required: true
                },
                {
                    name: 'email',
                    modal: 'self',
                    label: 'E-mail',
                    new_placeholder: 'New email',
                    required: true
                }
            ]
        };
    }]);