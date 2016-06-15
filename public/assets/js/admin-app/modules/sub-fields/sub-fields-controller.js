angular.module('app')
    .controller('SubFieldsController', ['$scope', 'SubFields', 'SubFieldsTypes', function($scope, SubFields, SubFieldsTypes) {
        $scope.sub_fields_types = SubFieldsTypes.query();

        $scope.aGridSubFieldsTypesOptions = {
            caption: '',
            orderBy: '-id',
            model: SubFieldsTypes,
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
                }
            ]
        };

        $scope.sub_fields_types.$promise.then(function(){

        });
        $scope.sub_fields = SubFields.query();

        $scope.aGridSubFieldsOptions = {
            caption: '',
            orderBy: '-id',
            model: SubFields,
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
                    name: 'sub_field_type_id',
                    label: 'Sub field type',
                    type: 'select',
                    list: 'sub_fields_types'
                }
            ],
            lists: {
                sub_fields_types: $scope.sub_fields_types
            }
        };
    }]);