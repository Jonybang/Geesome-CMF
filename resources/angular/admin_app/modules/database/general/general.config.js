angular.module('admin_app.database')
    .factory('DBManageGeneralConfig', [function() {

        this.entityName = 'Entity Name';

        this.aeGridOptions = {
            caption: '',
            create: true,
            edit: true,
            order_by: '-id',
            resource: null,
            ajax_handler: true,
            get_list: true,
            paginate: true,
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
                    new_placeholder: 'New Entity',
                    required: true
                }
            ]
        };

        return this;
    }]);