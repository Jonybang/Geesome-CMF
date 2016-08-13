angular.module('admin-app')
    .factory('DBManageTagsConfig', ['Tags', function(Tags) {

        this.entityName = 'Tags';

        this.aeGridOptions = {
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

        return this;
    }]);