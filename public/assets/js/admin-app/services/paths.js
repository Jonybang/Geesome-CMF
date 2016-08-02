var app_path = '/assets/js/admin-app/';
var app_modules_path = app_path + 'modules/';

angular.module('app')
    .constant('AppPaths', {
            app:                    app_path,
            app_tpls:               app_path + 'templates/',
            modules:                app_modules_path,
            db_manage_module:       app_modules_path + 'database-manage',
            page_form_tpls:         app_modules_path + 'page-form/templates/',
            post_form_tpls:         app_modules_path + 'post-form/templates/',

            settings_tpls:          app_modules_path + 'database-manage/settings/templates/',
            pages_tpls:             app_modules_path + 'database-manage/pages/templates/',
            mail_templates_tpls:    app_modules_path + 'database-manage/mail-templates/templates/',
            logs_tpls:              app_modules_path + 'database-manage/logs/templates/',
            users_tpls:             app_modules_path + 'database-manage/users/templates/',
            tags_tpls:              app_modules_path + 'database-manage/tags/templates/',
            templates_tpls:         app_modules_path + 'database-manage/templates/templates/',
            sub_fields_tpls:        app_modules_path + 'database-manage/sub-fields/templates/',
            dictionary_tpls:        app_modules_path + 'database-manage/dictionary/templates/',
            subscribers_tpls:       app_modules_path + 'database-manage/subscribers/templates/',
            sent_mails_tpls:       app_modules_path + 'database-manage/sent-mails/templates/',

            mailing_tpls:           app_modules_path + 'site-manage/mailing/templates/'
    });