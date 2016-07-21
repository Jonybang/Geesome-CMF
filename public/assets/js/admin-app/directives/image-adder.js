angular
    .module('app')
    .directive('imageAdder', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/image-adder.html',
            scope: {
                ngModel: '='
            },
            link: function (scope, element) {

            }
        };
    }]);