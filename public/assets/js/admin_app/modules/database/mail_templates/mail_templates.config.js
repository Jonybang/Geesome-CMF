angular.module('admin_app.database')
    .factory('DBManageMailTemplatesConfig', ['MailTemplates', function(MailTemplates) {

        this.entityName = 'Mail templates';

        this.aeGridOptions = {
            resource: MailTemplates,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    label: 'Template key',
                    modal: 'self',
                    required: true,
                    new_placeholder: 'New Mail Template'
                },
                {
                    name: 'name',
                    label: 'Template name'
                },
                {
                    name: 'title',
                    label: 'Mail Title'
                },
                {
                    name: 'content',
                    label: 'Main Content',
                    type: 'textarea',
                    width: '500px'
                }
            ]
        };

        return this;
}]);