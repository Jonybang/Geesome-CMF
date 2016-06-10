angular.module('app')
    .service('AppData', ['$http', function($http){
        var self = this;

        var data_variables = {
            'cur_user': '/admin/api/cur_user',
            'site_settings': '/admin/api/site_settings_dictionary'
        };

        self.reload = function(){
            angular.forEach(data_variables, function(url, var_name){
                self[var_name] = {};
                self[var_name].$promise = $http.get(url).then(function(response){
                    angular.extend(self[var_name], response.data);
                    self[var_name].$promise = null;
                    return self[var_name];
                });
            });
        };

        self.reload();

        return self;
    }]);