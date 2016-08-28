angular
    .module('admin_app')
    .directive('sfImage', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_image/sf_image.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {
                scope.openFileManager = function(){
                    window.open('/filemanager?type=Images', 'FileManager', 'width=900,height=600');
                }
            }
        };
    }]);