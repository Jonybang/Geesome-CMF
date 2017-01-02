angular
    .module('admin_app')
    .directive('sfMultiselect', ['$timeout', 'AppPaths', 'Pages', function($timeout, AppPaths, Pages) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_multiselect/sf_multiselect.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                config: '=?',
                pageResource: '=?',
                templateResource: '=?',
                subFieldResource: '=?'
            },
            link: function (scope, element) {

                scope.pages = Pages;

                scope.$watch('ngModel', function(){
                    if(!scope.ngModel){
                        scope.fakeModel = [];
                        return;
                    }

                    if(JSON.parse(scope.ngModel) != scope.fakeModel)
                        scope.fakeModel = JSON.parse(scope.ngModel);
                });

                scope.changed = function(){
                    scope.ngModel = JSON.stringify(scope.fakeModel);
                }
            }

        };
    }]);