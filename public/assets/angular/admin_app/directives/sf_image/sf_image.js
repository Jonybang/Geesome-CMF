angular
    .module('admin_app')
    .directive('sfImage', ['$timeout', 'AppPaths', 'FileManger', function($timeout, AppPaths, FileManger) {
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
                    FileManger.getPath().then(function(path){
                        scope.ngModel = path;
                    }, function(){
                        //closed
                    })
                }
            }
        };
    }]);