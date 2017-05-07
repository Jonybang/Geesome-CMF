angular
    .module('admin_app')
    .service('cmdToast', ['$mdToast', function($mdToast){
        var self = this;

        self.baseOptions = {
            textContent: '',
            action: 'ок',
            hideDelay: 10000,
            highlightAction: undefined,
            theme: undefined,
            toastClass: undefined
        };

        self.basic = function(textContent){
            return self.show({textContent: textContent});
        };
        self.success = function(textContent){
            return self.show({textContent: textContent, theme: 'success-toast'});
        };
        self.error = function(textContent){
            if(!textContent)
                textContent = 'Unexpected error, please contact to administrator.';

            return self.show({textContent: textContent, theme: 'error-toast'});
        };
        self.warn = function(textContent){
            return self.show({textContent: textContent, theme: 'warn-toast'});
        };

        self.show = function(options){
            options = angular.extend({}, self.baseOptions, options);

            var toastObj = $mdToast.simple();

            angular.forEach(options, function(value, name){
                if(value)
                    toastObj[name](value);
            });

            return $mdToast.show(toastObj);
        };

        return self;
    }]);