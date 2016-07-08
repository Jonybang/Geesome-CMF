var app_path = '/assets/js/admin-app/';
angular.module('app')
    .constant('AppPaths', {
            app:                    app_path,
            app_tpls:               app_path + 'templates/',
            modules:                app_path + 'modules/',
            dashboard_tpls:         app_path + 'modules/dashboard/templates/',
            settings_tpls:          app_path + 'modules/settings/templates/',
            pages_tpls:             app_path + 'modules/pages/templates/',
            mail_templates_tpls:    app_path + 'modules/mail-templates/templates/',
            logs_tpls:              app_path + 'modules/logs/templates/',
            users_tpls:             app_path + 'modules/users/templates/',
            tags_tpls:              app_path + 'modules/tags/templates/',
            templates_tpls:         app_path + 'modules/templates/templates/',
            sub_fields_tpls:        app_path + 'modules/sub-fields/templates/',
            dictionary_tpls:        app_path + 'modules/dictionary/templates/'
    });