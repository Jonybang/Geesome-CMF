// Code goes here
angular
  .module('a-edit', ['ui.bootstrap', 'angularMoment', 'ui.select', 'ngSanitize', 'wiz.markdown'])
  
  .run(['amMoment', 'uiSelectConfig', '$templateCache', function(amMoment, uiSelectConfig, $templateCache) {
    amMoment.changeLocale('ru');
    uiSelectConfig.theme = 'bootstrap';
    
    $templateCache.put('a-edit-image-popover.html', '<img class="img-responsive" ng-src="{{::image}}" alt="">');
    
    $templateCache.put('a-edit-date-input.html', '\
            <div class="date-input">\
            <span ng-if="!isEdit">{{ngModelStr}}</span>\
            \
            <div ng-if="isEdit" class="input-group">\
                <input\
                        type="text"\
                        class="form-control input-sm"\
                        \
                        name="{{$parent.name}}"\
                        ng-model="$parent.ngModel"\
                        placeholder="{{$parent.placeholder}}"\
                        \
                        uib-datepicker-popup="dd.MM.yyyy"\
                        datepicker-options="$parent.options"\
                        ng-init="$parent.ngModel = $parent.ngModel"\
                        is-open="isOpen"\
                        \
                        ng-enter="$parent.save()"\
                        ng-change="$parent.change()"/>\
                \
                <span class="input-group-btn">\
                  <button tabindex="-1" type="button" class="btn btn-sm btn-default" ng-click="isOpen=true"><i class="glyphicon glyphicon-calendar"></i></button>\
                </span>\
            </div>\
        \
        </div>\
    ');

    $templateCache.put('a-edit-bool-input.html', '\
        <span ng-if="!isEdit" ng-class="[\'glyphicon\',{\'glyphicon-check\': $parent.fakeModel, \'glyphicon-unchecked\': !$parent.fakeModel}]"></span>\
        <input ng-if="isEdit" ng-model="$parent.fakeModel" type="checkbox" class="form-control" name="{{$parent.name}}" ng-change="$parent.change()">\
    ');

    $templateCache.put('a-edit-popover-image.html', '\
        <a target="_blank" href="{{::image}}" uib-popover-template="imagePopoverPath" popover-placement="left" popover-trigger="mouseenter">\
            {{:: text || image}}\
        </a>\
    ');
    
  }]);

angular
    .module('a-edit')
    .directive('aeGrid', ['$timeout', '$compile', '$filter', 'AEditHelpers', 'AEditConfig', function($timeout, $compile, $filter, AEditHelpers, AEditConfig) {
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {
            //require
            ngModel: '=',
            //sub
            options: '=',
            //callbacks
            ngChange: '&',
            onSave: '&'
        },
        link: function (scope, element, attrs, ngModel) {
            var defaultOptions = {
                search: true,
                create: true,
                edit: true,
                delete: true,
                paginate: true,
                bold_headers: true,
                modal_adder: false,
                ajax_handler: false,
                resource: null,
                order_by: '-id',
                default_attrs: {},
                modal_index: 0,
                search_debounce: 200,
                fields: [],
                lists: {}
            };

            var new_item = {
                is_new: true
            };
            scope.new_item = angular.copy(new_item);
            scope.status = "";

            var mode = 'local';

            //request options for get list
            scope.gridRequestOptions = {};
            //actual options of grid controls
            scope.gridOptions = {};

            scope.gridOptions.current_page = 1;

            var variables = angular.extend({}, AEditConfig.grid_options.request_variables, AEditConfig.grid_options.response_variables);

            // *************************************************************
            // TEMPLATE INIT
            // *************************************************************

            scope.$watch('options', function(){
                if(!scope.options)
                    return;

                scope.actualOptions = angular.extend({}, defaultOptions, scope.options);
                AEditConfig.current_options = scope.actualOptions;
                
                angular.extend(scope.gridOptions, AEditConfig.grid_options, scope.actualOptions);
                scope.gridOptions.select_options = angular.extend({}, AEditConfig.grid_options, scope.actualOptions);

                if(scope.actualOptions.resource){
                    mode = 'remote';
                    if(scope.actualOptions.get_list)
                        scope.getList();
                }

                var tplSearch =
                    '<div class="input-group">' +
                        '<input type="text" class="form-control" ng-model="searchQuery" placeholder="Search" ng-model-options="{ debounce: ' + scope.actualOptions.search_debounce + ' }"/>' +
                        '<span class="input-group-btn">' +
                            '<button class="btn btn-default" ng-click="clearSearch()"><i class="glyphicon glyphicon-remove"></i></button>' +
                        '</span>' +
                    '</div>';

                var tplHead =
                    '<table class="table table-hover bootstrap-table">' +
                        '<caption>{{actualOptions.caption}}</caption>' +
                        '<thead>' +
                            '<tr>';

                var tplBodyNewItem =
                        '<tbody>' +
                            '<tr>';

                var tplBodyItem =
                        '<tbody>' +
                            '<tr ng-repeat="item in filtredList track by item.' + (mode == 'remote' ? 'id' : 'json_id') + '">';


                var select_list_request_options = {};
                select_list_request_options[variables['limit']] = scope.gridOptions.select_options.items_per_page;
                scope.actualOptions.fields.forEach(function(field, index){
                    if(field.resource && field.list && field.list != 'self'){
                        if(!scope.actualOptions.lists[field.list]){
                            scope.actualOptions.lists[field.list] = [];

                            AEditHelpers.getResourceQuery(field.resource, 'get', select_list_request_options).then(function(response){
                                scope.actualOptions.lists[field.list] = response[variables['list']] || response;
                            });
                        }
                    }

                    if(field.table_hide)
                        return;

                    if(field.resource){
                        scope[field.name + '_resource'] = field.resource;
                    }

                    var headerEl = scope.actualOptions.bold_headers ? 'th' : 'td';
                    tplHead += '<' + headerEl + '>' + field.label + '</' + headerEl + '>';

                    var style = 'style="';
                    if(field.width)
                        style += 'width:' + field.width + ';';
                    style += '"';

                    //for new item row
                    tplBodyNewItem += '<td><div ' + style + ' >';
                    //for regular item row
                    tplBodyItem += '<td ng-dblclick="item.is_edit = !item.is_edit"><div ' + style + ' >';

                    function getFieldDirective(is_new) {
                        var item_name = (is_new ? 'new_' : '' ) + 'item';
                        var field_name = field.name != 'self' ? field.name : '';

                        var list_variable;

                        if(field.list && field.list == 'self')
                            list_variable = 'ngModel';
                        else if(field.list)
                            list_variable = 'actualOptions.lists.' + field.list;

                        return AEditHelpers.generateDirectiveByConfig(field, {
                            item_name: item_name,
                            field_name: field_name,
                            readonly: field.readonly || !scope.actualOptions.edit,
                            always_edit: is_new,
                            is_new: is_new,
                            list_variable: list_variable,
                            get_list: false,
                            ajax_search: AEditConfig.se
                        });
                    }

                    tplBodyNewItem += getFieldDirective(true) + '</div></td>';
                    tplBodyItem += getFieldDirective(false) + '</div></td>';
                });

                if(scope.actualOptions.edit){
                    tplHead +=
                        '<th class="controls"></th>';

                    tplBodyNewItem +=
                        '<td class="controls">' +
                            '<icon-button type="primary" glyphicon="floppy-disk" ng-click="save(new_item)" size="sm"></icon-button>' +
                        '</td>';

                    tplBodyItem +=
                        '<td class="controls">' +
                            '<icon-button ng-show="item.is_edit" type="primary" glyphicon="floppy-disk" ng-click="save(item)"></icon-button>' +
                            '<icon-button ng-hide="item.is_edit" type="warning" glyphicon="pencil" ng-click="item.is_edit = true"></icon-button>' +
                            ( scope.actualOptions.delete ? '<icon-button type="danger" glyphicon="remove" ng-click="deleteConfirm(item)"></icon-button>' : '' ) +
                        '</td>';
                }

                tplHead +='</tr></thead>';

                tplBodyNewItem +='</tr>';

                tplBodyItem +='</tr></tbody></table>';

                var tplHtml = '';

                if(scope.actualOptions.search)
                    tplHtml += tplSearch;

                var tableHtml = '';

                tableHtml += tplHead;

                if(scope.actualOptions.create){

                    if(scope.actualOptions.modal_adder)
                        tplHtml += '<button class="btn btn-success" ng-click=""><span class="glyphicon glyphicon-plus"></span> Add</button>';
                    else
                        tableHtml += tplBodyNewItem;
                }

                tableHtml += tplBodyItem;

                if(scope.actualOptions.paginate) {
                    tableHtml += '<uib-pagination total-items="gridOptions.filter_items" items-per-page="gridOptions.items_per_page" ng-model="gridOptions.current_page" ng-change="getList()"></uib-pagination>';
                }

                var template = angular.element(tplHtml + tableHtml);

                var linkFn = $compile(template)(scope);
                element.html(linkFn);
            });

            // *************************************************************
            // GET LIST, SEARCH, PAGINATION AND SORTING
            // *************************************************************

            scope.getList = function(){
                if(!scope.actualOptions.ajax_handler)
                    return;

                if(scope.searchQuery)
                    scope.gridRequestOptions[variables['query']] = scope.searchQuery;
                else
                    delete scope.gridRequestOptions[variables['query']];

                scope.gridRequestOptions[variables['offset']] = (scope.gridOptions.current_page - 1) * scope.gridOptions.items_per_page;
                scope.gridRequestOptions[variables['limit']] = scope.gridOptions.items_per_page;

                angular.extend(scope.gridRequestOptions, scope.gridOptions.additional_request_params);

                AEditHelpers.getResourceQuery(scope.actualOptions.resource, 'search', scope.gridRequestOptions).then(function(response){
                    scope.ngModel = response[variables['list']] || response;

                    var meta_info = response[variables['meta_info']];
                    if(meta_info){
                        scope.gridOptions.total_items = meta_info[variables['total_count']];
                        scope.gridOptions.filter_items = meta_info[variables['filter_count']];
                    } else {
                        console.error('[AEGrid] For pagination needs some meta info in response!');
                    }
                });
            };

            // *************************************************************
            // CLIENT SEARCH
            // *************************************************************

            scope.search = function(newQuery, oldQuery){
                scope.filtredList = scope.ngModel;

                if(newQuery == oldQuery)
                    return;

                if(mode != 'local' && scope.actualOptions.ajax_handler){
                    scope.getList();
                    return;
                }

                if(scope.searchQuery)
                    scope.filtredList = $filter('filter')(scope.ngModel, scope.searchQuery);

                if(scope.actualOptions.order_by)
                    scope.filtredList = $filter('orderBy')(scope.filtredList, scope.actualOptions.order_by);
            };

            scope.$watch('searchQuery', scope.search);

            scope.clearSearch = function(){
                scope.searchQuery = '';
                scope.filtredList = scope.ngModel;
            };

            // *************************************************************
            // CREATE OR UPDATE
            // *************************************************************

            scope.save = function(item){
                if(!item)
                    return;

                item.errors || (item.errors = {});

                // validation - check required fields and password
                scope.actualOptions.fields.forEach(function(field){
                    //if field empty and required - add to errors, else delete from errors
                    if(field.required && !item[field.name])
                        item.errors[field.name] = true;
                    else if(item.errors[field.name])
                        delete item.errors[field.name];

                    //if password not changed and not new object
                    if(field.type == 'password' && item.id)
                        delete item.errors[field.name];

                    //if password not changed delete field from request data
                    if(field.type == 'password' && !item[field.name])
                        delete item[field.name];
                });

                // if there some errors
                if(!AEditHelpers.isEmptyObject(item.errors))
                    return;

                // actions after save
                function saveCallbacks(item){
                    if(scope.onSave)
                        $timeout(scope.onSave);

                    if(scope.ngChange)
                        $timeout(scope.ngChange);

                    scope.search();

                    item.is_edit = false;

                    scope.status = item.name + " saved!";
                    $timeout(function(){
                        scope.status = "";
                    }, 1000);

                    if(mode != 'remote'){
                        delete item.is_new;
                        delete item.is_edit;
                        delete item.errors;
                    }
                }

                // local json mode
                if(mode != 'remote'){
                    if(item.is_new){

                        item.json_id = 1;
                        scope.ngModel.forEach(function(local_item){
                            if(local_item.json_id >= item.json_id)
                                item.json_id = local_item.json_id + 1;
                        });

                        scope.ngModel.unshift(item);
                        scope.new_item = angular.copy(new_item);
                    }

                    saveCallbacks(item);

                    return;
                }

                var request_object = angular.copy(item);

                // check for files from file uploader
                var uploaders = Object.keys(request_object).filter(function(k){ return ~k.indexOf("__uploader") });
                // if exists - upload each file and set to *field*_ids array database object of file
                // TODO: realize mode for take paths of files(not ids of database rows with paths)
                if(uploaders.length){

                    uploaders.forEach(function(key){

                        function sendAll(){
                            var prop_name = key.replace('__uploader','');
                            if(!request_object[prop_name]){
                                sendItem();
                                return;
                            }

                            request_object[prop_name.substring(0, prop_name.length - 1) + '_ids'] = request_object[prop_name].map(function(obj){
                                return obj.id;
                            });
                            delete request_object[key];
                            delete request_object[prop_name];
                            sendItem();
                        }

                        if(!request_object[key].queue.length){
                            sendAll();
                        } else {
                            request_object[key].onSuccessItem = function(){
                                if(!request_object[key].queue.length){
                                    sendAll();
                                }
                            };
                        }
                    });
                } else {
                    sendItem();
                }

                function sendItem(){
                    var resource = new scope.actualOptions.resource(request_object);

                    if('id' in request_object && request_object.id){
                        // update if id field exist
                        AEditHelpers.getResourceQuery(resource, 'update').then(function(updated_item){
                            angular.extend(item, updated_item);

                            saveCallbacks(item);
                        });
                    } else {
                        //create if id not exist
                        angular.forEach(scope.actualOptions.default_attrs, function(value, attr){
                            request_object[attr] = value;
                        });

                        AEditHelpers.getResourceQuery(resource, 'create').then(function(created_item){
                            created_item.is_new = true;

                            scope.ngModel.unshift(created_item);
                            delete scope.new_item;
                            scope.new_item = angular.copy(new_item);

                            saveCallbacks(item);
                        });
                    }
                }
            };

            // *************************************************************
            // DELETE
            // *************************************************************

            scope.deleteConfirm = function(item){
                var index = scope.ngModel.indexOf(item);

                function deleteCallbacks(){
                    scope.ngModel.splice(index, 1);
                    if(scope.ngChange)
                        $timeout(scope.ngChange);
                }
                if(mode != 'remote'){
                    deleteCallbacks();
                    return;
                }

                if(confirm('Do you want delete object "' + item.name + '"?')){
                    AEditHelpers.getResourceQuery(item, 'delete').then(function(){
                        deleteCallbacks();
                    });
                }
            };

            // *************************************************************
            // WATCHERS
            // *************************************************************

            scope.$watchCollection('ngModel', function(list){
                if(!list)
                    return;

                if(mode == 'local'){
                    list.forEach(function(item, index){
                        if(!item.json_id)
                            item.json_id = list.length + index + 1;
                    })
                }

                scope.search();
                scope.actualOptions.lists['self'] = list;
            });
        }
    };
}]);

angular
    .module('a-edit')

    .directive('iconButton', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            template: '<button type="button" class="btn btn-{{type}} btn-{{size || \'xs\'}}" ng-click="click()">' +
            '<span class="glyphicon glyphicon-{{glyphicon}}" aria-hidden="true"></span>' +
            '</button>',
            scope: {
                type: '@',
                size: '@',
                glyphicon: '@'
            },
            link: function (scope, element) {

            }
        };
    }])

    .directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })

    .directive('popoverImage', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-popover-image.html',
            scope: {
                //require
                ngModel: '=',
                text: '=?'
            },
            link: function (scope, element) {
                scope.text = scope.text || scope.ngModel.name;
                scope.image = scope.ngModel.image_src || scope.ngModel.file || scope.ngModel;

                scope.imagePopoverPath = 'a-edit-image-popover.html';
            }
        };
    }]);

angular
    .module('a-edit')

    .directive('aeTextInput', ['$timeout', '$compile', function($timeout, $compile) {
        function getTemplateByType(type, options){
            var text = '{{$parent.ngModel}}';
            var inputTagBegin = '<input type="text" ';
            var inputTagEnd = '';

            if(options && options.modal_link)
                text = '<a ae-object-modal="modalObject" modal-resource-options="modalOptions" on-save="save()" href>' + text + '</a>';
            else if(type == 'textarea'){
                text = '<pre ng-if="$parent.ngModel">{{$parent.ngModel}}</pre>';

                inputTagBegin = '<textarea ';
                inputTagEnd = '</textarea>';
            } else if(type == 'password'){
                text = '<small>[password hidden]</small>';

                inputTagBegin = '' +
                    '<a href ng-click="changePassword = true" ng-show="!isNew && !changePassword">Change password</a>' +
                    '<div ng-show="changePassword || isNew"><input type="password" ';
                inputTagEnd = '</div>';
            }

            inputTagBegin += 'ng-change="ngChange()" ';

            return '' +
            '<div ng-if="!isEdit">' +
                text +
            '</div>' +
            '<div ng-if="isEdit" ng-class="input_class">' +
                inputTagBegin +
                ' class="form-control input-sm" placeholder="{{$parent.placeholder}}"' +
                ' ng-model="$parent.ngModel" ' + (type != 'textarea' ? 'ng-enter="$parent.save()"' : '') +
                ' ng-model-options="$parent.ngModelOptions || {}"' +
                ' ng-style="{ \'width\' : $parent.width + \'px\'}">' +
                inputTagEnd +
            '</div>';
        }

        var typeTemplates = {
            'text': $compile(getTemplateByType('text')),
            'password': $compile(getTemplateByType('password')),
            'text_modal_link': $compile(getTemplateByType('text', {modal_link: true})),
            'textarea': $compile(getTemplateByType('textarea'))
        };

        return {
            restrict: 'E',
            scope: {
                //require
                ngModel: '=',
                ngModelOptions: '=?',
                ngModelStr: '=?',
                isNew: '=?',
                isEdit: '=?',
                modalObject: '=?',
                modalOptions: '=?',
                hasError: '=?',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                placeholder: '@',
                name: '@',
                width: '@',
                required: '@',
                type: '@' //text or textarea
            },
            link: function (scope, element, attrs) {
                scope.type = scope.type || 'text';
                if(attrs.modalObject && scope.type == 'text')
                    scope.type = "text_modal_link";

                var template = typeTemplates[scope.type],
                    templateElement;

                template(scope, function (clonedElement, scope) {
                    templateElement = clonedElement;
                    element.append(templateElement);
                });

                template = null;

                element.on("$destroy", function () {
                    templateElement.remove();
                    templateElement = null;
                });

                scope.$watch('hasError', function(hasError){
                    scope.input_class = hasError ? "has-error" : '';
                });

                scope.save = function(){
                    if(scope.required && !scope.ngModel){
                        scope.input_class = "has-error";
                        return;
                    }

                    scope.input_class = '';
                    if(scope.onSave)
                        $timeout(scope.onSave);
                }
            }
        };
    }])

    .directive('aeBoolInput', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-bool-input.html',
            scope: {
                //require
                ngModel: '=',
                isEdit: '=',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                name: '@'
            },
            link: function (scope, element) {

                scope.$watch('ngModel', function(ngModel){
                    scope.fakeModel = ngModel == 1;
                });

                scope.change = function(){
                    scope.ngModel =  scope.fakeModel;

                    if(scope.ngChange)
                        $timeout(scope.ngChange);
                };
            }
        };
    }])


    .directive('aeDateInput', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-date-input.html',
            scope: {
                //require
                ngModel: '=',
                ngModelStr: '=?',
                ngModelSubStr: '=?',
                isEdit: '=',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                placeholder: '@',
                name: '@'
            },
            link: function (scope, element) {

                scope.getDayClass = function(obj) {
                    if (obj.mode === 'day') {
                        var day = new Date(obj.date).getDay();
                        if (day == 0 || day == 6)
                            return 'day-off';
                    }
                };

                scope.options = {
                    startingDay: 1,
                    customClass: scope.getDayClass,
                    todayText: '',
                    currentText:'',
                    clearText: '',
                    closeText: 'Close',
                    appendToBody: false
                };

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                };

                scope.change = function(){
                    setStr();

                    if(scope.ngChange)
                        $timeout(scope.ngChange);
                };
                function setStr(){
                    if(scope.ngModel){
                        scope.ngModelStr = $filter('amDateFormat')(scope.ngModel, 'D MMM. YYYY');
                        scope.ngModelSubStr = $filter('amDateFormat')(scope.ngModel, 'DD.MM.YYYY');
                    }
                }

                scope.$watch('ngModel', setStr);
            }
        };
    }])

    .directive('aeSelectInput', ['$timeout', '$compile', '$templateCache', 'AEditHelpers' ,'AEditConfig', function($timeout, $compile, $templateCache, AEditHelpers, AEditConfig) {
        function getTemplateByType(type, options){
            options = options || {};

            var uiSelect = {
                tags: '',
                match: 'selectedName',
                subClasses: ''
            };
            if(type == 'multiselect'){
                uiSelect.tags = 'multiple close-on-select="false" ';
                uiSelect.match = '$item[$parent.nameField] || $item.name || $item[$parent.orNameField]';
            }
            if(options.adder){
                uiSelect.subClasses = 'btn-group select-adder';
            }

            var template = '' +
                '<div class="select-input-container ' + uiSelect.subClasses + ' {{input_class}}">' +
                    '<span ng-if="!isEdit">{{selectedName}}</span>' +
                    '<input type="hidden" name="{{name}}" ng-bind="ngModel" class="form-control" required />' +

                    '<ui-select ' + uiSelect.tags + ' ng-model="options.value" ng-if="isEdit" ng-click="changer()" class="input-small">' +
                        '<ui-select-match placeholder="">' +
                            '{{' + uiSelect.match + '}}' +
                        '</ui-select-match>' +

                        '<ui-select-choices refresh="getListByResource($select.search)" repeat="item.id as item in $parent.local_list | filter: $select.search track by $index">' +
                            '<div ng-bind-html="(item[$parent.nameField] || item.name || item[$parent.orNameField]) | highlight: $select.search"></div>' +
                        '</ui-select-choices>' +
                    '</ui-select>';

            if(options.adder){
                template += '' +
                    '<button type="button" class="btn btn-success" ng-click="popover.is_open = true"' +
                        ' uib-popover-template="popover.template_name"' +
                        ' uib-popover-title="Add object"' +
                        ' popover-placement="top"' +
                        ' popover-append-to-body="true"' +
                        ' popover-is-open="popover.is_open"' +
                        ' popover-trigger="none">' +
                            '<span class="glyphicon glyphicon-plus"></span>' +
                    '</button>';
            }

            template += '' +
                '</div>';
            return template;
        }

        var typeTemplates = {
            'select': $compile(getTemplateByType('')),
            'select-adder': $compile(getTemplateByType('', {adder: true})),
            'multiselect': $compile(getTemplateByType('multiselect')),
            'multiselect-adder': $compile(getTemplateByType('multiselect', {adder: true}))
        };

        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                //require
                list: '=?',
                ngModel: '=',
                ngModelStr: '=?',
                isEdit: '=?',
                hasError: '=?',

                ngResource: '=?',
                ngResourceFields: '=?',

                refreshListOn: '=?',

                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                adder: '=?',
                getList: '=?',
                nameField: '@',
                orNameField: '@',
                placeholder: '@',
                name: '@',
                type: '@' //select or multiselect
            },
            link: function (scope, element, attrs, ngModel) {
                var variables = angular.extend({}, AEditConfig.grid_options.request_variables, AEditConfig.grid_options.response_variables);

                scope.options = {
                    value: scope.ngModel
                };

                scope.type = scope.type || 'select';
                if(scope.adder)
                    scope.type += '-adder';

                var template = typeTemplates[scope.type],
                    templateElement;

                template(scope, function (clonedElement, scope) {
                    templateElement = clonedElement;
                    element.append(templateElement);
                });

                template = null;

                element.on("$destroy", function () {
                    templateElement.remove();
                    templateElement = null;
                });

                scope.$watch('hasError', function(hasError){
                    scope.input_class = hasError ? "has-error" : '';
                });

                scope.changer = function() {
                    ngModel.$setViewValue(scope.options.value)
                };

                scope.$watch('ngModel', function(newVal){

                    if(scope.options.value == newVal)
                        return;

                    scope.options.value = newVal;

                    scope.setSelectedName(newVal);
                });

                //TODO: optimize
                scope.$watch(function() {
                    return ngModel.$viewValue;
                }, function(newVal) {
                    scope.ngModel = newVal;
                    scope.setSelectedName(newVal);
                });

                scope.$watch('list', function(list){
                    scope.local_list = list;
                    scope.setSelectedName(scope.ngModel);
                });

                function initListGetByResource(){
                    if(!scope.ngResource || !scope.getList || (scope.local_list && scope.local_list.length))
                        return;

                    scope.getListByResource();
                }
                scope.getListByResource = function (query){
                    var request_options = {};
                    if(query)
                        request_options[variables['query']] = query;

                    request_options[variables['limit']] = AEditConfig.select_options.items_per_page;

                    AEditHelpers.getResourceQuery(scope.ngResource, 'get', request_options).then(function(list){
                        scope.local_list = list;
                        scope.setSelectedName(scope.ngModel);
                    });
                };

                scope.$watch('ngResource', initListGetByResource);
                scope.$watch('refreshListOn', initListGetByResource);

                scope.setSelectedName = function (newVal){
                    if(!scope.local_list || !scope.local_list.length)
                        return;

                    if(Array.isArray(newVal)){
                        // if ngModel - array of ids
                        var names = [];
                        newVal.forEach(function(id){
                            // get from current list by id
                            var result_name = AEditHelpers.getNameById(scope.local_list, id, scope.nameField, scope.orNameField);
                            if(result_name){
                                names.push(result_name);
                            } else if(scope.ngResource){
                                // if object with id not exist in current list - get from server
                                getNameFromServer(id).then(function(name){
                                    names.push(name);
                                    scope.selectedName = names.join(', ');
                                    scope.ngModelStr = scope.selectedName;
                                })
                            }
                        });
                        scope.selectedName = names.join(', ');
                    } else {
                        // get from current list by id
                        scope.selectedName = AEditHelpers.getNameById(scope.local_list, newVal, scope.nameField, scope.orNameField);

                        // if object with id not exist in current list - get from server
                        if(!scope.selectedName && newVal && scope.ngResource){
                            getNameFromServer(newVal).then(function(name){
                                scope.selectedName = name;
                                scope.ngModelStr = scope.selectedName;
                            })
                        }
                    }
                    scope.ngModelStr = scope.selectedName;
                };

                function getNameFromServer(id){
                    return AEditHelpers.getResourceQuery(scope.ngResource, 'show', {id: id}).then(function(object){
                        return object[scope.nameField] || object.name || object[scope.orNameField];
                    });
                }

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                };

                if(scope.adder){
                    scope.new_object = {};

                    var popoverTemplate = '' +
                        '<div ng-click="popoverContentClick($event)">';

                    scope.ngResourceFields.forEach(function(field){
                        popoverTemplate += '' +
                            '<div class="form-group col-md-12 row">' +
                                '<div>' +
                                    '<label>' + field.label + '</label>' +
                                '</div>' +
                                '<div>' +
                                    AEditHelpers.generateDirectiveByConfig(field, {
                                        item_name: '$parent.new_object',
                                        lists_container: 'lists',
                                        always_edit: true,
                                        is_new: true
                                        //already_modal: true
                                    }) +
                                '</div>' +
                            '</div>';

                        if(field.resource){
                            scope[field.name + '_resource'] = field.resource;
                        }

                        if(field.type == 'multiselect'){
                            scope.new_object[field.name] = [];
                        }
                    });

                    popoverTemplate += '' +
                            '<div class="form-group col-md-12 row">' +
                                '<button type="submit" class="btn btn-primary" ng-click="$parent.saveToList(new_object);">Save</button>' +
                                '<button class="btn btn-danger pull-right" ng-click="$parent.popover.is_open = false">Close</button>' +
                            '</div>' +
                        '</div>';

                    scope.popover = {
                        is_open: false,
                        template_name: attrs.ngModel + '-' + attrs.ngResource + '.html'
                    };
                    $templateCache.put(scope.popover.template_name, popoverTemplate);
                }

                scope.saveToList = function(new_object){
                    scope.popover.is_open = false;
                    AEditHelpers.getResourceQuery(new scope.ngResource(new_object), 'create').then(function(object){
                        scope.local_list.unshift(object);

                        if(angular.isArray(scope.ngModel))
                            scope.ngModel.push(object.id);
                        else
                            scope.ngModel = object.id;
                    });
                }
            }
        };
    }])

    .directive('aeFileUpload', ['$timeout', '$compile', 'FileUploader', function($timeout, $compile, FileUploader) {

        function getTemplateByType(type){
            var result = '';
            if(type == 'multifile'){
                result +='<ul class="list-unstyled">' +
                            '<li ng-repeat="item in ngModel">';
            }

            result += '<popover-image ng-model="' + (type == 'multifile' ? 'item' : 'ngModel') + '.file" text="' + (type == 'multifile' ? 'item' : 'ngModel') + '.name"></popover-image>';

            if(type == 'multifile'){
                result +=   '</li>' +
                        '</ul>';
            }

            result +=   '<ul ng-if="isEdit" class="list-unstyled">' +
                            '<li ng-repeat="item in uploader.queue">' +
                                '<popover-image ng-model="item.file" text="item.file.name"></popover-image>' +
                                '<a href ng-click="item.remove()"><span class="glyphicon glyphicon-remove"></span></a>' +
                            '</li>' +
                        '</ul>' +
                        '<span ng-if="isEdit && uploader" class="btn btn-sm btn-default btn-file">' +
                            'Р—Р°РіСЂСѓР·РёС‚СЊ' +
                            '<input type="file" nv-file-select uploader="uploader" ' + (type == 'multifile' ? 'multiple': '') + ' />' +
                        '</span>';

            return result;
        }

        var typeTemplates = {
            'file': $compile(getTemplateByType('file')),
            'multifile': $compile(getTemplateByType('multifile'))
        };

        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                ngModel: '=',
                isEdit: '=?',
                uploader: '=',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                inputName: '@',
                url: '@',
                type: '@'
            },
            link: function (scope, element, attrs, ngModel) {

                var template = typeTemplates[scope.type || 'file'],
                    templateElement;

                template(scope, function (clonedElement, scope) {
                    templateElement = clonedElement;
                    element.append(templateElement);
                });

                template = null;

                element.on("$destroy", function () {
                    templateElement.remove();
                    templateElement = null;
                });

                function initUploader(){
                    scope.uploader = new FileUploader();
                    scope.uploader.url = scope.url;
                    scope.uploader.alias = scope.inputName;
                    scope.uploader.autoUpload = true;
                    scope.uploader.removeAfterUpload = true;

                    scope.uploader.onAfterAddingFile = function(item){
                        setImageSrc(item);
                    };
                    scope.uploader.onSuccessItem = function(item, response){
                        if(!scope.ngModel)
                            scope.ngModel = [];

                        scope.ngModel.push(response);
                        console.log(scope.ngModel);
                    };
                }

                if(scope.isEdit)
                    initUploader();

                function setImageSrc (item){
                    var reader = new FileReader();

                    reader.onload = (function(theFile) {
                        return function(e) {
                            item.image_src = e.target.result;
                            scope.$apply();
                        };
                    })(item._file);

                    reader.readAsDataURL(item._file);
                }

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                };

                scope.$watch('ngModel', function(newVal){
                    if(!newVal && scope.isEdit)
                        initUploader();
                });
                scope.$watch('isEdit', function(newVal){
                    if(newVal)
                        initUploader();
                })
            }
        };
    }]);

angular
    .module('a-edit')

    .directive('aeObjectModal', ['$timeout', '$log', '$cacheFactory', 'AEditHelpers', 'AEditConfig', '$uibModal', function($timeout, $log, $cacheFactory, AEditHelpers, AEditConfig, $uibModal) {
        var cache = $cacheFactory('aModal.Templates');

        return {
            restrict: 'A',
            scope: {
                //require
                aeObjectModal: '=',
                modalResourceOptions: '=?',
                isEdit: '=?',
                //callbacks
                onSave: '&'
            },
            link: function (scope, element, attrs) {

                var resource_name = attrs.aeObjectModal + new Date().getTime();
                scope.options = scope.modalResourceOptions || AEditConfig.current_options;

                element.on("click", function () {
                    var template = cache.get(resource_name) || '';
                    if(!template){
                        template +=
                            '<div class="modal-header">' +
                                '<button ng-click="cancel()" class="close pull-right"><span>&times;</span></button>' +
                                '<h3 class="modal-title">Awesome modal!</h3>' +
                            '</div>' +
                            '<div class="modal-body">' +
                                '<button type="button" class="btn btn-warning btn-sm pull-right" ng-click="object.is_edit = !object.is_edit">' +
                                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                                '</button>' +
                                '<dl class="dl-horizontal">';
                        
                        scope.options.fields.forEach(function(field){
                            template += '<dt>' + field.label + '</dt>';
                            template += '<dd>' + AEditHelpers.generateDirectiveByConfig(field, {
                                item_name: 'object',
                                lists_container: 'lists',
                                already_modal: true
                            }) + '</dd>';
                        });
                        
                        template +=
                                '</dl>' +
                            '</div>' +
                            '<div class="modal-footer">' +
                                '<button class="btn btn-primary" type="button" ng-click="ok()">OK</button>' +
                            '</div>';
                            
                        cache.put(resource_name, template);
                    }

                    var modalInstance = $uibModal.open({
                        animation: true,
                        template: template,
                        resolve: {
                            data: function () {
                                return {
                                    object: angular.copy(scope.aeObjectModal),
                                    resource: scope.options.resource,
                                    lists: scope.options.lists,
                                    isEdit: scope.isEdit
                                };
                            }
                        },
                        controller: ['$scope', '$uibModalInstance', 'data', function($scope, $uibModalInstance, data) {
                            angular.extend($scope, data);


                            AEditHelpers.getResourceQuery(new scope.options.resource($scope.object), 'show').then(function(object){
                                $scope.object = object;
                                $scope.object.is_edit = data.isEdit;
                                console.log('modal controller', $scope.object);
                            });
                            
                            $scope.ok = function () {
                                $scope.object.is_edit = false;
                                $uibModalInstance.close($scope.object);
                            };
                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };
                        }],
                        size: 'lg'
                    });

                    modalInstance.result.then(function (object) {
                        angular.extend(scope.aeObjectModal, object);
                        
                        if(scope.onSave)
                            $timeout(scope.onSave);
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                });

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                }
            }
        };
    }]);

/**
 * Created by jonybang on 04.07.15.
 */
angular.module('a-edit')
    .factory('AEditConfig', [function() {
        this.templates_path = 'templates/';

        this.current_options = {};

        this.grid_options = {
            request_variables: {
                query: '_q',
                offset: '_offset',
                limit: '_limit',
                sort: '_sort',
                page: '_page'
            },
            additional_request_params:{},
            response_variables: {
                meta_info: 'meta', //container for total_count, current_page and etc.
                list: 'data', //container for data of response
                total_count: 'total_count',
                filter_count: 'filter_count'
            },
            items_per_page: 15
        };

        this.select_options = {
            ajax_handler: true,
            items_per_page: 15
        };

        return this;
    }]);

/**
 * Created by jonybang on 04.07.15.
 */
angular.module('a-edit')
    .factory('AEditHelpers', [function() {
        var service = {
            //config:
            //  html_attributes
            //  lists_container
            //  list_variable
            //  item_name
            //  field_name
            //  always_edit
            generateDirectiveByConfig: function(field, config){
                var output = '';
                var directive = '';

                switch(field.type){
                    case 'select':
                    case 'multiselect':
                        directive = 'select-input';
                        break;
                    case 'date':
                        directive = 'date-input';
                        break;
                    case 'bool':
                        directive = 'bool-input';
                        break;
                    case 'file':
                    case 'multifile':
                        directive = 'file-upload';
                        break;
                    default:
                        directive = 'text-input';
                        break;
                }

                output += '<ae-' + directive + ' ';

                output += 'type="' + (field.type || '') + '" ' +
                    'input-name="' + (field.input_name || '') + '" ';

                if(field.width)
                    output += 'width="' + field.width + '" ';

                if(field.required)
                    output += 'required="true" ';

                if('get_list' in config)
                    output += 'get-list="' + config.get_list + '" ';

                if(field.url)
                    output += 'url="' + field.url + '" ';

                if(field.resource)
                    output += 'ng-resource="' + field.name + '_resource" ';

                if(config.list_variable)
                    output += 'list="' + config.list_variable + '" ';
                else if(config.lists_container)
                    output += 'list="' + config.lists_container + '.' + field.list + '" ';

                var item_name = angular.isUndefined(config.item_name) ? 'item' : config.item_name;
                var field_name = angular.isUndefined(config.field_name) ? field.name : config.field_name;
                var item_field = item_name + (field.name != 'self' ? '.' : '') + field_name;

                var is_edit;
                if(field.readonly || config.readonly)
                    is_edit = 'false';
                else if(config.always_edit)
                    is_edit = 'true';
                else
                    is_edit = item_name + '.is_edit';
                    
                output += 'ng-model="' + item_field + '" ' +
                    'on-save="save(' + item_name + ')" ' +
                    'has-error="' + item_name + '.errors.' + field_name + '" ' +
                    'ng-model-str="' + item_name + '.' +  field_name + '_str" ' +
                    'ng-model-sub-str="' + item_name + '.' +  field_name + '_sub_str" ' +
                    'is-edit="' + is_edit + '" '+
                    'is-new="' + (config.is_new ? 'true': 'false') + '" '+
                    'placeholder="' + ((config.always_edit ? field.new_placeholder : field.placeholder) || '') + '" ';

                if(directive == 'file-upload')
                    output += 'uploader="' + item_name + '.' + field_name + '__uploader" ';

                if(directive == 'select-input'){
                    output += 'name-field="' + (field.name_field || '') + '" ';
                    output += 'or-name-field="' + (field.or_name_field || '') + '" ';
                }

                if(field.modal && !config.already_modal && field.modal == 'self'){
                    output += 'modal-object="' + item_name + '" ';
                    output += 'modal-options="actualOptions" ';
                }

                output += '></ae-' + directive + '>';

                return output;
            },
            getResourceQuery: function(obj, action, options){
                options = options || {};
                
                var possibleFunctions;
                switch(action){
                    case 'search':
                        possibleFunctions = ['get'];
                        break;
                    case 'get':
                        possibleFunctions = ['query', 'get'];
                        break;
                    case 'show':
                        possibleFunctions = ['$get', 'get'];
                        break;
                    case 'create':
                        possibleFunctions = ['$save', 'create'];
                        break;
                    case 'update':
                        possibleFunctions = ['$update', 'update'];
                        break;
                    case 'delete':
                        possibleFunctions = ['$delete', 'delete'];
                        break;
                }
                
                var query;
                possibleFunctions.some(function(functionName){
                    if(obj[functionName])
                        query = obj[functionName](options);
                    
                    return obj[functionName];
                });
                
                if(!query){
                    console.error('Undefined model resource! Override getResourceQuery function in AEditHelpers service for define custom resource function.')
                }
                return query.$promise || query;
            },
            isEmptyObject: function(obj) {
                for(var prop in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                        return false;
                    }
                }
                return true;
            },
            getNameById: function (list, val, nameField, orNameField){
                var resultName = '';

                if(!list || !list.length)
                    return resultName;

                list.some(function(obj){
                    var result = obj.id == val;
                    if(result)
                        resultName = obj[nameField] || obj.name || obj[orNameField];
                    return result;
                });
                return resultName;
            }
        };

        return service;
    }]);

angular
    .module('app', ['ngResource', 'ui.bootstrap', 'ui.router', 'ui.router.tabs', 'wiz.markdown', 'dndLists', 'rt.debounce', 'ckeditor', 'a-edit'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 'AppPaths',
        function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, AppPaths) {

            $stateProvider
                .state('app', {
                    url: '/admin',
                    controller: 'AppController as app',
                    templateUrl: AppPaths.app_tpls + 'index.html',
                    abstract: true
                })

                //=====================================================
                // PAGE FORM
                //=====================================================

                .state('app.page', {
                    url: '',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.page.create', {
                        url: '',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.page_form_tpls + 'index.html'
                    })
                    .state('app.page.edit', {
                        url: '/page/:pageId',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.page_form_tpls + 'index.html'
                    })

                //=====================================================
                // DATABASE MANAGE
                //=====================================================

                .state('app.db', {
                    url: '/db',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.db.pages', {
                        url: '/pages',
                        controller: 'PagesController',
                        templateUrl: AppPaths.pages_tpls + 'index.html'
                    })
                    .state('app.db.dictionary', {
                        url: '/dictionary',
                        controller: 'DictionaryController',
                        templateUrl: AppPaths.dictionary_tpls + 'index.html'
                    })
                    .state('app.db.mail_templates', {
                        url: '/mail_templates',
                        controller: 'MailTemplatesController',
                        templateUrl: AppPaths.mail_templates_tpls + 'index.html'
                    })
                    .state('app.db.subscribers', {
                        url: '/subscribers',
                        controller: 'SubscribersController',
                        templateUrl: AppPaths.subscribers_tpls + 'index.html'
                    })
                    .state('app.db.sent_mails', {
                        url: '/sent_mails',
                        controller: 'SentMailsController',
                        templateUrl: AppPaths.sent_mails_tpls + 'index.html'
                    })
                    .state('app.db.settings', {
                        url: '/settings',
                        controller: 'SettingsController',
                        templateUrl: AppPaths.settings_tpls + 'index.html'
                    })
                    .state('app.db.logs', {
                        url: '/logs',
                        controller: 'LogsController',
                        templateUrl: AppPaths.logs_tpls + 'index.html'
                    })
                    .state('app.db.tags', {
                        url: '/tags',
                        controller: 'TagsController',
                        templateUrl: AppPaths.tags_tpls + 'index.html'
                    })
                    .state('app.db.templates', {
                        url: '/templates',
                        controller: 'TemplatesController',
                        templateUrl: AppPaths.templates_tpls + 'index.html'
                    })
                    .state('app.db.sub_fields', {
                        url: '/sub_fields',
                        controller: 'SubFieldsController',
                        templateUrl: AppPaths.sub_fields_tpls + 'index.html'
                    })
                    .state('app.db.users', {
                        url: '/users',
                        controller: 'UserController',
                        templateUrl: AppPaths.users_tpls + 'index.html'
                    })

                //=====================================================
                // DATABASE MANAGE
                //=====================================================

                .state('app.manage', {
                    url: '/manage',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.manage.mailing', {
                        url: '/mailing/:sentMailId',
                        controller: 'MailingController',
                        templateUrl: AppPaths.mailing_tpls + 'index.html'
                    });

            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise("/admin");
        }])
    .run(['$rootScope', 'AppData', 'AEditConfig', function($rootScope, AppData, AEditConfig){

        function setDefaultSettings(){
            $rootScope.cur_user = AppData.cur_user;
        }
        if(AppData.cur_user.$promise)
            AppData.cur_user.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            AppData.reload();
        });

        $rootScope.CKEditorOptions = {
            language: 'en',
            allowedContent: true,
            entities: false,
            toolbarGroups: [
                { name: 'editing',     groups: [ 'find', 'selection' ] },
                '/',
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
                { name: 'links' },
                { name: 'insert' },
                '/',
                { name: 'styles' },
                { name: 'colors' },
                { name: 'tools' },
                { name: 'others' },
                { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
            ]
        };

        //config for marcelgwerder/laravel-api-handler
        AEditConfig.grid_options.additional_request_params._config = "meta-total-count,meta-filter-count,response-envelope";
    }]);
angular.module('app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'AppData', 'Pages', function($scope, $http, AppPaths, AppData, Pages) {
        var self = this;

        self.menuList = [
            {
                heading: 'Pages',
                route:   'app.db.pages'
            },
            {
                heading: 'Dictionary',
                route:   'app.db.dictionary'
            },
            {
                heading: 'Mail Templates',
                route:   'app.db.mail_templates'
            },
            {
                heading: 'Subscribers',
                route:   'app.db.subscribers'
            },
            {
                heading: 'Sent Mails',
                route:   'app.db.sent_mails'
            },
            {
                heading: 'Settings',
                route:   'app.db.settings'
            },
            {
                heading: 'Logs',
                route:   'app.db.logs'
            },
            {
                heading: 'Tags',
                route:   'app.db.tags'
            },
            {
                heading: 'Templates',
                route:   'app.db.templates'
            },
            {
                heading: 'SubFields',
                route:   'app.db.sub_fields'
            },
            {
                heading: 'Users',
                route:   'app.db.users'
            }
        ];

        self.refreshPagesTree = function(){
            self.pages_tree = Pages.query({tree_mode: true});
        };

        self.refreshPagesTree();

        self.changeParent = function(event, dropped_index, dropped_item, parent){
            if(parent.id == dropped_item.id)
                return;

            dropped_item.parent_page_id = parent.id;
            dropped_item.menu_index = dropped_index;

            Pages.update({ id: dropped_item.id }, dropped_item);

            parent.child_pages_by_index.forEach(function(page, page_index){
                if(page_index >= dropped_index && page.id != dropped_item.id){
                    page.menu_index = page_index + 1;
                    Pages.update({ id: page.id }, page);
                }
            });

            return dropped_item;
        };

        self.activeTab = 'pages-tree';

        self.tabs = [{title:'Pages Tree', name: 'pages-tree'}, {title: 'Database Manage', name:'db-manage'}];
    }]);
//<loading-gif ng-if="!dataLoaded"> </loading-gif>
// TODO: добавить throttle - не показывать гифку если идет тут-же переключение туда - обратно
angular.module('app')
    .directive('loadingGif', [function() {
        return {
            restrict: 'E',
            template: '<img ng-if="lgIf" src="assets/img/ajax-loading.gif"/>',
            scope: {
                lgIf: '='
            }
        };
    }]);
angular
    .module('app')
    .directive('sfDate', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-date.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {
                scope.$watch('ngModel', function(){
                    if(!scope.ngModel || !scope.ngModel.value)
                        return;

                    if(new Date(scope.ngModel.value) != scope.fakeModel)
                        scope.fakeModel = new Date(scope.ngModel.value);
                });
                scope.$watch('fakeModel', function(){
                    scope.ngModel.value = scope.fakeModel;
                });
            }
        };
    }]);
angular
    .module('app')
    .directive('sfImage', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-image.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {

            }
        };
    }]);
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
                templateResource: '=?',
                subFieldResource: '=?'
            },
            link: function (scope, element) {
                var defaultConfig = {
                    caption: 'For add data - fill first row fields, than save.',
                    orderBy: '-id',
                    boldHeaders: false,
                    fields: [
                        {
                            name: 'json_id',
                            label: '#',
                            readonly: true
                        },
                        {
                            name: 'name',
                            modal: 'self',
                            label: 'Name',
                            new_placeholder: 'New Item',
                            required: true
                        }
                    ]
                };

                scope.gridOptions = defaultConfig;

                scope.$watch('subFieldResource.config', function(config){
                    if(!config)
                        return;

                    scope.gridOptions = angular.extend({}, defaultConfig, JSON.parse(config));
                });

                scope.$watch('ngModel', function(){
                    if(!scope.ngModel)
                        return;

                    if(scope.ngModel.value){
                        if(JSON.parse(scope.ngModel.value) != scope.fakeModel)
                            scope.fakeModel = JSON.parse(scope.ngModel.value);
                    }
                    else
                        scope.fakeModel = [];
                });

                scope.changed = function(){
                    scope.ngModel.value = JSON.stringify(scope.fakeModel);
                }
            }

        };
    }]);
angular
    .module('app')
    .directive('sfText', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-text.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {

            }
        };
    }]);
angular
    .module('app')
    .directive('sfTextarea', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-textarea.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {

            }
        };
    }]);
angular
    .module('app')
    .directive('subFieldsManager', ['$timeout', '$compile', '$uibModal', 'AppPaths', 'SubFields', 'SubFieldsValues', function($timeout, $compile, $uibModal, AppPaths, SubFields, SubFieldsValues) {
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
                        tplHtml += '<label><span uib-tooltip="{ { $' + sub_field.key + ' } }">' + (sub_field.name || sub_field.key) + '</span></label>';
                        tplHtml += '<' + directive + ' ng-model="resources.' + sub_field_value_name + '" ' +
                            'page-resource="pageResource" template-resource="templateResource" ' +
                            'sub-field-resource="resources.' + sub_field.key + '"></' + directive + '>';
                        tplHtml += '<div><small>' + (sub_field.description || '') + '</small></div><hr>';
                    });

                    tplHtml += '<button class="btn btn-warning margin-top" ng-click="addSubField()" title="Add SubField"><span class="glyphicon glyphicon-plus"></span> Add sub field to current template</button>' +
                        ' <span class="glyphicon glyphicon-question-sign" style="color: #8a6d3b;" uib-tooltip="Need to change template source code for take effect!"></span>';

                    var template = angular.element(tplHtml);

                    var linkFn = $compile(template)(scope);
                    element.html(linkFn);
                }

                function checkForInit(){
                    if(!scope.ngModel || (scope.pageResource && scope.pageResource.$promise && !scope.pageResource.$promise.$$state.status))
                        return;

                    init();
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
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: AppPaths.app + 'directives/addSubFieldModal.html',
                        controller: ['$scope', 'subField', 'SubFieldsTypes', function($scope, subField, SubFieldsTypes){
                            $scope.subField = subField;

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

                                $scope.$close($scope.subField);
                            };

                            $scope.cancel = function () {
                                $scope.$dismiss(false);
                            };
                        }],
                        size: 'md',
                        resolve: {
                            subField: function () {
                                return new SubFields();
                            }
                        }
                    });

                    modalInstance.result.then(function (subField) {
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
                    }, function () {
                        //$log.info('Modal dismissed at: ' + new Date());
                    });
                }
            }
        };
    }]);
angular.module('app')
    .service('AppData', ['$http', function($http){
        var self = this;

        var data_variables = {
            'CurrentUser': '/admin/api/current_user',
            'SiteSettings': '/admin/api/site_settings_dictionary'
        };

        self.reload = function(){
            angular.forEach(data_variables, function(url, var_name){
                self[var_name] = {};
                self[var_name].$promise = $http.get(url).then(function(response){
                    angular.extend(self[var_name], response.data);
                    self[var_name].$promise = null;
                    return self[var_name];
                });

                self['get' + var_name] = function(callback){
                    if(self[var_name].$promise)
                        self[var_name].$promise.then(callback);
                    else
                        callback(self[var_name]);
                }
            });
        };

        self.reload();

        return self;
    }]);
var app = angular.module('app');

var defaultOptions = {
    'update': { method: 'PUT' }
};

app.factory('Settings', ['$resource', function($resource) {
    return $resource('admin/api/settings/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Pages', ['$resource', function($resource) {
    return $resource('admin/api/pages/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('PagesSEO', ['$resource', function($resource) {
    return $resource('admin/api/pages/:page_id/seo', { id: '@page_id' }, defaultOptions);
}]);

app.factory('Templates', ['$resource', function($resource) {
    return $resource('admin/api/templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('MailTemplates', ['$resource', function($resource) {
    return $resource('admin/api/mail_templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Logs', ['$resource', function($resource) {
    return $resource('admin/api/logs/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Users', ['$resource', function($resource) {
    return $resource('admin/api/users/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Tags', ['$resource', function($resource) {
    return $resource('admin/api/tags/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Templates', ['$resource', function($resource) {
    return $resource('admin/api/templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('SubFieldsTypes', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields_types/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubFieldsValues', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields_values/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubFields', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('ControllerActions', ['$resource', function($resource) {
    return $resource('admin/api/controller_actions/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Dictionaries', ['$resource', function($resource) {
    return $resource('admin/api/dictionaries/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('DictionariesWords', ['$resource', function($resource) {
    return $resource('admin/api/dictionaries_words/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Subscribers', ['$resource', function($resource) {
    return $resource('admin/api/subscribers/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubscribersGroups', ['$resource', function($resource) {
    return $resource('admin/api/subscribers_groups/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('SentMails', ['$resource', function($resource) {
    return $resource('admin/api/sent_mails/:id', { id: '@id' }, defaultOptions);
}]);
var app_path = '/assets/js/admin-app/';
var app_modules_path = app_path + 'modules/';

angular.module('app')
    .constant('AppPaths', {
            app:                    app_path,
            app_tpls:               app_path + 'templates/',
            modules:                app_modules_path,
            db_manage_module:       app_modules_path + 'database-manage',
            page_form_tpls:         app_modules_path + 'page-form/templates/',

            settings_tpls:          app_modules_path + 'database-manage/settings/templates/',
            pages_tpls:             app_modules_path + 'database-manage/pages/templates/',
            mail_templates_tpls:    app_modules_path + 'database-manage/mail-templates/templates/',
            logs_tpls:              app_modules_path + 'database-manage/logs/templates/',
            users_tpls:             app_modules_path + 'database-manage/users/templates/',
            tags_tpls:              app_modules_path + 'database-manage/tags/templates/',
            templates_tpls:         app_modules_path + 'database-manage/templates/templates/',
            sub_fields_tpls:        app_modules_path + 'database-manage/sub-fields/templates/',
            dictionary_tpls:        app_modules_path + 'database-manage/dictionary/templates/',
            subscribers_tpls:       app_modules_path + 'database-manage/subscribers/templates/',
            sent_mails_tpls:       app_modules_path + 'database-manage/sent-mails/templates/',

            mailing_tpls:           app_modules_path + 'site-manage/mailing/templates/'
    });
angular.module('app')
    .controller('PageFormController', ['$scope', '$state', '$http', '$uibModal', 'AppPaths', 'AppData', 'Pages', 'PagesSEO', 'Templates', 'Users', 'Tags', 'SubFields', 'ControllerActions',
        function($scope, $state, $http, $uibModal, AppPaths, AppData, Pages, PagesSEO, Templates, Users, Tags, SubFields, ControllerActions) {
        var defaultPage = new Pages();

        if($state.params.pageId){
            $scope.page = Pages.get({id: $state.params.pageId});
            $scope.page.id = $state.params.pageId;
        } else {
            defaultPage.is_menu_hide = true;
            defaultPage.tags_ids = [];
            defaultPage.controller_actions_ids = [];
            defaultPage.seo = {};

            $scope.page = angular.copy(defaultPage);
        }

        //Get current user and set his id as author id
        AppData.getCurrentUser(function(cur_user){
            $scope.current_user
            defaultPage.author_id = cur_user.id;
            angular.extend($scope.page, defaultPage);
        });

        $scope.site_settings = {};
        //Get site settings and set default values to page object
        function setDefaultSettings(){
            $scope.site_settings = AppData.site_settings;
            defaultPage.template_id = $scope.site_settings.default_template_id;
            angular.extend($scope.page, defaultPage);
        }
        if(AppData.site_settings.$promise)
            AppData.site_settings.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        var old_alias = '';
        $scope.$watch('page.title', function(title){
            if(!title)
                return;

            function changeAlias(new_alias){
                //Change alias if its empty or if it not touched by manual
                if((!old_alias && $scope.page.alias) || (old_alias && $scope.page.alias != old_alias))
                    return;

                $scope.page.alias = new_alias;
                old_alias = $scope.page.alias;
            }

            //Translate title to english and paste to alias field if defined yandex_translate_api_key site setting
            //if not: just insert replace spaces to dashes and get lowercase title for set alias
            if(title && $scope.site_settings.yandex_translate_api_key){
                $http.get(
                    'https://translate.yandex.net/api/v1.5/tr.json/translate' +
                    '?key=' + $scope.site_settings.yandex_translate_api_key +
                    '&text=' + title +
                    '&lang=en')
                    .then(function(result){
                        changeAlias(result.data.text[0].replace(/\s+/g, '-').toLowerCase());
                    });
            } else {
                changeAlias(title.replace(/\s+/g, '-').toLowerCase());
            }
        });

        $scope.getSubFields = function(){
            SubFields.query({'template_id': $scope.page.template_id}).$promise.then(function(data){
                $scope.sub_fields = data;
            });
        };

        $scope.$watch('page.template_id', function(template_id){
            if(!template_id)
                return;

            $scope.getSubFields();

            ControllerActions.query({'template_id': template_id}).$promise.then(function(data){
                $scope.page.controller_actions_ids = data.map(function(action){return action.id});
            });
        });
        $scope.subFieldsApi = {};

        //Models for select inputs
        $scope.models = {
            templates: Templates,
            pages: Pages,
            users: Users,
            tags: Tags,
            controller_actions: ControllerActions
        };
        //Fields for adder functional at select inputs
        $scope.fields = {
            templates: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'key',
                    label: 'Key(Path in templates directory)'
                }
            ],
            pages: [
                {
                    name: 'title',
                    label: 'Title'
                },
                {
                    name: 'template_id',
                    label: 'Template',
                    type: 'select',
                    model: Templates,
                    list: 'templates',
                    or_name_field: 'key'
                }
            ],
            users: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'email',
                    label: 'Email'
                },
                {
                    name: 'password',
                    label: 'Password',
                    type: 'password'
                }
            ],
            tags: [
                {
                    name: 'name',
                    label: 'Name'
                }
            ],
            controller_actions: [
                {
                    name: 'key',
                    label: 'Key(ControllerName@actionName)'
                },
                {
                    name: 'name',
                    label: 'Name'
                }
            ]
        };

        $scope.savePage = function(){
            //Validate for require fields
            $scope.hasErrors = {};
            var required = ['title', 'template_id'];
            required.forEach(function(reqField){
                if(!$scope.page[reqField])
                    $scope.hasErrors[reqField] = true;
                else
                    delete $scope.hasErrors[reqField];
            });

            if(!_.isEmpty($scope.hasErrors))
                return;

            //If page is new - Create, if it not - Update
            var is_new = $scope.page.id ? false : true;

            var page_seo = angular.copy($scope.page.seo);

            var page_query;
            if(is_new)
                page_query = $scope.page.$save();
            else
                page_query = $scope.page.$update();

            page_query.then(function(result_page){
                //After save page - we have it id, so save sub fields
                $scope.subFieldsApi.saveSubFieldsValues(result_page);

                if(is_new)
                    $scope.page = angular.copy(defaultPage);
                else
                    $scope.page = result_page;

                var seo_resource = new PagesSEO(page_seo);
                seo_resource.$save({page_id: $scope.page.id}).then(function(seo){
                    $scope.page.seo = seo;
                });

                $scope.alert = 'Page saved!';

                $scope.app.refreshPagesTree();
            })
        };

        $scope.closeAlert = function(){
            $scope.alert = ''
        };
    }]);

angular.module('app')
    .controller('DictionaryController', ['$scope', 'Dictionaries', 'DictionariesWords', function($scope, Dictionaries, DictionariesWords) {
        $scope.dictionaries = [];

        $scope.aGridDictionariesOptions = {
            caption: '',
            orderBy: '-id',
            resource: Dictionaries,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Dictionary key',
                    new_placeholder: 'New Dictionary',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Dictionary name'
                }
            ]
        };

        $scope.dictionaries_words = [];

        $scope.aGridDictionariesWordsOptions = {
            caption: '',
            orderBy: '-id',
            resource: DictionariesWords,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Key',
                    new_placeholder: 'New Dictionary Word',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value'
                },
                {
                    name: 'dictionary_id',
                    label: 'Dictionary',
                    resource: Dictionaries,
                    type: 'select',
                    list: 'dictionaries',
                    or_name_field: 'key',
                    required: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('LogsController', ['$scope', 'Logs', 'Users', function($scope, Logs, Users) {
        $scope.logs = [];

        $scope.aGridOptions = {
            caption: '',
            create: false,
            edit: false,
            orderBy: '-id',
            resource: Logs,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'action',
                    modal: 'self',
                    label: 'Action',
                    new_placeholder: 'New Action',
                    required: true
                },
                {
                    name: 'user_id',
                    label: 'User',
                    type: 'select',
                    list: 'users',
                    resource: Users
                },
                {
                    name: 'logable.name || item.logable.key || item.logable.title',
                    label: 'Item Name'
                },
                {
                    name: 'logable_type',
                    label: 'Item Type'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('MailTemplatesController', ['$scope', 'MailTemplates', function($scope, MailTemplates) {
        $scope.mail_templates = [];

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: MailTemplates,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    label: 'Template key',
                    modal: 'self',
                    required: true,
                    new_placeholder: 'New Mail Template'
                },
                {
                    name: 'name',
                    label: 'Template name'
                },
                {
                    name: 'title',
                    label: 'Mail Title'
                },
                {
                    name: 'content',
                    label: 'Main Content',
                    type: 'textarea',
                    width: '500px'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('PagesController', ['$scope', 'Pages', 'Templates', 'Users', function($scope, Pages, Templates, Users) {

        $scope.aGridOptions = {
            caption: '',
            order_by: '-id',
            resource: Pages,
            get_list: true,
            ajax_handler: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'title',
                    modal: 'self',
                    label: 'Title',
                    new_placeholder: 'New page',
                    required: true
                },
                {
                    name: 'alias',
                    label: 'Alias'
                },
                {
                    name: 'sub_title',
                    label: 'SubTitle'
                },
                {
                    name: 'parent_page_id',
                    label: 'Parent page',
                    type: 'select',
                    list: 'self',
                    resource: Pages,
                    name_field: 'title'
                },
                {
                    name: 'template_id',
                    label: 'Template',
                    type: 'select',
                    resource: Templates,
                    list: 'templates',
                    required: true
                },
                {
                    name: 'description',
                    label: 'Description',
                    table_hide: true
                },
                {
                    name: 'content',
                    label: 'Content',
                    type: 'textarea',
                    table_hide: true
                },
                {
                    name: 'author_id',
                    label: 'Author',
                    type: 'select',
                    resource: Users,
                    list: 'users',
                    table_hide: true
                },
                {
                    name: 'menu_title',
                    label: 'MenuTitle',
                    table_hide: true
                },
                {
                    name: 'menu_index',
                    label: 'Menu Index',
                    table_hide: true
                },
                {
                    name: 'is_menu_hide',
                    label: 'Is hide from menu',
                    type: 'bool',
                    table_hide: true
                },
                {
                    name: 'is_published',
                    label: 'Is published',
                    type: 'bool'
                },
                {
                    name: 'is_abstract',
                    label: 'Is abstract page(has no body, but have children)',
                    type: 'bool',
                    table_hide: true
                },
                {
                    name: 'is_part',
                    label: 'Is part of parent page',
                    type: 'bool',
                    table_hide: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SentMailsController', ['$scope', 'SentMails', 'MailTemplates', 'Pages', 'SubscribersGroups', function($scope, SentMails, MailTemplates, Pages, SubscribersGroups) {
        $scope.sent_mails = SentMails.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: SentMails,
            create: false,
            edit: false,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'result_title',
                    modal: 'self',
                    label: 'Result Title'
                },
                {
                    name: 'result_content',
                    label: 'Result Content',
                    type: 'textarea'
                },
                {
                    name: 'result_addresses',
                    label: 'Addresses Mail',
                    type: 'textarea'
                },
                {
                    name: 'mail_template_id',
                    label: 'Mail template',
                    type: 'select',
                    resource: MailTemplates,
                    list: 'mail_templates'
                },
                {
                    name: 'page_id',
                    label: 'Source page',
                    type: 'select',
                    resource: Pages,
                    list: 'pages'
                },
                {
                    name: 'subscribers_groups_ids',
                    label: 'Subscribers groups',
                    type: 'multiselect',
                    resource: SubscribersGroups,
                    list: 'subscribers_groups',
                    table_hide: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SettingsController', ['$scope', 'Settings', function($scope, Settings) {
        $scope.settings = [];

        $scope.aGridOptions = {
            caption: 'All settings available in templates.',
            orderBy: '-id',
            resource: Settings,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Setting key',
                    new_placeholder: 'New Setting',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SubFieldsController', ['$scope', 'SubFields', 'SubFieldsTypes', 'SubFieldsValues', 'Templates', 'Pages', function($scope, SubFields, SubFieldsTypes, SubFieldsValues, Templates, Pages) {
        $scope.sub_fields_types = [];

        $scope.aGridSubFieldsTypesOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubFieldsTypes,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Sub field type key',
                    new_placeholder: 'New Sub Field Type',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'directive',
                    label: 'Angular directive name'
                }
            ]
        };

        $scope.sub_fields = [];

        $scope.aGridSubFieldsOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubFields,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Sub field key',
                    new_placeholder: 'New Sub Field',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea'
                },
                {
                    name: 'config',
                    label: 'Config',
                    type: 'textarea'
                },
                {
                    name: 'default_value',
                    label: 'Default value',
                    type: 'textarea'
                },
                {
                    name: 'sub_field_type_id',
                    label: 'Sub field type',
                    type: 'select',
                    resource: SubFieldsTypes,
                    list: 'sub_fields_types',
                    or_name_field: 'key'
                },
                {
                    name: 'templates_ids',
                    label: 'Templates',
                    type: 'multiselect',
                    resource: Templates,
                    list: 'templates',
                    table_hide: true,
                    or_name_field: 'key'
                }
            ]
        };

        $scope.sub_fields_values = [];

        $scope.aGridSubFieldsValuesOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubFieldsValues,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'value',
                    label: 'Sub field value',
                    type: 'textarea',
                    new_placeholder: 'New Sub Field value',
                    required: true
                },
                {
                    name: 'sub_field_id',
                    label: 'Sub field',
                    resource: SubFields,
                    type: 'select',
                    list: 'sub_fields',
                    or_name_field: 'key',
                    required: true
                },
                {
                    name: 'page_id',
                    label: 'Page',
                    type: 'select',
                    list: 'pages',
                    resource: Pages,
                    name_field: 'title',
                    required: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SubscribersController', ['$scope', 'SubscribersGroups', 'Subscribers', 'Templates', function($scope, SubscribersGroups, Subscribers, Templates) {
        $scope.subscribers_groups = [];

        $scope.aGridSubscribersGroupsOptions = {
            caption: '',
            orderBy: '-id',
            resource: SubscribersGroups,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Subscriber group key',
                    new_placeholder: 'New Subscriber group',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'subscribers_ids',
                    label: 'Subscribers',
                    type: 'multiselect',
                    resource: Subscribers,
                    list: 'subscribers',
                    table_hide: true,
                    or_name_field: 'mail'
                }
            ]
        };

        $scope.subscribers = [];

        $scope.aGridSubscribersOptions = {
            caption: '',
            orderBy: '-id',
            resource: Subscribers,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'mail',
                    modal: 'self',
                    label: 'Mail',
                    new_placeholder: 'New Subscriber',
                    required: true
                },
                {
                    name: 'provider',
                    label: 'Provider',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'user_agent',
                    label: 'User agent info',
                    type: 'textarea'
                },
                {
                    name: 'groups_ids',
                    label: 'Subscribers groups',
                    type: 'multiselect',
                    resource: SubscribersGroups,
                    list: 'subscribers_groups',
                    table_hide: true,
                    or_name_field: 'key'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('TagsController', ['$scope', 'Tags', function($scope, Tags) {
        $scope.tags = Tags.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: Tags,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Tag',
                    required: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('TemplatesController', ['$scope', 'Templates', 'SubFields', 'ControllerActions', function($scope, Templates, SubFields, ControllerActions) {
        $scope.templates = [];

        $scope.aGridOptions = {
            caption: 'You must to add blade template file on address /resources/views/templates/example.bade.php(path:"example") before/after add row to DB!',
            orderBy: '-id',
            resource: Templates,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    label: 'Template key',
                    new_placeholder: 'New Template',
                    modal: 'self',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea'
                },
                {
                    name: 'sub_fields_ids',
                    label: 'Sub fields',
                    type: 'multiselect',
                    resource: SubFields,
                    list: 'sub_fields',
                    table_hide: true,
                    or_name_field: 'key'
                },
                {
                    name: 'controller_actions_ids',
                    label: 'Controller actions',
                    type: 'multiselect',
                    resource: ControllerActions,
                    list: 'controller_actions',
                    table_hide: true,
                    or_name_field: 'key'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('UserController', ['$scope', 'Users', function($scope, Users) {
        $scope.users = [];

        $scope.aGridOptions = {
            caption: '',
            create: true,
            edit: true,
            orderBy: '-id',
            resource: Users,
            ajax_handler: true,
            get_list: true,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New User',
                    required: true
                },
                {
                    name: 'email',
                    label: 'E-mail',
                    required: true
                },
                {
                    name: 'password',
                    type: 'password',
                    label: 'Password',
                    required: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('MailingController', ['$scope', '$state', '$http', '$uibModal', 'debounce', 'AppPaths', 'AppData', 'Pages', 'Templates', 'MailTemplates', 'SentMails', 'SubscribersGroups', 'Subscribers',
        function($scope, $state, $http, $uibModal, debounce, AppPaths, AppData, Pages, Templates, MailTemplates, SentMails, SubscribersGroups, Subscribers) {

            //======================================
            //INITIAL ACTIONS
            //======================================

            var defaultMail = new SentMails();

            if($state.params.sentMailId){
                $scope.mail = SentMails.get({id: $state.params.sentMailId});

                $scope.mail.$promise.then(function(mail){
                    $scope.mail.sub_data_array = [];

                    angular.forEach(mail.sub_data, function(value, key){
                        $scope.mail.sub_data_array.push({key: key, value: value})
                    });
                });

                $scope.mail.id = $state.params.sentMailId;
            } else {
                defaultMail.subscribers_groups_ids = [];
                defaultMail.sub_data_array = [];
                $scope.mail = angular.copy(defaultMail);
            }

            //Models for select inputs
            $scope.models = {
                subscribers_groups: SubscribersGroups,
                mail_templates: MailTemplates,
                pages: Pages
            };

            //Fields for adder functional at select inputs
            $scope.fields = {
                subscribers_groups: [
                    {
                        name: 'key',
                        label: 'Key',
                        required:true
                    },
                    {
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        name: 'subscribers_ids',
                        label: 'Subscribers',
                        type: 'multiselect',
                        model: Subscribers,
                        list: 'subscribers'
                    }
                ],
                mail_templates: [
                    {
                        name: 'key',
                        label: 'Key',
                        required:true
                    },
                    {
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        name: 'title',
                        label: 'Title template'
                    },
                    {
                        name: 'content',
                        label: 'Content template',
                        type: 'textarea'
                    }
                ],
                pages: [
                    {
                        name: 'title',
                        label: 'Title'
                    },
                    {
                        name: 'template_id',
                        label: 'Template',
                        type: 'select',
                        model: Templates,
                        list: 'templates'
                    }
                ]
            };

            $scope.getSentMails = function(){
                $scope.sent_mails = SentMails.query();
            };
            $scope.getSentMails();

            $scope.status = {
                subscribers_list: {},
                mail_template: {},
                preview_mail: {},
                mail: {}
            };

            //======================================
            //SUBSCRIBERS GROUPS ACTIONS
            //======================================

            function getSubscribersListByGroups(){
                if(!$scope.mail.subscribers_groups_ids || !$scope.mail.subscribers_groups_ids.length){
                    $scope.status.subscribers_list = {
                        error: 'Subscribers groups not select'
                    };
                    return;
                }

                var received_groups = 0;
                $scope.mail.subscribers_groups_ids.forEach(function(subscriber_group_id){
                    SubscribersGroups.get({id: subscriber_group_id, with_subscribers: true}).$promise.then(function(response){
                        response.subscribers.forEach(function(subscriber){
                            if($scope.subscribers_list.indexOf(subscriber.mail) == -1)
                                $scope.subscribers_list.push(subscriber.mail);
                        });

                        received_groups++;
                        if(received_groups == $scope.mail.subscribers_groups_ids.length)
                            $scope.status.subscribers_list.loading = false;
                    });
                });
            }

            var debounceGetSubscribersList = debounce(1000, getSubscribersListByGroups);

            function loadingSubscribersList(){
                $scope.subscribers_list = [];
                $scope.status.subscribers_list = {
                    loading: true
                };

                debounceGetSubscribersList();
            }

            $scope.$watchCollection('mail.subscribers_groups_ids', loadingSubscribersList);

            //======================================
            //MAIL TEMPLATE ACTIONS
            //======================================

            $scope.$watch('mail.mail_template_id', function(){
                if(!$scope.mail.mail_template_id){
                    $scope.status.mail_template = {
                        error: 'Mail template not selected.'
                    };
                    return;
                }
                $scope.status.mail_template = {
                    loading: true
                };

                $scope.mail.mail_template = MailTemplates.get({id: $scope.mail.mail_template_id});
                $scope.mail.mail_template.$promise.then(function(){
                    $scope.status.mail_template = {};
                });
            });

            function renderMailPreview(){
                if(!$scope.mail.mail_template_id){
                    $scope.status.preview_mail = {
                        error: 'Please choose some mail template.'
                    };
                    return;
                }

                if($scope.mail.sub_data_array && $scope.mail.sub_data_array.length){
                    $scope.mail.sub_data = {};
                    $scope.mail.sub_data_array.forEach(function(sub_item){
                        $scope.mail.sub_data[sub_item.key] = sub_item.value;
                    });
                }

                $http.post('/admin/api/preview_mail', $scope.mail).then(function(response){
                    $scope.preview_mail = response.data;
                    $scope.status.preview_mail = {};
                }, function(){
                    $scope.status.preview_mail = {
                        error: 'Compiling error. Perhaps the problem is to use currently not existing variables ot just not set page object'
                    }
                })
            }
            var debounceRenderPreview = debounce(1000, renderMailPreview);

            function loadingRenderPreview(){
                $scope.preview_mail = {};
                $scope.status.preview_mail = {
                    loading: true
                };

                debounceRenderPreview();
            }
            $scope.$watch('mail.mail_template_id', loadingRenderPreview);
            $scope.$watch('mail.page_id', loadingRenderPreview);

            $scope.$watch('mail.mail_template.title', loadingRenderPreview);
            $scope.$watch('mail.mail_template.content', loadingRenderPreview);

            $scope.$watch('mail.sub_data_array', loadingRenderPreview, true);

            $scope.saveMailTemplate = function(){
                $scope.mail.mail_template.$update().then(function(){
                    $scope.status.mail_template = {};
                })
            };

            //======================================
            //SEND MAIL
            //======================================

            $scope.sendMail = function(){
                //Validate for require fields
                $scope.hasErrors = {};
                var required = ['subscribers_groups_ids', 'mail_template_id'];
                required.forEach(function(reqField){
                    if(!$scope.mail[reqField] || (angular.isArray($scope.mail[reqField]) && !$scope.mail[reqField].length))
                        $scope.hasErrors[reqField] = true;
                    else
                        delete $scope.hasErrors[reqField];
                });

                if(!_.isEmpty($scope.hasErrors))
                    return;

                if($scope.status.mail_template.dirty){
                    if(!confirm('Are you sure want to send mail without last not saved changes in mail template? For save changes click "Save mail template" button.'))
                        return;
                }

                $scope.status.mail.loading = true;

                $scope.mail.sub_data = {};
                $scope.mail.sub_data_array.forEach(function(sub_item){
                    $scope.mail.sub_data[sub_item.key] = sub_item.value;
                });

                //always create new mail
                $scope.mail.id = null;
                $scope.mail.$save().then(function(result){
                    $scope.mail = angular.copy(defaultMail);

                    $scope.alert = 'Mail sent!';

                    $scope.getSentMails();

                    $scope.status.mail = {};
                }, function(){
                    $scope.status.mail.error = true;
                })
            };

            $scope.closeAlert = function(){
                $scope.alert = ''
            };

            $scope.addNewSubItem = function(){
                angular.merge($scope.mail.sub_data, {'':''});
            }
    }]);
