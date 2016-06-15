angular.module('app')
    .controller('TemplatesController', ['$scope', 'Templates', function($scope, Templates) {
        $scope.templates = Templates.query();

        $scope.aGridOptions = {
            caption: 'You must to add blade template file on address /resources/views/templates/example.bade.php(path:"example") before/after add row to DB!',
            orderBy: '-id',
            model: Templates,
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
                    new_placeholder: 'New Template',
                    required: true
                },
                {
                    name: 'path',
                    label: 'Path',
                    required: true
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea'
                }
            ]
        };
    }]);