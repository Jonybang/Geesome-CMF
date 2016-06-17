angular
    .module('app')
    .directive('subFieldsList', ['$timeout', '$compile', 'AppPaths', 'SubFieldsValues', function($timeout, $compile, AppPaths, SubFieldsValues) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?',
                api: '=?'
            },
            link: function (scope, element) {
                var sub_fields_values_names = [];

                function init(){
                    var tplHtml = '';
                    scope.resources = {};
                    sub_fields_values_names = [];

                    scope.ngModel.forEach(function(sub_field){
                        scope.resources[sub_field.name] = sub_field;
                        var sub_field_value_name = sub_field.name + '_value';
                        scope.resources[sub_field_value_name] = new SubFieldsValues({sub_field_id: sub_field.id});
                        sub_fields_values_names.push(sub_field_value_name);

                        var directive = sub_field.sub_field_type.directive;
                        tplHtml += '<label>' + (sub_field.title || sub_field.name) + '</label>';
                        tplHtml += '<' + directive + ' ng-model="resources.' + sub_field_value_name + '" ' +
                            'page-resource="pageResource" template-resource="templateResource" ' +
                            'sub-field-resource="resources.' + sub_field.name + '"></' + directive + '>';
                        tplHtml += '<div><small>' + (sub_field.description || '') + '</small></div>';
                    });

                    var template = angular.element(tplHtml);

                    var linkFn = $compile(template)(scope);
                    element.html(linkFn);
                }

                scope.$watchCollection('ngModel', function(sub_fields){
                    if(!sub_fields)
                        return;

                    init();
                });

                if(scope.api){
                    scope.api.saveSubFieldsValues = function(pageResource){
                        sub_fields_values_names.forEach(function(sf_val_name){
                            var subFieldValueResource = scope.resources[sf_val_name];
                            subFieldValueResource.page_id = pageResource.id;
                            subFieldValueResource.$save();
                        });

                        init();
                    }
                }
            }
        };
    }]);