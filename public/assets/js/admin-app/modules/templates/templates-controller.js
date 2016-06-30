angular.module('app')
    .controller('TemplatesController', ['$scope', 'Templates', 'SubFields', 'ControllerActions', function($scope, Templates, SubFields, ControllerActions) {
        $scope.templates = Templates.query();

        $scope.aGridOptions = {
            caption: 'You must to add blade template file on address /resources/views/templates/example.bade.php(path:"example") before/after add row to DB!',
            orderBy: '-id',
            resource: Templates,
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
                },
                {
                    name: 'sub_fields_ids',
                    label: 'Sub fields',
                    type: 'multiselect',
                    resource: SubFields,
                    list: 'sub_fields',
                    table_hide: true
                },
                {
                    name: 'controller_actions_ids',
                    label: 'Controller actions',
                    type: 'multiselect',
                    resource: ControllerActions,
                    list: 'controller_actions',
                    table_hide: true
                }
            ]
        };
    }]);