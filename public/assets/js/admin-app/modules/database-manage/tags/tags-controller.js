angular.module('app')
    .controller('TagsController', ['$scope', 'Tags', function($scope, Tags) {
        $scope.tags = Tags.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: Tags,
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
                    new_placeholder: 'New Tag',
                    required: true
                }
            ]
        };
    }]);