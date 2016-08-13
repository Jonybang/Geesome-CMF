angular.module('admin-app')
    .factory('DBManageUsersConfig', ['Users', 'Roles', function(Users, Roles) {

        this.entityName = 'Users';

        this.aeGridOptions = {
            resource: Users,
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
                    new_placeholder: 'New User',
                    required: true
                },
                {
                    name: 'email',
                    label: 'E-mail',
                    required: true
                },
                {
                    name: 'password',
                    type: 'password',
                    label: 'Password',
                    required: true
                },
                {
                    name: 'roles_ids',
                    type: 'multiselect',
                    label: 'Roles',
                    list: 'roles',
                    resource: Roles,
                    table_hide: true
                }
            ]
        };

        return this;
    }]);