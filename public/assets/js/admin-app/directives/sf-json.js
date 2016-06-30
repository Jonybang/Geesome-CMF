angular
    .module('app')
    .directive('sfJson', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-json.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                config: '=?',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {
                var defaultConfig
            }
        };
    }]);