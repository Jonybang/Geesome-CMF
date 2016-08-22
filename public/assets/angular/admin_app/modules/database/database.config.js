angular.module('admin_app.database')
    .service('DatabaseConfig', [function(){

        this.menu = [
            {
                title: 'Pages',
                route:   'app.db.pages'
            },
            {
                title: 'Translations',
                route:   'app.db.translations'
            },
            {
                title: 'Mail Templates',
                route:   'app.db.mail_templates'
            },
            {
                title: 'Subscribers',
                route:   'app.db.subscribers'
            },
            {
                title: 'Sent Mails',
                route:   'app.db.sent_mails'
            },
            {
                title: 'Settings',
                route:   'app.db.settings'
            },
            {
                title: 'Logs',
                route:   'app.db.logs'
            },
            {
                title: 'Tags',
                route:   'app.db.tags'
            },
            {
                title: 'Templates',
                route:   'app.db.templates'
            },
            {
                title: 'SubFields',
                route:   'app.db.sub_fields'
            },
            {
                title: 'Users',
                route:   'app.db.users'
            }
        ];

        return this;
    }]);