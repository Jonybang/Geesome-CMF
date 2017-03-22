angular
    .module('admin_app')
    .directive('sfMultiselect', ['$timeout', '$resource', 'AppPaths', 'Pages', function($timeout, $resource, AppPaths, Pages) {
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

                scope.resource = Pages;

                scope.$watch('ngModel', function(){
                    if(!scope.ngModel){
                        scope.fakeModel = [];
                        return;
                    }

                    if(JSON.parse(scope.ngModel) != scope.fakeModel)
                        scope.fakeModel = JSON.parse(scope.ngModel);
                });


                scope.$watch('subFieldResource.config', function(configJSON){
                    if(!configJSON)
                        return;

                    var config = JSON.parse(configJSON);
                    if(config.url){
                        scope.resource = $resource(config.url + '/:id', { id: '@id' }, {'update': { method: 'PUT' }});
                    }
                    if(config.fields && config.fields.length){
                        scope.fields = _.isObject(config.fields[0]) ? config.fields : config.fields.map(function(field){return {name: field, label: _.upperFirst(_.upperCase(field))}});
                        scope.addder = true;
                    } else {
                        scope.fields = null;
                        scope.addder = false;
                    }
                });

                scope.changed = function(){
                    scope.ngModel = JSON.stringify(scope.fakeModel);
                }
            }

        };
    }]);