angular.module('app')
    .controller('SubFieldsController', ['$scope', 'SubFields', 'SubFieldsTypes', 'Templates', function($scope, SubFields, SubFieldsTypes, Templates) {
        $scope.sub_fields_types = SubFieldsTypes.query();

        $scope.aGridSubFieldsTypesOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubFieldsTypes,
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
                    new_placeholder: 'New Sub Field Type',
                    required: true
                },
                {
                    name: 'directive',
                    label: 'Angular directive name'
                }
            ]
        };

        $scope.sub_fields = SubFields.query();

        $scope.aGridSubFieldsOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubFields,
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
                    new_placeholder: 'New Sub Field',
                    required: true
                },
                {
                    name: 'title',
                    label: 'Title'
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea'
                },
                {
                    name: 'config',
                    label: 'Config',
                    type: 'textarea'
                },
                {
                    name: 'default_value',
                    label: 'Default value',
                    type: 'textarea'
                },
                {
                    name: 'sub_field_type_id',
                    label: 'Sub field type',
                    type: 'select',
                    list: 'sub_fields_types'
                },
                {
                    name: 'templates_ids',
                    label: 'Templates',
                    type: 'multiselect',
                    resource: Templates,
                    list: 'templates',
                    table_hide: true
                }
            ],
            lists: {
                sub_fields_types: $scope.sub_fields_types
            }
        };
    }]);