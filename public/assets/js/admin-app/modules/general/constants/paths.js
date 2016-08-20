var app_path = '/assets/js/admin-app/',
    modules_path = app_path + 'modules/';

angular.module('admin-app.general')
    .constant('AppPaths', {
        app:            app_path,
        modules:        modules_path,

        database:       modules_path + 'database/',
        pages:          modules_path + 'pages/',
        mailing:        modules_path + 'mailing/'
    });