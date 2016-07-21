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
                scope.chosen_mode = '';

                scope.$on("fileProgress", function(e, progress) {
                    scope.progress = progress.loaded / progress.total;
                });

                scope.clearInputs = function(){
                    scope.chosen_mode = '';
                    scope.uploadFile = null;
                    scope.previewImage = '';
                    scope.imageUri = '';
                }
            }
        };
    }]);