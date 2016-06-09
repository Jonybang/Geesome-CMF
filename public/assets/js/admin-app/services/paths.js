var app_path = '/assets/js/admin-app/';
angular.module('app')
    .constant('AppPaths', {
            app: app_path,
            app_tpls: app_path + 'templates/',
            modules: app_path + 'modules/',
            dashboard_tpls: app_path + 'modules/dashboard/templates/',
            settings_tpls: app_path + 'modules/settings/templates/',
            pages_tpls: app_path + 'modules/pages/templates/',
            logs_tpls: app_path + 'modules/logs/templates/',
            users_tpls: app_path + 'modules/users/templates/'
    });