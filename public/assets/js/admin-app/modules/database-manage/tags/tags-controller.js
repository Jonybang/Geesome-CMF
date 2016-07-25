angular.module('app')
    .controller('TagsController', ['$scope', 'Tags', function($scope, Tags) {
        $scope.tags = Tags.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: Tags,
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
                    new_placeholder: 'New Tag',
                    required: true
                },
                {
                    name: 'parent_tag_id',
                    label: 'Parent tag',
                    type: 'select',
                    resource: Tags,
                    list: 'tags'
                }
            ]
        };
    }]);