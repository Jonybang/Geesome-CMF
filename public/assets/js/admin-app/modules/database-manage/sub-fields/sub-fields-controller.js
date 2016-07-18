angular.module('app')
    .controller('SubFieldsController', ['$scope', 'SubFields', 'SubFieldsTypes', 'SubFieldsValues', 'Templates', 'Pages', function($scope, SubFields, SubFieldsTypes, SubFieldsValues, Templates, Pages) {
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
                    name: 'key',
                    modal: 'self',
                    label: 'Sub field type key',
                    new_placeholder: 'New Sub Field Type',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
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
                    name: 'key',
                    modal: 'self',
                    label: 'Sub field key',
                    new_placeholder: 'New Sub Field',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
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
                    list: 'sub_fields_types',
                    or_name_field: 'key'
                },
                {
                    name: 'templates_ids',
                    label: 'Templates',
                    type: 'multiselect',
                    resource: Templates,
                    list: 'templates',
                    table_hide: true,
                    or_name_field: 'key'
                }
            ],
            lists: {
                sub_fields_types: $scope.sub_fields_types
            }
        };

        $scope.sub_fields_values = SubFieldsValues.query();

        $scope.aGridSubFieldsValuesOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubFieldsValues,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'value',
                    label: 'Sub field value',
                    type: 'textarea',
                    new_placeholder: 'New Sub Field value',
                    required: true
                },
                {
                    name: 'sub_field_id',
                    label: 'Sub field',
                    type: 'select',
                    list: 'sub_fields',
                    or_name_field: 'key',
                    required: true
                },
                {
                    name: 'page_id',
                    label: 'Page',
                    type: 'select',
                    list: 'pages',
                    resource: Pages,
                    name_field: 'title',
                    required: true
                }
            ],
            lists: {
                sub_fields: $scope.sub_fields
            }
        };
    }]);