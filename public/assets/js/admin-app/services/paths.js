var app_path = '/assets/js/admin-app/';
var app_modules_path = app_path + 'modules/';

angular.module('admin-app')
    .constant('AppPaths', {
        app:                            app_path,
        app_tpls:                       app_path + 'templates/',
        modules:                        app_modules_path,
        db_manage_module:               app_modules_path + 'database-manage',

        db_manage_general_tpls:         app_modules_path + 'database-manage/_general/templates/',
        db_manage_sub_fields_tpls:      app_modules_path + 'database-manage/sub-fields/templates/',
        db_manage_translations_tpls:    app_modules_path + 'database-manage/translations/templates/',
        db_manage_subscribers_tpls:     app_modules_path + 'database-manage/subscribers/templates/',

        page_form_tpls:                 app_modules_path + 'site-manage/page-form/templates/',
        mailing_tpls:                   app_modules_path + 'site-manage/mailing/templates/'
    });