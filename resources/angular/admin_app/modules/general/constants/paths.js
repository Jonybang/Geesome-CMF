var app_path = '/angular/admin_app/',
    modules_path = app_path + 'modules/';

angular.module('admin_app.general')
    .constant('AppPaths', {
        app:            app_path,
        modules:        modules_path,
        directives:     app_path + 'directives/',

        database:       modules_path + 'database/',
        pages:          modules_path + 'pages/',
        mailing:        modules_path + 'mailing/'
    });