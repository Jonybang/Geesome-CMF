angular
    .module('admin-app')
    .service('ServerData', ['$http', function($http){
        var self = this;

        var data_variables = {
            'CurrentUser': '/admin/api/current_user',
            'SiteSettings': '/admin/api/site_settings_dictionary'
        };

        self.reload = function(){
            angular.forEach(data_variables, function(url, var_name) {
                //get data from service and set to service object as field by var_name
                self[var_name] = {};
                self[var_name].$promise = $http.get(url).then(function (response) {
                    angular.extend(self[var_name], response.data);
                    self[var_name].$promise = null;
                    return self[var_name];
                });

                //generate callbacks for simple get data, for example:
                //
                //ServerData.getCurrentUser(function(current_user){
                //  $scope.current_user = current_user;
                //});
                //
                self['get' + var_name] = function(callback){
                    //if data not yet received or already received
                    if(self[var_name].$promise)
                        self[var_name].$promise.then(callback);
                    else
                        callback(self[var_name]);
                }
            });
        };

        self.reload();

        return self;
    }]);