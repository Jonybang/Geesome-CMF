angular
    .module('admin_app')
    .directive('subFieldsManager', ['$timeout', '$compile', '$mdDialog', 'AppPaths', 'SubFields', 'SubFieldsValues', function($timeout, $compile, $mdDialog, AppPaths, SubFields, SubFieldsValues) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?',
                api: '=?',
                refreshSubFields: '&'
            },
            link: function (scope, element) {
                var sub_fields_values_names = [];

                function init(){
                    var tplHtml = '';
                    scope.resources = {};
                    sub_fields_values_names = [];

                    scope.ngModel.forEach(function(sub_field){
                        scope.resources[sub_field.key] = sub_field;
                        var sub_field_value_name = sub_field.key + '_value';

                        if(scope.pageResource && scope.pageResource.id)
                             SubFieldsValues.query({sub_field_id: sub_field.id, page_id: scope.pageResource.id}).$promise.then(function(result){
                                 scope.resources[sub_field_value_name] = result[0] || new SubFieldsValues({sub_field_id: sub_field.id});
                             });
                        else
                            scope.resources[sub_field_value_name] = new SubFieldsValues({sub_field_id: sub_field.id});

                        sub_fields_values_names.push(sub_field_value_name);

                        var directive = sub_field.type.directive;
                        tplHtml += '<label><span><md-tooltip md-direction="top">{ { $' + sub_field.key + ' } }</md-tooltip>' + (sub_field.name || sub_field.key) + '</span></label>';
                        tplHtml += '<' + directive + ' ng-model="resources.' + sub_field_value_name + '.value" ' +
                            'page-resource="pageResource" template-resource="templateResource" ' +
                            'sub-field-resource="resources.' + sub_field.key + '" is-edit="true"></' + directive + '>';
                        tplHtml += '<div><small>' + (sub_field.description || '') + '</small></div><hr>';
                    });

                    tplHtml += '' +
                        '<md-button class="md-raised md-primary margin-top" ng-click="addSubField()">' +
                            '<md-tooltip md-direction="top">Need to change template source code for take effect!</md-tooltip>' +
                            '<md-icon>add</md-icon> Add sub field to current template' +
                        '</md-button>';

                    var template = angular.element("<div>" + tplHtml + "</div>");

                    var linkFn = $compile(template)(scope);
                    element.empty();
                    element.append(linkFn);
                }

                var debounceInit = _.debounce(init, 300);

                function checkForInit(){
                    if(!scope.ngModel || (scope.pageResource && scope.pageResource.$promise && !scope.pageResource.$promise.$$state.status))
                        return;

                    debounceInit();
                }
                scope.$watchCollection('ngModel', checkForInit);
                scope.$watchCollection('pageResource', checkForInit);

                if(scope.api){
                    scope.api.saveSubFieldsValues = function(pageResource){
                        sub_fields_values_names.forEach(function(sf_val_name){
                            var subFieldValueResource = scope.resources[sf_val_name];
                            subFieldValueResource.page_id = pageResource.id;

                            if(subFieldValueResource.id)
                                subFieldValueResource.$update();
                            else
                                subFieldValueResource.$save();
                        });

                        init();
                    }
                }

                scope.addSubField = function(){
                    var modalInstance = $mdDialog.show({
                        templateUrl: AppPaths.directives + 'sub_fields_manager/add_sub_field.modal.html',
                        clickOutsideToClose: true,
                        locals: {
                            subField: new SubFields()
                        },
                        controller: ['$scope', '$mdDialog', 'subField', 'SubFieldsTypes', function($scope, $mdDialog, subField, SubFieldsTypes){
                            $scope.subField = subField;
                            $scope.mode = 'select';

                            $scope.models = {
                                SubFields: SubFields,
                                SubFieldsTypes: SubFieldsTypes
                            };
                            $scope.fields = {
                                sub_field_type: [
                                    {
                                        name: 'key',
                                        label: 'Key'
                                    },
                                    {
                                        name: 'name',
                                        label: 'Name'
                                    },
                                    {
                                        name: 'directive',
                                        label: 'Directive'
                                    }
                                ]
                            };
                            $scope.ok = function () {

                                $scope.hasErrors = {};

                                var required;
                                if($scope.mode == 'create')
                                    required = ['key', 'sub_field_type_id'];
                                else if($scope.mode == 'select')
                                    required = ['id'];

                                required.forEach(function(reqField){
                                    if(!$scope.subField[reqField])
                                        $scope.hasErrors[reqField] = true;
                                    else
                                        delete $scope.hasErrors[reqField];
                                });

                                if(!_.isEmpty($scope.hasErrors))
                                    return;

                                if($scope.mode == 'select')
                                    $scope.subField = $scope.subField.$get();

                                $mdDialog.hide($scope.subField);
                            };

                            $scope.cancel = function () {
                                $mdDialog.cancel();
                            };
                        }]
                    });

                    modalInstance.then(function (subField) {
                        if(subField.templates_ids)
                            subField.templates_ids.push(scope.pageResource.template_id);
                        else
                            subField.templates_ids = [scope.pageResource.template_id];

                        if(subField.id)
                            subField.$update();
                        else
                            subField.$save();

                        if(scope.refreshSubFields)
                            $timeout(scope.refreshSubFields);
                    });
                }
            }
        };
    }]);