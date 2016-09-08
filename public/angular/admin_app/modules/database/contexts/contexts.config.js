angular.module('admin_app.database')
    .factory('DBManageContextsConfig', ['Contexts', function(Contexts) {

        this.entityName = 'Contexts';

        this.aeGridOptions = {
            resource: Contexts,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Context key',
                    new_placeholder: 'New Context',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description'
                },
                {
                    name: 'role',
                    label: 'Role'
                },
                {
                    name: 'index',
                    label: 'Index'
                },
                {
                    name: 'is_hide',
                    label: 'Is hide',
                    type: 'bool'
                }
            ]
        };

        return this;
    }]);