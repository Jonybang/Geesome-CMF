angular.module('admin_app.database')
    .service('DatabaseConfig', [function(){

        this.menu = [
            {
                heading: 'Pages',
                route:   'app.db.pages'
            },
            {
                heading: 'Translations',
                route:   'app.db.translations'
            },
            {
                heading: 'Mail Templates',
                route:   'app.db.mail_templates'
            },
            {
                heading: 'Subscribers',
                route:   'app.db.subscribers'
            },
            {
                heading: 'Sent Mails',
                route:   'app.db.sent_mails'
            },
            {
                heading: 'Settings',
                route:   'app.db.settings'
            },
            {
                heading: 'Logs',
                route:   'app.db.logs'
            },
            {
                heading: 'Tags',
                route:   'app.db.tags'
            },
            {
                heading: 'Templates',
                route:   'app.db.templates'
            },
            {
                heading: 'SubFields',
                route:   'app.db.sub_fields'
            },
            {
                heading: 'Users',
                route:   'app.db.users'
            }
        ];

        return this;
    }]);