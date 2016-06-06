angular.module('app')
    .factory('AppPaths', [function(){
        this.app = '/assets/js/admin-app/';
        this.app_tpls = this.app_path + 'templates/';

        this.modules = this.app_path + 'modules/';
        this.dashboard_tpls = this.modules_path + 'dashboard/templates/';
        this.settings_tpls = this.modules_path + 'settings/templates/';

        return this;
    }]);