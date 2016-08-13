app.factory('PageFormManage', ['Templates', 'Contexts', 'Pages', 'Users', 'Tags', 'ControllerActions', function(Templates, Contexts, Pages, Users, Tags, ControllerActions) {

    this.models = {
        templates: Templates,
        contexts: Contexts,
        pages: Pages,
        users: Users,
        tags: Tags,
        controller_actions: ControllerActions
    };

    this.fields = {
        templates: [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'key',
                label: 'Key(Path in templates directory)'
            }
        ],
        contexts: [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'key',
                label: 'Key'
            },
            {
                name: 'role',
                label: 'Role of context(lang for example)'
            }
        ],
        pages: [
            {
                name: 'title',
                label: 'Title'
            },
            {
                name: 'template_id',
                label: 'Template',
                type: 'select',
                model: Templates,
                list: 'templates',
                or_name_field: 'key'
            }
        ],
        users: [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'email',
                label: 'Email'
            },
            {
                name: 'password',
                label: 'Password',
                type: 'password'
            }
        ],
        tags: [
            {
                name: 'name',
                label: 'Name'
            }
        ],
        controller_actions: [
            {
                name: 'key',
                label: 'Key(ControllerName@actionName)'
            },
            {
                name: 'name',
                label: 'Name'
            }
        ]
    };

    return this;
}]);