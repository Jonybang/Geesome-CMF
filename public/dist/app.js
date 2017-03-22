// Code goes here
angular
  .module('a-edit', ['ngMaterial', 'angularMoment', 'ngSanitize', 'cl.paging'])
  
  .run(['amMoment', '$templateCache', function(amMoment, $templateCache) {
    amMoment.changeLocale('ru');

    
    $templateCache.put('a-edit-image-popover.html', '<img class="fit" ng-src="{{::image}}" alt="">');
    
    $templateCache.put('a-edit-date-input.html', '\
            <div class="date-input">\
            <span ng-if="viewMode">{{ngModelStr}}</span>\
            \
            <div ng-if="!viewMode" class="input-group">\
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

    $templateCache.put('a-edit-bool-input.html', '<div>\
        <span ng-if="viewMode" ng-class="[\'glyphicon\',{\'glyphicon-check\': $parent.fakeModel, \'glyphicon-unchecked\': !$parent.fakeModel}]"></span>\
        <md-checkbox ng-if="!viewMode" ng-model="$parent.fakeModel" ng-change="$parent.change()">{{$parent.label}}</md-checkbox>\
    </div>');

    $templateCache.put('a-edit-popover-image.html', '\
        <a target="_blank" href="{{::image}}" uib-popover-template="imagePopoverPath" popover-placement="left" popover-trigger="mouseenter">\
            {{:: text || image}}\
        </a>\
    ');

      $templateCache.put('a-edit-paging.html', '\
        <md-content ng-if="ngModel.total_pages > 1">\
            <cl-paging flex cl-pages="ngModel.total_pages" cl-steps="ngModel.per_page" cl-page-changed="pagingChanged()" cl-align="center" cl-current-page="ngModel.current"></cl-paging>\
        </md-content>\
    ');
  }]);

angular
    .module('a-edit')
    .directive('aeBoolInput', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-bool-input.html',
            scope: {
                //require
                ngModel: '=',
                viewMode: '=',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                name: '@',
                label: '@'
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
    }]);
angular
    .module('a-edit')
    .directive('aeDateInput', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-date-input.html',
            scope: {
                //require
                ngModel: '=',
                ngModelStr: '=?',
                ngModelSubStr: '=?',
                viewMode: '=',
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
    }]);
angular
    .module('a-edit')

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

            result +=   '<ul ng-if="!viewMode" class="list-unstyled">' +
                '<li ng-repeat="item in uploader.queue">' +
                '<popover-image ng-model="item.file" text="item.file.name"></popover-image>' +
                '<a href ng-click="item.remove()"><span class="glyphicon glyphicon-remove"></span></a>' +
                '</li>' +
                '</ul>' +
                '<span ng-if="!viewMode && uploader" class="btn btn-sm btn-default btn-file">' +
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
                viewMode: '=?',
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

                if(!scope.viewMode)
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
                    if(!newVal && !scope.viewMode)
                        initUploader();
                });
                scope.$watch('viewMode', function(newVal){
                    if(!newVal)
                        initUploader();
                })
            }
        };
    }]);

angular
    .module('a-edit')
    .directive('aeGrid', ['$timeout', '$compile', '$filter', 'AEditHelpers', 'AEditConfig', 'AEditAjaxHelper', function($timeout, $compile, $filter, AEditHelpers, AEditConfig, AEditAjaxHelper) {
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
                    paginate: false,
                    bold_headers: true,
                    modal_adder: false,
                    ajax_handler: false,
                    drag_disabled: true,
                    resource: null,
                    order_by: '-id',
                    track_by: '',
                    default_attrs: {},
                    params: {},
                    modal_index: 0,
                    search_debounce: 200,
                    fields: [],
                    lists: {},
                    callbacks: {},
                    row_height: '40px'
                };

                var new_item = {
                    is_new: true
                };
                scope.new_item = angular.copy(new_item);
                scope.status = "";

                var mode = 'local';

                var variables = angular.extend({}, AEditConfig.grid_options.request_variables, AEditConfig.grid_options.response_variables);

                // *************************************************************
                // TEMPLATE INIT
                // *************************************************************

                scope.$watch('options', function () {
                    if (!scope.options)
                        return;

                    scope.actualOptions = angular.extend({}, defaultOptions, scope.options);
                    AEditConfig.current_options = scope.actualOptions;

                    var queryOptions = {};
                    queryOptions[variables.sort] = scope.actualOptions.order_by;

                    scope.ajaxList = new AEditAjaxHelper(scope.actualOptions.resource, queryOptions);

                    scope.select_options = angular.extend({}, AEditConfig.grid_options, scope.actualOptions);

                    if (scope.actualOptions.resource) {
                        mode = 'remote';
                        if (scope.actualOptions.get_list)
                            scope.getList();
                    }

                    var tplHtml = '' +
                        '<md-content layout="row" flex="grow" layout-wrap class="padding ae-grid">' +
                        '   <md-list flex>' +
                        '       <md-subheader class="md-no-sticky" ng-show="actualOptions.caption || actualOptions.search">';

                    if (scope.actualOptions.search) {
                        tplHtml +=
                            '       <md-input-container class="md-block no-margin" flex="grow">' +
                            '           <label>' + AEditConfig.locale.search + '</label>' +
                            '           <input ng-model="ajaxList.search" ng-model-options="{ debounce: ' + scope.actualOptions.search_debounce + ' }">' +
                            '       </md-input-container>';
                    }

                    tplHtml += '' +
                        '           <span>{{actualOptions.caption}}</span>' +
                        '       </md-subheader>';


                    var tableFieldsCount = 1;
                    scope.actualOptions.fields.forEach(function (field) {
                        if (!field.colspan)
                            field.colspan = 1;

                        if (!field.table_hide)
                            tableFieldsCount += parseInt(field.colspan);
                    });

                    var md_grid_list = '<md-grid-list flex="grow" md-cols="' + tableFieldsCount + '" md-row-height="' + scope.actualOptions.row_height + '">';

                    var tplHead =
                        '<md-list-item class="md-1-line">' +
                        md_grid_list;

                    var tplBodyNewItem =
                        '<md-list-item class="md-1-line new-item">' +
                        '   <md-content layout="row" flex="grow">' +
                        md_grid_list;

                    if (!scope.actualOptions.track_by)
                        scope.actualOptions.track_by = mode == 'remote' ? 'id' : 'json_id';

                    var track_by = scope.actualOptions.track_by == '$index' ? scope.actualOptions.track_by : 'item.' + scope.actualOptions.track_by;
                    var tplBodyItem =
                        '<md-list-item ng-click="null" class="md-1-line word-wrap" ng-repeat="item in filtredList track by ' + track_by + '"  dnd-list="filtredList"  dnd-draggable="item" dnd-disable-if="actualOptions.drag_disabled" dnd-effect-allowed="move" dnd-moved="filtredList.splice($index, 1)" dnd-drop="drop($index, item)">' +
                        '   <md-content layout layout-fill layout-align="center" flex="grow">' +
                        md_grid_list;

                    var select_list_request_options = {};
                    select_list_request_options[variables['limit']] = scope.select_options.items_per_page;

                    scope.actualOptions.fields.forEach(function (field, index) {

                        if (field.resource && field.list && field.list != 'self') {
                            if (!scope.actualOptions.lists[field.list]) {
                                scope.actualOptions.lists[field.list] = [];

                                AEditHelpers.getResourceQuery(field.resource, 'get', select_list_request_options).then(function (response) {
                                    scope.actualOptions.lists[field.list] = response[variables['list']] || response;
                                });
                            }
                        }

                        if (field.table_hide)
                            return;

                        if (field.resource) {
                            scope[field.name + '_resource'] = field.resource;
                        }
                        if (field.fields) {
                            scope[field.name + '_fields'] = field.fields;
                        }

                        tplHead +=
                            '<md-grid-tile md-colspan="' + field.colspan + '"><sorting ng-model="ajaxList.sorting.' + field.name + '" ng-change="getList()">' + field.label + '</sorting></md-grid-tile>';
                        //
                        //var style = 'style="';
                        //if(field.width)
                        //    style += 'width:' + field.width + ';';
                        //style += '"';

                        //for new item row
                        tplBodyNewItem +=
                            '<md-grid-tile md-colspan="' + field.colspan + '">';
                        //for regular item row
                        tplBodyItem +=
                            '<md-grid-tile md-colspan="' + field.colspan + '" ng-dblclick="editItem(item)">';

                        function getFieldDirective(is_new) {
                            var item_name = (is_new ? 'new_' : '' ) + 'item';
                            var field_name = field.name != 'self' ? field.name : '';

                            var list_variable;

                            if (field.list && field.list == 'self')
                                list_variable = 'ngModel';
                            else if (field.list)
                                list_variable = 'actualOptions.lists.' + field.list;

                            return AEditHelpers.generateDirectiveByConfig(field, {
                                item_name: item_name,
                                field_name: field_name,
                                readonly: field.readonly || !scope.actualOptions.edit,
                                always_edit: is_new,
                                is_new: is_new,
                                no_label: true,
                                list_variable: list_variable,
                                get_list: false,
                                ajax_search: AEditConfig.search
                            });
                        }

                        tplBodyNewItem += getFieldDirective(true) +
                            '</md-grid-tile>';
                        tplBodyItem += getFieldDirective(false) +
                            '</md-grid-tile>';
                    });

                    if (scope.actualOptions.edit) {
                        tplHead +=
                            '<md-grid-tile></md-grid-tile>';

                        tplBodyNewItem +=
                            '<md-grid-tile>' +
                            '   <md-button class="md-fab md-mini md-primary" ng-click="save(new_item)">' +
                            '       <md-icon>save</md-icon>' +
                            '   </md-button>' +
                            '</md-grid-tile>';

                        tplBodyItem +=
                            '<md-grid-tile>' +
                            '   <md-menu>' +
                            '       <md-button class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-menu-origin>more_vert</md-icon></md-button>' +
                            '       <md-menu-content width="4">' +
                            '           <md-menu-item ng-show="item.is_edit"><md-button ng-click="save(item)"><md-icon>save</md-icon>' + AEditConfig.locale.save + '</md-button></md-menu-item>' +
                            '           <md-menu-item ng-show="item.id"><md-button ae-object-modal="item" modal-resource-options="actualOptions" on-save="save(item)"><md-icon>open_in_new</md-icon>' + AEditConfig.locale.open + '</md-button></md-menu-item>' +
                            '           <md-menu-item ng-show="item.is_edit"><md-button ng-click="editItem(item)"><md-icon>settings_backup_restore</md-icon>' + AEditConfig.locale.cancel_edit + '</md-button></md-menu-item>' +
                            '           <md-menu-item ng-hide="item.is_edit"><md-button ng-click="item.is_edit = true"><md-icon>mode_edit</md-icon>' + AEditConfig.locale.edit + '</md-button></md-menu-item>' +
                                        (scope.actualOptions.delete ? '<md-menu-item><md-button ng-click="deleteConfirm(item)"><md-icon>delete</md-icon>' + AEditConfig.locale.delete + '</md-button></md-menu-item>' : '') +
                            '       </md-menu-content>' +
                            '   </md-menu>' +
                            '</md-grid-tile>';
                    }

                    tplHead +=
                        '</md-grid-list>' +
                        '</md-list-item>';

                    tplBodyNewItem +=
                        '</md-grid-list>' +
                        '</md-content>' +
                        '</md-list-item>';

                    tplBodyItem +=
                        '</md-grid-list>' +
                        '</md-content>' +
                        '</md-list-item>';

                    var tableHtml = '';

                    tableHtml += tplHead;

                    if (scope.actualOptions.create) {

                        if (scope.actualOptions.modal_adder)
                            tplHtml += '<button class="btn btn-success" ng-click=""><span class="glyphicon glyphicon-plus"></span> Add</button>';
                        else
                            tableHtml += tplBodyNewItem;
                    }

                    tableHtml += tplBodyItem;

                    tplHtml += tableHtml +
                        '</md-list>' +
                        '</md-content>';

                    if (scope.actualOptions.paginate) {
                        tplHtml += '<ae-paging ng-model="ajaxList.paging" ng-change="getList()"></ae-paging>';
                    }

                    angular.element(element).html('');

                    var template = angular.element('<md-content layout="column" flex>' + tplHtml + '</md-content>');

                    angular.element(element).append($compile(template)(scope));
                });

                scope.$watchCollection('options.lists', function (new_lists) {
                    angular.extend(scope.actualOptions.lists, new_lists);
                });

                // *************************************************************
                // GET LIST, SEARCH, PAGINATION AND SORTING
                // *************************************************************

                scope.getList = function () {
                    angular.extend(scope.ajaxList.params, scope.actualOptions.params);
                    scope.ajaxList.getData({is_exclude_params: !scope.actualOptions.ajax_handler}).$promise.then(function (list) {
                        scope.ngModel = list;
                        scope.filtredList = scope.ngModel;
                    });
                };

                // *************************************************************
                // CLIENT SEARCH
                // *************************************************************

                scope.search = function (newQuery, oldQuery) {
                    scope.filtredList = scope.ngModel;

                    if (newQuery == oldQuery && scope.actualOptions.ajax_handler)
                        return;

                    if (scope.actualOptions.ajax_handler) {
                        scope.getList();
                        return;
                    }

                    if (scope.searchQuery)
                        scope.filtredList = $filter('filter')(scope.ngModel, scope.searchQuery);

                    if (scope.actualOptions.order_by)
                        scope.filtredList = $filter('orderBy')(scope.filtredList, scope.actualOptions.order_by);
                };

                scope.$watch('ajaxList.search', scope.search);

                // *************************************************************
                // EDIT
                // *************************************************************

                scope.editItem = function (item) {
                    if (!item.is_edit) {
                        item.is_edit = true;
                    } else {
                        item.is_edit = false;

                        //TODO: make this work for local
                        if(mode != 'remote')
                            return;

                        scope.actualOptions.resource.get(item, function (response) {
                            angular.extend(item, response);
                        });
                    }
                };

                // *************************************************************
                // CREATE OR UPDATE
                // *************************************************************

                scope.save = function (item) {
                    if (!item)
                        return;

                    item.errors || (item.errors = {});

                    // validation - check required fields and password
                    scope.actualOptions.fields.forEach(function (field) {
                        //if field empty and required - add to errors, else delete from errors
                        if (field.required && !item[field.name])
                            item.errors[field.name] = true;
                        else if (item.errors[field.name])
                            delete item.errors[field.name];

                        //if password not changed and not new object
                        if (field.type == 'password' && item.id)
                            delete item.errors[field.name];

                        //if password not changed delete field from request data
                        if (field.type == 'password' && !item[field.name])
                            delete item[field.name];
                    });

                    // if there some errors
                    if (!AEditHelpers.isEmptyObject(item.errors))
                        return;

                    // actions after save
                    function saveCallbacks(item) {
                        if (scope.onSave)
                            $timeout(scope.onSave);

                        if (scope.actualOptions.callbacks.onSave)
                            $timeout(scope.actualOptions.callbacks.onSave);

                        if (scope.ngChange)
                            $timeout(scope.ngChange);

                        if (scope.actualOptions.callbacks.onChange)
                            $timeout(scope.actualOptions.callbacks.onChange);

                        scope.search();

                        item.is_edit = false;

                        scope.status = item.name + " saved!";
                        $timeout(function () {
                            scope.status = "";
                        }, 1000);

                        if (mode != 'remote') {
                            delete item.is_new;
                            delete item.is_edit;
                            delete item.errors;
                        }
                    }

                    // local json mode
                    if (mode != 'remote') {
                        if (item.is_new) {
                            var track_by = scope.actualOptions.track_by;

                            item[track_by] = 1;
                            scope.ngModel.forEach(function (local_item) {
                                if (local_item[track_by] >= item[track_by])
                                    item[track_by] = local_item[track_by] + 1;
                            });

                            item.json_id = item[track_by];

                            scope.ngModel.unshift(item);
                            scope.new_item = angular.copy(new_item);
                        }

                        saveCallbacks(item);

                        return;
                    }

                    var request_object = angular.copy(item);

                    // check for files from file uploader
                    var uploaders = Object.keys(request_object).filter(function (k) {
                        return ~k.indexOf("__uploader")
                    });
                    // if exists - upload each file and set to *field*_ids array database object of file
                    // TODO: realize mode for take paths of files(not ids of database rows with paths)
                    if (uploaders.length) {

                        uploaders.forEach(function (key) {

                            function sendAll() {
                                var prop_name = key.replace('__uploader', '');
                                if (!request_object[prop_name]) {
                                    sendItem();
                                    return;
                                }

                                request_object[prop_name.substring(0, prop_name.length - 1) + '_ids'] = request_object[prop_name].map(function (obj) {
                                    return obj.id;
                                });
                                delete request_object[key];
                                delete request_object[prop_name];
                                sendItem();
                            }

                            if (!request_object[key].queue.length) {
                                sendAll();
                            } else {
                                request_object[key].onSuccessItem = function () {
                                    if (!request_object[key].queue.length) {
                                        sendAll();
                                    }
                                };
                            }
                        });
                    } else {
                        sendItem();
                    }

                    function sendItem() {
                        var resource = null;

                        if ('id' in request_object && request_object.id) {
                            resource = new scope.actualOptions.resource(request_object);
                            // update if id field exist
                            AEditHelpers.getResourceQuery(resource, 'update').then(function (updated_item) {
                                angular.extend(item, updated_item);

                                saveCallbacks(item);
                            });
                        } else {
                            //create if id not exist
                            angular.forEach(scope.actualOptions.default_attrs, function (value, attr) {
                                request_object[attr] = value;
                            });

                            resource = new scope.actualOptions.resource(angular.extend(request_object, scope.actualOptions.params));
                            AEditHelpers.getResourceQuery(resource, 'create').then(function (created_item) {
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

                scope.deleteConfirm = function (item) {
                    var index = scope.ngModel.indexOf(item);

                    function deleteCallbacks() {
                        scope.ngModel.splice(index, 1);
                        if (scope.ngChange)
                            $timeout(scope.ngChange);

                        if (scope.actualOptions.callbacks.onChange)
                            $timeout(scope.actualOptions.callbacks.onChange);
                    }

                    if (mode != 'remote') {
                        deleteCallbacks();
                        return;
                    }

                    if (confirm(AEditConfig.locale.delete_confirm + ' "' + (item.name || item.key || item.title || item.value) + '"?')) {
                        AEditHelpers.getResourceQuery(new scope.actualOptions.resource(item), 'delete').then(function () {
                            deleteCallbacks();
                        });
                    }
                };

                scope.drop = function (dropped_index, dropped_item) {
                    var previousIndex = null;
                    scope.ngModel.some(function (item, index) {
                        var result = item.json_id == dropped_item.json_id;
                        if (result)
                            previousIndex = index;
                        return result;
                    });

                    if (previousIndex === null)
                        return;

                    scope.ngModel.splice(previousIndex, 1);

                    if (previousIndex > dropped_index) {
                        scope.ngModel.splice(dropped_index, 0, dropped_item);
                    } else {
                        scope.ngModel.splice(dropped_index - 1, 0, dropped_item);
                    }
                    scope.ngModel.forEach(function (item, index) {
                        item.index = index;
                    });

                    if (scope.ngChange)
                        $timeout(scope.ngChange);

                    scope.search();
                };

                // *************************************************************
                // WATCHERS
                // *************************************************************

                scope.$watchCollection('ngModel', function (list) {
                    if (!list)
                        return;

                    if (mode == 'local') {
                        var track_by = scope.actualOptions.track_by;
                        list.forEach(function (item, index) {
                            if (!item[track_by] || item[track_by] == 0) {
                                item[track_by] = list.length + index + 1;
                            }
                            if (!item.json_id)
                                item.json_id = item[track_by];
                        })
                    }

                    scope.search();
                    scope.actualOptions.lists['self'] = list;
                });
            }
        }
    }]);

angular
    .module('a-edit')

    .directive('aeObjectModal', ['$timeout', '$log', '$cacheFactory', 'AEditHelpers', 'AEditConfig', '$mdDialog', function($timeout, $log, $cacheFactory, AEditHelpers, AEditConfig, $mdDialog) {
        var cache = $cacheFactory('aModal.Templates');

        return {
            restrict: 'A',
            scope: {
                //require
                aeObjectModal: '=',
                modalResourceOptions: '=?',
                viewMode: '=?',
                //callbacks
                onSave: '&'
            },
            link: function (scope, element, attrs) {

                var resource_name = attrs.aeObjectModal + new Date().getTime();
                scope.options = scope.modalResourceOptions || AEditConfig.current_options;

                element.on("click", function () {
                    var template = cache.get(resource_name) || '';
                    //'<button ng-click="cancel()" class="close pull-right"><span>&times;</span></button>' +
                    if(!template){
                        template +=
                            '<md-dialog class="ae-object-modal">' +
                                '<md-toolbar>' +
                                    '<div class="md-toolbar-tools">' +
                                        '<h3>' + AEditConfig.locale.modal + '</h3>' +

                                        '<span flex></span>' +

                                        '<md-button class="md-icon-button" ng-click="object.is_edit = !object.is_edit">' +
                                            '<md-icon>mode_edit</md-icon>' +
                                        '</md-button>' +
                                    '</div>' +
                                '</md-toolbar>' +
                                '<md-dialog-content class="padding">';
                        
                        scope.options.fields.forEach(function(field){
                            template += '<md-content flex="grow" layout>';

                            template += '<div layout="column" layout-align="center" flex="30" style="text-align: right" class="padding"><label>' + field.label + '</label></div>';
                            template += '<div layout="column" layout-align="center" flex="70" class="padding">' + AEditHelpers.generateDirectiveByConfig(field, {
                                item_name: 'object',
                                lists_container: 'lists',
                                already_modal: true,
                                no_label: true
                            }) + '</div>';

                            template += '</md-content>';
                        });
                        
                        template +=
                                '</md-dialog-content>' +
                                '<md-dialog-actions>' +
                                    '<md-button ng-click="ok()" class="md-primary">OK</md-button>' +
                                '</md-dialog-actions>' +
                            '</md-dialog>';
                            
                        cache.put(resource_name, template);
                    }

                    var modalInstance = $mdDialog.show({
                        clickOutsideToClose: true,
                        template: template,
                        locals: {
                            data: {
                                object: angular.copy(scope.aeObjectModal),
                                resource: scope.options.resource,
                                lists: scope.options.lists,
                                viewMode: scope.viewMode
                            }
                        },
                        controller: ['$scope', '$mdDialog', 'data', function($scope, $mdDialog, data) {
                            angular.extend($scope, data);

                            AEditHelpers.getResourceQuery(new scope.options.resource($scope.object), 'show').then(function(object){
                                $scope.object = object;
                                $scope.object.is_edit = data.viewMode;
                            });
                            
                            $scope.ok = function () {
                                $scope.object.is_edit = false;
                                $mdDialog.hide($scope.object);
                            };
                            $scope.cancel = function () {
                                $mdDialog.cancel();
                            };
                        }]
                    });

                    modalInstance.then(function (object) {
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

angular
    .module('a-edit')
    .directive('aePaging', ['AppPaths', '$timeout', function(AppPaths, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-paging.html',
            scope: {
                ngModel: '=',
                ngChange: '&',
                totalItems: '='
            },
            link: function (scope, element) {
                scope.$watch('ngModel.total_items', function(totalItems){
                    scope.ngModel.total_pages = Math.ceil(parseInt(totalItems) / scope.ngModel.per_page);
                });
                var isFirstChange = true;
                scope.pagingChanged = function(){
                    if(isFirstChange){
                        isFirstChange = false;
                        return;
                    }
                    console.log('pagingChanged');
                    $timeout(scope.ngChange);
                }
            }
        };
    }]);
angular
    .module('a-edit')
    .directive('aeSelectInput', ['$timeout', '$filter', '$compile', '$templateCache', '$mdDialog', 'AEditHelpers' ,'AEditConfig', '$q', function($timeout, $filter, $compile, $templateCache, $mdDialog, AEditHelpers, AEditConfig, $q) {
        function getTemplateByType(type, options){
            options = options || {};

            var mdSelect = {
                //attributes: '',
                //match: 'selectedName',
                //itemId: 'item.id',
                itemName: 'getNameFromObj(item)',
                //subClasses: ''
            };

            var template = '<label ng-if="!viewMode">{{label}}</label>';
            if(type == 'select' || type == 'textselect') {
                template += '<span ng-if="viewMode">{{getNameFromObj(options.selected)}}</span>';
            }

            if(type == 'multiselect') {
                template += '' +
                    '<md-chips ng-model="options.selected" md-on-remove="removeFromMultiSelect($chip)">' +
                        '<md-chip-template>' +
                            '<span>{{getNameFromObj(objectsById[$chip])}}</span>' +
                        '</md-chip-template>';
            }

            template +=
                        '<md-autocomplete ' +
                            (type == 'select' || type == 'textselect' ? 'ng-if="!viewMode" md-selected-item="$parent.options.selected" ' : ' ') +
                            'id="{{id}}" ' +
                            'name="{{name}}" ' +
                            'ng-required="ngRequired" ' +
                            'md-clear-button="!disallowClear" ' +
                            'md-search-text="options.search" ' +
                            'md-items="item in getListByResource()" ' + // | filter:options.search"
                            'md-no-cache="true" ' +
                            'ng-disabled="ngDisabled" ' +
                            'md-search-text-change="debouncedGetList()" ' +
                            'md-selected-item-change="selectedItemChange(item)" ' +
                            'md-item-text="' + mdSelect.itemName + '" ' +
                            'md-min-length="autoCompleteMinLength" ' +
                            'placeholder="{{placeholder}}"' +
                            '> ' +
                                '<md-item-template> ' +
                                    '<span md-highlight-text="options.search" md-highlight-flags="^i">{{' + mdSelect.itemName + '}}</span> ' +
                                '</md-item-template>' +
                                '<md-not-found>' +
                                    AEditConfig.locale.not_found + ' <a ng-click="newItem(options.search)" ng-show="adder">' + AEditConfig.locale.create_new_question + '</a>' +
                                '</md-not-found>' +
                        '</md-autocomplete>';


            if(type == 'multiselect') {
                template += '' +
                    '</md-chips>';
            }

            return template;
        }

        var typeTemplates = {
            'select': $compile(getTemplateByType('select')),
            'textselect': $compile(getTemplateByType('textselect')),
            'multiselect': $compile(getTemplateByType('multiselect'))
        };

        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                //require
                list: '=?',
                ngModel: '=',
                params: '=?',
                ngModelStr: '=?',
                viewMode: '=?',
                hasError: '=?',
                disallowClear: '=?',
                ngRequired: '=?',

                ngResource: '=?',
                ngResourceFields: '=?',

                refreshListOn: '=?',

                //callbacks
                ngChange: '&',
                onSave: '&',
                onSelect: '&',
                //sub
                adder: '=?',
                getList: '=?',
                nameField: '@',
                orNameField: '@',
                placeholder: '@',
                label: '@',
                name: '@',
                type: '@' //select or multiselect
            },
            link: function (scope, element, attrs, ngModel) {
                scope.id = 'ae-edit-select-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
                //=============================================================
                // Config
                //=============================================================
                var variables = angular.extend({}, AEditConfig.grid_options.request_variables, AEditConfig.grid_options.response_variables);

                scope.autoCompleteMinLength = 0;
                scope.refreshDelay = AEditConfig.select_options.refresh_delay;
                scope.resetSearchInput = AEditConfig.select_options.reset_search_input;

                scope.options = {
                    selected: scope.type == 'multiselect' ? [] : null,
                    search: ''
                };

                scope.full_type = scope.type = scope.type || 'select';
                if(scope.adder)
                    scope.full_type += '-adder';

                scope.fakeModel = scope.ngModel;

                //=============================================================
                // Compile
                //=============================================================

                typeTemplates[scope.type](scope, function (clonedElement, scope) {
                    element.empty();
                    element.append(clonedElement);
                });

                //=============================================================
                // Output validation
                //=============================================================
                //scope.$watch('hasError', function(hasError){
                //    scope.input_class = hasError ? "has-error" : '';
                //});

                //=============================================================
                // Callbacks
                //=============================================================
                scope.selectedItemChange = function(obj){
                    $timeout(scope.onSelect);
                    $timeout(scope.ngChange);

                    if(scope.type == 'select')  {
                        scope.fakeModel = scope.options.selected ?  scope.options.selected.id || scope.options.selected.value : null;
                    } else if(scope.type == 'multiselect'){
                        if(!obj)
                            return;
                        scope.options.selected = scope.options.selected ?  scope.options.selected.filter(function(obj){return !angular.isObject(obj);}) : [];
                        scope.fakeModel = scope.options.selected;

                        scope.options.selected.push(obj.id);
                        if(!scope.objectsById)
                            scope.objectsById = {};
                        scope.objectsById[obj.id] = obj;
                    } else if(scope.type == 'textselect'){
                        scope.fakeModel = scope.options.selected;
                    }

                    scope.ngModel = scope.fakeModel;

                    //scope.options.search = '';

                    getList();
                };

                scope.removeFromMultiSelect = function(item){
                    $timeout(scope.ngChange);

                    if(scope.ngModel.includes(item))
                        scope.ngModel.splice(scope.ngModel.indexOf(item), 1);
                    scope.fakeModel = scope.ngModel;
                    scope.setSelected();
                };

                scope.$watch('ngModel', function(newVal){
                    if(scope.fakeModel == newVal)
                        return;

                    if(Array.isArray(scope.fakeModel) && Array.isArray(newVal)){
                        if(scope.fakeModel.length == newVal.length
                            && scope.fakeModel.every(function(v,i) { return v === newVal[i]}))
                            return
                    }

                    if(!newVal)
                        scope.options.search = '';

                    scope.fakeModel = newVal;

                    if(scope.type == 'multiselect' && angular.isObject(scope.fakeModel)){
                        var fixedFakeModel = [];
                        angular.forEach(scope.fakeModel, function(value){
                            fixedFakeModel.push(value);
                        });
                        scope.fakeModel = fixedFakeModel;
                        scope.ngModel = fixedFakeModel;
                    }

                    scope.options.selected = null;
                    scope.setSelected();
                });

                //=============================================================
                // Init select list
                //=============================================================
                function initListGetByResource(){
                    if(!scope.ngResource || !scope.getList || (scope.local_list && scope.local_list.length))
                        return;

                    getList();
                }

                function getList(resolve, reject){
                    if(!scope.ngResource){
                        var filtred = $filter('filter')(scope.local_list, scope.options.search);

                        if(angular.isFunction(resolve))
                            resolve(filtred);

                        return filtred;
                    }

                    var request_options = angular.extend({}, scope.params || {});
                    if(scope.options.search)
                        request_options[variables['query']] = scope.options.search;
                    else
                        delete request_options[variables['query']];

                    request_options[variables['limit']] = AEditConfig.select_options.items_per_page;

                    if(scope.type == 'multiselect')
                        request_options[variables['id_not_in']] = scope.ngModel && scope.ngModel.length ? scope.ngModel.join(',') : [];

                    return AEditHelpers.getResourceQuery(scope.ngResource, 'get', request_options).then(function(list){
                        scope.local_list = list;

                        if(scope.fakeModel)
                            scope.setSelected();

                        if(angular.isFunction(resolve))
                            resolve(list);
                    }, function(response){
                        if(angular.isFunction(reject))
                            reject(response);
                    });
                }

                scope.debouncedGetList = AEditHelpers.debounce(getList, 300);
                scope.getListByResource = function (){
                    return $q(scope.debouncedGetList);
                };

                scope.$watch('ngResource', initListGetByResource);
                scope.$watch('refreshListOn', initListGetByResource);
                scope.$watchCollection('params', getList);

                //=============================================================
                // Output non edit mode
                //=============================================================
                scope.$watch('list', function(list){
                    scope.local_list = angular.copy(list);
                    scope.setSelected();
                });

                scope.setSelected = function(){
                    if(!scope.local_list || !scope.local_list.length)
                        return;

                    if(scope.type == 'textselect'){
                        scope.options.selected = scope.ngModel ? scope.ngModel : '';
                        return;
                    }

                    if(scope.type == 'multiselect'){
                        if(!scope.objectsById)
                            scope.objectsById = {};
                        if(!scope.ngModel || !scope.ngModel.length){
                            scope.options.selected = [];
                            return;
                        }
                        else if(scope.options.selected && scope.options.selected.length && scope.fakeModel.length == scope.options.selected.length)
                            return;

                        scope.options.selected = angular.copy(scope.ngModel);

                        scope.ngModel.forEach(function(id, index){
                            if(scope.objectsById[id])
                                return;

                            var foundItem = null;
                            scope.local_list.some(function(item){
                                if(item.id == id)
                                    foundItem = item;

                                return item.id == id;
                            });

                            if(foundItem){
                                scope.objectsById[foundItem.id] = foundItem;
                            } else {
                                getObjectFromServer(id).then(function(serverItem){
                                    if(serverItem)
                                        scope.objectsById[serverItem.id] = serverItem;
                                })
                            }
                        });
                    } else if(scope.type == 'select')  {
                        if(!scope.ngModel){
                            scope.options.selected = null;
                            if(scope.options.search)
                                return;

                            closeSelectList();
                            return;
                        } else if(scope.options.selected){
                            return;
                        }

                        var found = scope.local_list.some(function(item){
                            if(item.id == scope.ngModel || item.value == scope.ngModel)
                                scope.options.selected = item;

                            return item.id == scope.ngModel;
                        });
                        if(!found && scope.ngResource){
                            getObjectFromServer(scope.ngModel).then(function(serverItem){
                                scope.options.selected = serverItem;
                            })
                        }
                    }
                };

                function getObjectFromServer(id){
                    return AEditHelpers.getResourceQuery(scope.ngResource, 'show', {id: id});
                }

                function closeSelectList(){
                    scope.autoCompleteMinLength = 1;
                    scope.options.search = '';
                    $timeout(function () {
                        scope.autoCompleteMinLength = 0;
                        angular.element(element).find('input').blur();
                    }, 500);
                }

                scope.getNameFromObj = function(obj){
                    if(!obj)
                        return '';

                    if(scope.type == 'textselect')
                        return obj;

                    function getFieldByName(nameField){
                        var objProp = angular.copy(obj);
                        nameField.split('.').forEach(function(partOfName){
                            if(objProp)
                                objProp = objProp[partOfName];
                        });
                        return objProp || '';
                    }

                    if(!scope.nameField || !scope.nameField.includes('.'))
                        return obj[scope.nameField] || obj.name || obj[scope.orNameField];
                    else if(scope.nameField.includes('.')) {
                        if(scope.nameField.includes('+')){
                            var result = '';
                            scope.nameField.split('+').forEach(function(fieldname, index){
                                var fieldValue = getFieldByName(fieldname);
                                if(!fieldValue)
                                    return;

                                if(index > 0)
                                    result += ' (';

                                result += fieldValue;

                                if(index > 0)
                                    result += ')';
                            });
                            return result;
                        } else {
                            return getFieldByName(scope.nameField);
                        }
                    }
                };

                scope.newItem = function(){
                    if(scope.type == 'textselect' || !scope.ngResourceFields || !scope.ngResourceFields.length)
                        scope.ngResourceFields = [{name: scope.nameField || 'name' || scope.orNameField, label: ''}];

                    var inputsHtml = '';
                    var data = { lists: {} };
                    scope.ngResourceFields.forEach(function(field){
                        if(field.name == scope.nameField || field.name == 'name' || field.name == scope.orNameField)
                            field.default_value = scope.options.search;

                        inputsHtml += '<div flex="grow" layout="row" layout-fill>' + AEditHelpers.generateDirectiveByConfig(field, {
                                            item_name: 'new_object',
                                            lists_container: 'lists',
                                            always_edit: true,
                                            get_list: true,
                                            is_new: true,
                                            list_variable: 'lists.' + field.name + '_list'
                                            //already_modal: true
                                        }) + '</div>';

                        data.lists[field.name + '_list'] = angular.isArray(field.list) ? field.list : [];

                        if(field.resource){
                            data[field.name + '_resource'] = field.resource;
                        }

                        if(field.type == 'multiselect'){
                            data.new_object[field.name] = [];
                        }
                    });

                    closeSelectList();

                    // var position = $mdPanel.newPanelPosition()
                    //     .relativeTo('#' + scope.id)
                    //     .addPanelPosition($mdPanel.xPosition.ALIGN_START, $mdPanel.yPosition.BELOW);

                    $mdDialog.show({
                        clickOutsideToClose: false,
                        focusOnOpen: true,
                        hasBackdrop: true,
                        panelClass: 'md-background md-hue-3',
                        locals: {
                            data: data
                        },
                        controller: ['$scope', '$mdDialog', 'data', function ($scope, $mdDialog, data) {
                            angular.extend($scope, data);
                            $scope.save = function() {
                                $mdDialog.hide($scope.new_object);
                            };
                            $scope.cancel = function() {
                                $mdDialog.cancel();
                            };
                        }],
                        template: '' +
                        '<md-dialog>' +
                                '<md-toolbar class="md-primary"><div class="md-toolbar-tools"><h4>' + AEditConfig.locale.create_new + '</h4><span class="flex"></span><md-button class="md-icon-button" ng-click="cancel()"><md-icon>close</md-icon></md-button></div></md-toolbar>' +
                                '<md-dialog-content layout="row" class="padding padding-top" layout-wrap>' +
                                    inputsHtml +
                                '</md-dialog-content>' +
                                '<md-dialog-actions>' +
                                    '<md-button ng-click="save()">' + AEditConfig.locale.save + '</md-button>' +
                                    '<md-button ng-click="cancel()">' + AEditConfig.locale.cancel + '</md-button>' +
                                '</md-dialog-actions>' +
                        '</md-dialog>'
                    }).then(scope.saveToList);
                };

                //=============================================================
                // Add new item to select list by adder
                //=============================================================
                scope.saveToList = function(new_object){
                    if(scope.type == 'textselect'){
                        //get first property of object and add it to list
                        var is_first_prop = true;
                        angular.forEach(new_object, function(prop_value){
                            if(is_first_prop){
                                scope.local_list.unshift(prop_value);
                                scope.ngModel = prop_value;
                            }
                            is_first_prop = false;
                        });
                        return;
                    }

                    AEditHelpers.getResourceQuery(new scope.ngResource(angular.extend(new_object, scope.params || {})), 'create').then(function(object){
                        scope.options.search = '';

                        if(scope.type == 'multiselect')
                            scope.fakeModel.push(object.id);
                        else if(scope.type == 'select')
                            scope.fakeModel = object.id;

                        scope.ngModel = scope.fakeModel;

                        scope.setSelected();

                        $timeout(scope.onSelect);
                        $timeout(scope.ngChange);
                    });
                }
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

            inputTagBegin = '<md-input-container flex="grow"><label>{{$parent.label}}</label>' + inputTagBegin;
            inputTagEnd += '</md-input-container>';

            return '' +
                '<div ng-if="viewMode">' +
                text +
                '</div>' +
                '<div ng-if="!viewMode" ng-class="input_class" layout>' +
                inputTagBegin +
                ' placeholder="{{$parent.placeholder}}" ' +
                ' ng-model="$parent.ngModel" ' + (type != 'textarea' ? 'ng-enter="$parent.save()"' : '') +
                ' ng-model-options="$parent.ngModelOptions || {}"' +
                ' ng-style="{ \'width\' : $parent.width + \'px\'}"' +
                ' ng-disabled="$parent.ngDisabled == 1" >' +
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
                viewMode: '=?',
                modalObject: '=?',
                modalOptions: '=?',
                hasError: '=?',
                ngDisabled: '=?',
                defaultValue: '@',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                label: '@',
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

                function setDefaultValue(){
                    if(!scope.ngModel && scope.defaultValue)
                        scope.ngModel = scope.defaultValue;
                }
                setDefaultValue();
                //scope.$watch('ngModel', setDefaultValue);
                //scope.$watch('defaultValue', setDefaultValue);

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
    }]);

angular
    .module('a-edit')

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
    });
angular
    .module('a-edit')
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
    .service('AEditAjaxHelper', [function(){

        return function AjaxHelper(resource, queryOptions){
            var self = this;

            self.resource = resource;

            self.paging = {
                current: 1,
                per_page: queryOptions && queryOptions._limit ? queryOptions._limit : 10
            };

            self.params = {
                _config: 'meta-total-count,meta-filter-count'
            };

            if(queryOptions){
                angular.extend(self.params, queryOptions)
            }

            self.search = '';

            self.sorting = { };

            self.defaultSorting = {};
            if(queryOptions && queryOptions._sort)
                self.defaultSorting[queryOptions._sort.replace("-", "")] = queryOptions._sort.indexOf('-') == -1 ? 'ASC' : 'DESC';
            else
                self.defaultSorting['id'] = 'DESC';

            self.getData = function(options){
                if(options){
                    if(options.is_add_next_page)
                        self.paging.current++;
                    if(options.is_search_changed)
                        self.paging.current = 1;
                }

                self.prepareQuery();

                var params = options && options.is_exclude_params ? {} : self.temp_params;
                var result = self.resource.query(params, function(data, headers){
                    self.paging.total_items = headers('Meta-Filter-Count');
                });
                result.$promise = result.$promise.then(function(data){
                    if(options && options.is_add_next_page)
                        self.data = _.concat(self.data, data);
                    else
                        self.data = data;
                    return self.data;
                });
                return result;
            };

            self.getAllData = function(){
                self.prepareQuery();
                delete self.temp_params._limit;
                delete self.temp_params._offset;
                return self.resource.query(self.temp_params, function(data, headers){
                    self.data = data;
                    self.paging.total_items = headers('Meta-Filter-Count');
                    return data;
                });
            };

            self.prepareQuery = function(){
                self.temp_params = angular.copy(self.params);

                self.searchToQuery();
                self.pagingToQuery();
                self.sortingToQuery();
                self.likeParamsToQuery();
                return self.temp_params;
            };

            self.searchToQuery = function(){
                if(self.search)
                    self.temp_params._q = self.search;
                else
                    delete self.temp_params._q;
            };

            self.pagingToQuery = function(){
                if(!self.paging)
                    return;

                self.temp_params._limit = self.paging.per_page;
                self.temp_params._offset = (self.paging.current - 1) * self.paging.per_page;
            };

            self.sortingToQuery = function(){
                self.temp_params._sort = '';

                var sorting = _.isEmpty(self.sorting) ? self.defaultSorting : self.sorting;

                if(!sorting)
                    return;

                _.forEach(sorting, function(value, name){
                    if(!value)
                        return;

                    if(self.temp_params._sort)
                        self.temp_params._sort += ',';

                    if(value == 'DESC')
                        self.temp_params._sort += '-';

                    self.temp_params._sort += name;
                });
            };

            self.likeParamsToQuery = function(){
                angular.forEach(self.temp_params, function callback(value, name){
                    if (name.includes('-lk')) {
                        self.temp_params[name] = '*' + value + '*';
                    } else if(name.includes('-in') && value && value.join) {
                        if(value.length)
                            self.temp_params[name] = value.join(',');
                        else
                            delete self.temp_params[name];
                    }
                });
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
                page: '_page',
                id_not_in: 'id-not-in'
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
            items_per_page: 15,
            refresh_delay: 200,
            reset_search_input: true
        };

        this.locale = {
            search: 'Search',
            open: 'Open',
            edit: 'Edit',
            save: 'Save',
            cancel: 'Cancel',
            cancel_edit: 'Cancel edit',
            delete: 'Delete',
            delete_confirm: 'Do you want delete object',
            modal: 'Edit',
            not_found: 'Not found.',
            create_new: 'Create New',
            create_new_question: 'Create a New one?'
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
                    case 'textselect':
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

                if(field.directive)
                    directive = field.directive;
                else
                    directive = 'ae-' + directive;

                output += '<' + directive + ' ';

                output += 'type="' + (field.type || '') + '" ' +
                    'input-name="' + (field.input_name || '') + '" ';

                //if(field.width)
                 //   output += 'width="' + field.width + '" ';

                if(field.required)
                    output += 'required="true" ';

                if('get_list' in config)
                    output += 'get-list="' + config.get_list + '" ';

                if(field.url)
                    output += 'url="' + field.url + '" ';

                if(field.resource)
                    output += 'ng-resource="' + field.name + '_resource" ';

                if(field.fields)
                    output += 'ng-resource-fields="' + field.name + '_fields" ';

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
                    'on-add="save({' + field_name + ': addNgModel, is_new: true})" ' +
                    'has-error="' + item_name + '.errors.' + field_name + '" ' +
                    'ng-model-str="' + item_name + '.' +  field_name + '_str" ' +
                    'ng-model-sub-str="' + item_name + '.' +  field_name + '_sub_str" ' +
                    (field.default_value ? 'default-value="' + field.default_value + '" ' : '') +
                    (config.no_label ? '' : 'label="' + field.label + '" ' )+
                    'view-mode="!' + is_edit + '" '+
                    'is-new="' + (config.is_new ? 'true': 'false') + '" '+
                    'ng-class="{\'edit\':' + (config.is_new ? 'true': is_edit) + '}" '+
                    'placeholder="' + ((config.always_edit ? field.new_placeholder : field.placeholder) || '') + '" ';

                if(directive == 'ae-file-upload')
                    output += 'uploader="' + item_name + '.' + field_name + '__uploader" ';

                if(directive == 'ae-select-input'){
                    output += 'name-field="' + (field.name_field || '') + '" ';
                    output += 'or-name-field="' + (field.or_name_field || '') + '" ';
                    output += 'adder="' + (field.adder || 'false') + '" ';
                }

                if(field.modal && !config.already_modal && field.modal == 'self'){
                    output += 'modal-object="' + item_name + '" ';
                    output += 'modal-options="actualOptions" ';
                }

                output += '></' + directive + '>';

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
                        possibleFunctions = ['$update', 'update', '$save'];
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
            getNameById: function(list, val, nameField, orNameField){
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
            },
            round5: function(x){
                return Math.floor(x/5)*5;
            },
            debounce: function(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }
        };

        return service;
    }]);

angular
    .module('admin_app', [
        'ngResource',
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngMaterial',
        'ui.router',
        'wiz.markdown',
        'dndLists',
        'rt.debounce',
        'ckeditor',
        'a-edit',

        'admin_app.general',
        'admin_app.pages',
        'admin_app.database',
        'admin_app.mailing'
    ])
    .config(['$mdThemingProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', '$compileProvider', '$mdDateLocaleProvider', 'AppPaths',
        function($mdThemingProvider, $urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, $compileProvider, $mdDateLocaleProvider, AppPaths) {

            $stateProvider
                .state('app', {
                    url: '/admin',
                    controller: 'AppController as app',
                    templateUrl: AppPaths.app + 'templates/index.html',
                    abstract: true
                });

            //=====================================================
            // PAGES ROUTES: modules/pages/pages.routes.js
            //=====================================================

            //=====================================================
            // DATABASE ROUTES: modules/database/database.routes.js
            //=====================================================

            //=====================================================
            // MAILING ROUTES: modules/mailing/mailing.routes.js
            //=====================================================

            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise("/admin");

            $mdThemingProvider.theme('default')
                .primaryPalette('orange', {
                    'default': '800',
                    'hue-1': '200',
                    'hue-2': '100',
                    'hue-3': '100'
                })
                .accentPalette('cyan', {
                    'default': '800',
                    'hue-1': '700'
                })
                .warnPalette('pink', {
                    'default': 'A700',
                    'hue-1': '700',
                    'hue-2': '800',
                    'hue-3': '900'
                })
                .backgroundPalette('grey', {
                    'default': '50',
                    'hue-1': '50',
                    'hue-2': '100',
                    'hue-3': '400'
                });

            $compileProvider.preAssignBindingsEnabled(true);

            $mdDateLocaleProvider.formatDate = function(date) {
                return moment(date).format('DD.MM.YYYY');
            };
        }])
    .run(['$rootScope', 'ServerData', 'AEditConfig', function($rootScope, ServerData, AEditConfig){

        //Get current user and set his id as author id
        ServerData.getCurrentUser(function(current_user){
            $rootScope.current_user = current_user;
        });

        //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
        //    ServerData.reload();
        //});
        //config for marcelgwerder/laravel-api-handler
        AEditConfig.grid_options.additional_request_params._config = "meta-total-count,meta-filter-count,response-envelope";
    }]);
angular
    .module('admin_app.database', [
        'ui.router',

        'admin_app.general'
    ]);
angular
    .module('admin_app.general', [
    ]);
angular
    .module('admin_app.mailing', [
        'ui.router',

        'admin_app.general'
    ]);
angular
    .module('admin_app.pages', [
        'ui.router',

        'admin_app.general'
    ]);
angular.module('admin_app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'ServerData', 'Contexts', 'Pages', 'DatabaseConfig', function($scope, $http, AppPaths, ServerData, Contexts, Pages, DatabaseConfig) {
        var self = this;

        self.tabs = [
            {title:'Pages Tree', route: 'app.page.create', icon: 'description'},
            {title: 'Database Manage', icon: 'storage', children: DatabaseConfig.menu}
        ];

        self.databaseMenu = DatabaseConfig.menu;

        self.collapseNav = false;

        //#E0F7FA
    }]);
//<loading-gif ng-if="!dataLoaded"> </loading-gif>
// TODO: добавить throttle - не показывать гифку если идет тут-же переключение туда - обратно
angular.module('admin_app')
    .directive('loadingGif', [function() {
        return {
            restrict: 'E',
            template: '<img ng-if="lgIf" src="img/ajax-loading.gif"/>',
            scope: {
                lgIf: '='
            }
        };
    }]);
angular
    .module('admin_app')
    .service('cmdToast', ['$mdToast', function($mdToast){
        var self = this;

        self.baseOptions = {
            textContent: '',
            action: 'ок',
            hideDelay: 10000,
            highlightAction: undefined,
            theme: undefined,
            toastClass: undefined
        };

        self.basic = function(textContent){
            return self.show({textContent: textContent});
        };
        self.success = function(textContent){
            return self.show({textContent: textContent, theme: 'success-toast'});
        };
        self.error = function(textContent){
            if(!textContent)
                textContent = 'Unexpected error, please contact to administrator.';

            return self.show({textContent: textContent, theme: 'error-toast'});
        };
        self.warn = function(textContent){
            return self.show({textContent: textContent, theme: 'warn-toast'});
        };

        self.show = function(options){
            options = angular.extend({}, self.baseOptions, options);

            var toastObj = $mdToast.simple();

            angular.forEach(options, function(value, name){
                if(value)
                    toastObj[name](value);
            });

            return $mdToast.show(toastObj);
        };

        return self;
    }]);
angular
    .module('admin_app')
    .service('FileManger', ['$q', function($q){
        this.getPath = function(){
            return $q(function(resolve, reject) {
                //https://github.com/UniSharp/laravel-filemanager/
                var flm_window = window.open('/laravel-filemanager?type=Images', 'FileManager', 'width=900,height=600');

                window.SetUrl = function(url){
                    var l = document.createElement("a");
                    l.href = url;
                    resolve(l.pathname);
                };

                flm_window.onbeforeunload = reject;
            });
        }
    }]);
var defaultOptions = {
    'update': { method: 'PUT' }
};

//  simple resources
var resources_names = [
    'settings', 'contexts', 'pages', 'templates', 'mail_templates', 'logs', 'users', 'roles', 'tags',
    'sub_fields', 'sub_fields_types', 'sub_fields_values', 'controller_actions', 'translations', 'translations_groups',
    'translations_locales', 'subscribers', 'subscribers_groups', 'sent_mails'
];

resources_names.forEach(function(resource_name){
    var ResourceName = _.upperFirst(_.camelCase(resource_name));
    angular.module('admin_app').factory(ResourceName, ['$resource', function($resource) {
        return $resource('admin/api/' + resource_name + '/:id', { id: '@id' }, defaultOptions);
    }]);
});

// advanced resources
angular.module('admin_app').factory('PagesSEO', ['$resource', function($resource) {
    return $resource('admin/api/pages/:page_id/seo', { id: '@page_id' }, defaultOptions);
}]);

angular
    .module('admin_app')
    .service('ServerData', ['$http', function($http){
        var self = this;

        var data_variables = {
            'CurrentUser': '/admin/api/current_user',
            'SiteSettings': '/admin/api/site_settings_dictionary'
        };

        self.reload = function(){
            angular.forEach(data_variables, function(url, var_name) {
                //get data from service and set to service object as field by var_name
                self[var_name] = {};
                self[var_name].$promise = $http.get(url).then(function (response) {
                    angular.extend(self[var_name], response.data);
                    self[var_name].$promise = null;
                    return self[var_name];
                });

                //generate callbacks for simple get data, for example:
                //
                //ServerData.getCurrentUser(function(current_user){
                //  $scope.current_user = current_user;
                //});
                //
                self['get' + var_name] = function(callback){
                    //if data not yet received or already received
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
angular
    .module('admin_app')
    .directive('sfDate', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_date/sf_date.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {
                scope.$watch('ngModel', function(){
                    if(!scope.ngModel)
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
    .module('admin_app')
    .directive('sfImage', ['$timeout', 'AppPaths', 'FileManger', function($timeout, AppPaths, FileManger) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: AppPaths.directives + 'sf_image/sf_image.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?',
                viewMode: '=?',
                onSave: '&'
            },
            link: function (scope, element) {
                scope.openFileManager = function(){
                    FileManger.getPath().then(function(path){
                        scope.ngModel = path;

                        if(scope.onSave)
                            $timeout(scope.onSave);
                    }, function(){
                        //closed
                    })
                }
            }
        };
    }]);
angular
    .module('admin_app')
    .directive('sfJson', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_json/sf_json.html',
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
                    order_by: '-json_id',
                    bold_headers: false,
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
angular
    .module('admin_app')
    .directive('sfText', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_text/sf_text.html',
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
    .module('admin_app')
    .directive('sfTextarea', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.directives + 'sf_textarea/sf_textarea.html',
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
	.module('admin_app')
	.directive('sfTexteditor', ['$timeout', 'AppPaths', 'ServerData', function($timeout, AppPaths, ServerData) {
		return {
			restrict: 'E',
			templateUrl: AppPaths.directives + 'sf_texteditor/sf_texteditor.html',
			scope: {
				/* SubFieldValues resource */
				ngModel: '=',
				pageResource: '=?',
				templateResource: '=?',
				viewMode: '=?'
			},
			link: function (scope, element) {
				ServerData.getSiteSettings(function(site_settings){
					scope.site_settings = site_settings;
				});

				scope.CKEditorOptions = {
					language: 'en',
					skin: 'minimalist',
					allowedContent: true,
					entities: false,
					toolbarGroups: [
						{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
						{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'justify'] },
						{ name: 'styles' },
						{ name: 'colors' },
						'/',
						{ name: 'links' },
						{ name: 'insert' },
						{ name: 'tools' },
						{ name: 'others' },
						{ name: 'document',     groups: [ 'mode', 'document', 'doctools' ] },
						{ name: 'editing',     groups: [ 'find', 'selection' ] }
					],
					// https://github.com/UniSharp/laravel-filemanager/blob/master/doc/integration.md
					filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
					filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token={{csrf_token()}}',
					filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
					filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token={{csrf_token()}}'
				};
			}
		};
	}]);
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
                        tplHtml += '<div><label><span><md-tooltip md-direction="top">{ { $' + sub_field.key + ' } }</md-tooltip>' + (sub_field.name || sub_field.key) + '</span></label></div>';
                        tplHtml += '<' + directive + ' ng-model="resources.' + sub_field_value_name + '.value" ' +
                            'page-resource="pageResource" template-resource="templateResource" ' +
                            'sub-field-resource="resources.' + sub_field.key + '" is-edit="true"></' + directive + '>';
                        tplHtml += '<div><small>' + (sub_field.description || '') + '</small></div><md-divider></md-divider>';
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
                scope.$watch('pageResource', checkForInit);

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
angular.module('admin_app.database')
    .service('DatabaseConfig', [function(){

        this.menu = [
            {
                title: 'Pages',
                route:   'app.db.pages'
            },
            {
                title: 'Translations',
                route:   'app.db.translations'
            },
            {
                title: 'Mail Templates',
                route:   'app.db.mail_templates'
            },
            {
                title: 'Subscribers',
                route:   'app.db.subscribers'
            },
            {
                title: 'Sent Mails',
                route:   'app.db.sent_mails'
            },
            {
                title: 'Settings',
                route:   'app.db.settings'
            },
            {
                title: 'Contexts',
                route:   'app.db.contexts'
            },
            {
                title: 'Logs',
                route:   'app.db.logs'
            },
            {
                title: 'Tags',
                route:   'app.db.tags'
            },
            {
                title: 'Templates',
                route:   'app.db.templates'
            },
            {
                title: 'SubFields',
                route:   'app.db.sub_fields'
            },
            {
                title: 'Users',
                route:   'app.db.users'
            }
        ];

        return this;
    }]);
angular
    .module('admin_app.database')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

        $stateProvider

        //=====================================================
        // DATABASE
        //=====================================================

            .state('app.db', {
                url: '/db',
                abstract: true,
                views: {
                    header:     { template: "<h3>Database</h3>" },
                    content:    { template: '<md-content layout="row" flex="grow"><ui-view layout="column" flex="grow" class="padding"></ui-view></md-content>' }// layout="row" flex="grow"
                }
            });

        // states WITHOUT custom controller and template
        var generalStates = [
            'pages', 'mail_templates', 'sent_mails', 'settings', 'logs', 'tags', 'templates', 'users', 'contexts'
        ];

        generalStates.forEach(function(state_name){
            var StateName = _.upperFirst(_.camelCase(state_name));

            $stateProvider.state('app.db.' + state_name, {
                url: '/' + state_name,
                controller: 'DBManageGeneralController',
                templateUrl: AppPaths.database + 'general/templates/index.html',
                resolve: {
                    EntityConfig: 'DBManage' + StateName + 'Config'
                }
            })
        });

        // states WITH custom controller and template
        var customStates = [
            'subscribers', 'sub_fields', 'translations'
        ];

        customStates.forEach(function(state_name){
            var StateName = _.upperFirst(_.camelCase(state_name));

            $stateProvider.state('app.db.' + state_name, {
                url: '/' + state_name,
                controller: 'DBManage' + StateName + 'Controller',
                templateUrl: AppPaths.database + state_name + '/templates/index.html',
                resolve: {
                    EntityConfig: 'DBManage' + StateName + 'Config'
                }
            })
        });
    }]);
angular
    .module('admin_app.mailing')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

            $stateProvider

            //=====================================================
            // MAILING
            //=====================================================

                .state('app.mailing', {
                    url: '/manage',
                    abstract: true,
                    views: {
                        header:     { template: "<h3>Mailing</h3>" },
                        content:    { template: '<ui-view layout="row" flex="grow"></ui-view>' }
                    }
                })
                    .state('app.mailing.manage', {
                        url: '/mailing/:sentMailId',
                        controller: 'MailFormController',
                        templateUrl: AppPaths.mailing + 'mail_form/templates/index.html'
                    });
        }]);
angular.module('admin_app')
    .controller('PagesController', ['$scope', '$http', 'AppPaths', 'ServerData', 'Contexts', 'Pages', 'DatabaseConfig', function($scope, $http, AppPaths, ServerData, Contexts, Pages, DatabaseConfig) {

        var pagesCtrl = this;

        pagesCtrl.refreshPagesTree = function(){
            $scope.contexts = Contexts.query({_with: 'pages_tree', is_hide: 0});
        };

        pagesCtrl.refreshPagesTree();

        $scope.changeParent = function(event, dropped_index, dropped_item, parent){
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
    }]);
angular
    .module('admin_app.pages')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

            $stateProvider

            //=====================================================
            // PAGES
            //=====================================================

                .state('app.page', {
                    url: '',
                    abstract: true,
                    views: {
                        header:     { template: "<h3>Pages</h3>" },
                        content:    { templateUrl: AppPaths.pages + 'templates/index.html', controller: "PagesController as pagesCtrl" }
                    }
                })
                    .state('app.page.create', {
                        url: '?context_id',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.pages + 'page_form/templates/index.html'
                    })
                    .state('app.page.edit', {
                        url: '/page/:pageId?context_id',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.pages + 'page_form/templates/index.html'
                    });
        }]);
angular.module('admin_app.database')
    .factory('DBManageContextsConfig', ['Contexts', function(Contexts) {

        this.entityName = 'Contexts';

        this.aeGridOptions = {
            resource: Contexts,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Context key',
                    new_placeholder: 'New Context',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description'
                },
                {
                    name: 'role',
                    label: 'Role'
                },
                {
                    name: 'index',
                    label: 'Index'
                },
                {
                    name: 'is_hide',
                    label: 'Is hide',
                    type: 'bool'
                }
            ]
        };

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageGeneralConfig', [function() {

        this.entityName = 'Entity Name';

        this.aeGridOptions = {
            caption: '',
            create: true,
            edit: true,
            order_by: '-id',
            resource: null,
            ajax_handler: true,
            get_list: true,
            paginate: true,
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
                    new_placeholder: 'New Entity',
                    required: true
                }
            ]
        };

        return this;
    }]);
angular.module('admin_app.database')
    .controller('DBManageGeneralController', ['$scope', 'DBManageGeneralConfig', 'EntityConfig', function($scope, DBManageGeneralConfig, EntityConfig) {
        $scope.items = [];

        angular.extend($scope, EntityConfig);

        $scope.aeGridOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridOptions);
    }]);
angular.module('admin_app.database')
    .factory('DBManageLogsConfig', ['Logs', 'Users', function(Logs, Users) {

        this.entityName = 'Logs';

        this.aeGridOptions = {
            create: false,
            edit: false,
            resource: Logs,
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

        return this;
}]);
angular.module('admin_app.database')
    .factory('DBManageMailTemplatesConfig', ['MailTemplates', function(MailTemplates) {

        this.entityName = 'Mail templates';

        this.aeGridOptions = {
            resource: MailTemplates,
            row_height: '100px',
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
                    label: 'Mail Title',
                    colspan: 2
                },
                {
                    name: 'content',
                    label: 'Main Content',
                    type: 'textarea',
                    width: '500px',
                    colspan: 3
                }
            ]
        };

        return this;
}]);
angular.module('admin_app.database')
    .factory('DBManagePagesConfig', ['Pages', 'Templates', 'Users', 'Contexts', function(Pages, Templates, Users, Contexts) {

        this.entityName = 'Pages';

        this.aeGridOptions = {
            resource: Pages,
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
                    required: true,
                    colspan: 2
                },
                {
                    name: 'alias',
                    label: 'Alias'
                },
                {
                    name: 'sub_title',
                    label: 'SubTitle',
                    colspan: 2
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
                    directive: 'sf-texteditor',
                    table_hide: true
                },
                {
                    name: 'context_id',
                    label: 'Context',
                    type: 'select',
                    resource: Contexts,
                    list: 'contexts',
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

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageSentMailsConfig', ['SentMails', 'MailTemplates', 'Pages', 'SubscribersGroups', function(SentMails, MailTemplates, Pages, SubscribersGroups) {

        this.entityName = 'Sent Mails';

        this.aeGridOptions = {
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

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageSettingsConfig', ['Settings', 'Contexts', 'ServerData', function(Settings, Contexts, ServerData) {

        this.entityName = 'Settings';

        this.aeGridOptions = {
            caption: 'All settings available in templates.',
            resource: Settings,
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
                },
                {
                    name: 'context_id',
                    label: 'Context',
                    type: 'select',
                    list: 'contexts',
                    resource: Contexts
                }
            ],
            callbacks: {
                onChange: ServerData.reload
            }
        };

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageSubFieldsConfig', ['SubFields', 'SubFieldsTypes', 'SubFieldsValues', 'Templates', 'Pages', 'DBManageGeneralConfig', function(SubFields, SubFieldsTypes, SubFieldsValues, Templates, Pages, DBManageGeneralConfig) {

        this.subFieldsTypesName = 'Sub Fields Types';

        this.aeGridSubFieldsTypesOptions = {
            resource: SubFieldsTypes,
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

        this.subFieldsName = 'Sub Fields';

        this.aeGridSubFieldsOptions = {
            resource: SubFields,
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

        this.subFieldsValuesName = 'Sub Fields Values';

        this.aeGridSubFieldsValuesOptions = {
            resource: SubFieldsValues,
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

        return this;
    }]);
angular.module('admin_app.database')
    .controller('DBManageSubFieldsController', ['$scope', 'DBManageGeneralConfig', 'EntityConfig', function($scope, DBManageGeneralConfig, EntityConfig) {

        angular.extend($scope, EntityConfig);

        $scope.sub_fields_types = [];
        $scope.aeGridSubFieldsTypesOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubFieldsTypesOptions);

        $scope.sub_fields = [];
        $scope.aeGridSubFieldsOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubFieldsOptions);

        $scope.sub_fields_values = [];
        $scope.aeGridSubFieldsValuesOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubFieldsValuesOptions);
    }]);
angular.module('admin_app.database')
    .factory('DBManageSubscribersConfig', ['SubscribersGroups', 'Subscribers', function(SubscribersGroups, Subscribers) {

        this.subscribersGroupsName = 'Subscribers Groups';

        this.aeGridSubscribersGroupsOptions = {
            resource: SubscribersGroups,
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

        this.subscribersName = 'Subscribers';

        this.aeGridSubscribersOptions = {
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

        return this;
    }]);
angular.module('admin_app.database')
    .controller('DBManageSubscribersController', ['$scope', 'DBManageGeneralConfig', 'EntityConfig', function($scope, DBManageGeneralConfig, EntityConfig) {
            angular.extend($scope, EntityConfig);

            $scope.subscribers_groups = [];
            $scope.aeGridSubscribersGroupsOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubscribersGroupsOptions);

            $scope.subscribers = [];
            $scope.aeGridSubscribersOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridSubscribersOptions);
    }]);
angular.module('admin_app.database')
    .factory('DBManageTagsConfig', ['Tags', function(Tags) {

        this.entityName = 'Tags';

        this.aeGridOptions = {
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

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageTemplatesConfig', ['Templates', 'SubFields', 'ControllerActions', function(Templates, SubFields, ControllerActions) {

        this.entityName = 'Tags';

        this.aeGridOptions = {
            caption: 'You must to add blade template file on address /resources/views/templates/example.bade.php(path:"example") before/after add row to DB!',
            resource: Templates,
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

        return this;
    }]);
angular.module('admin_app.database')
    .factory('DBManageTranslationsConfig', ['Translations', 'TranslationsGroups', 'TranslationsLocales', 'DBManageGeneralConfig', function(Translations, TranslationsGroups, TranslationsLocales, DBManageGeneralConfig) {

        this.entityName = 'Translations';

        this.aeGridOptions = {
            resource: Translations,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Translation key',
                    new_placeholder: 'New Translation',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value',
                    colspan: 3
                },
                {
                    name: 'locale',
                    label: 'Locale',
                    type: 'textselect',
                    list: 'locales',
                    adder: true
                },
                {
                    name: 'group',
                    label: 'Group',
                    type: 'textselect',
                    list: 'groups',
                    adder: true
                }
            ],
            lists: {
                locales: TranslationsLocales.query(),
                groups: TranslationsGroups.query()
            }
        };

        return this;
    }]);
angular.module('admin_app.database')
    .controller('DBManageTranslationsController', ['$scope', '$http', 'cmdToast', 'DBManageGeneralConfig', 'EntityConfig', function($scope, $http, cmdToast, DBManageGeneralConfig, EntityConfig) {

        angular.extend($scope, EntityConfig);

        $scope.items = [];
        $scope.aeGridOptions = angular.extend({}, DBManageGeneralConfig.aeGridOptions, EntityConfig.aeGridOptions);

        $scope.importWithReplace = function(){
            if(!confirm('Are you sure to IMPORT to database with replace all translations? This action will rewrite database data.'))
                return;

            $http.post('admin/api/import_translations').then(function(){
                cmdToast.success('Import success!');
                $scope.aGridOptions = angular.copy($scope.aGridOptions);
            }, function(){
                cmdToast.error('Import error!');
            });
        };

        $scope.exportToFiles = function(){
            if(!confirm('Are you sure to EXPORT to files all translations? This action will rewrite resources/lang files content.'))
                return;

            $http.post('admin/api/export_translations').then(function(){
                cmdToast.success('Export success!');
            }, function(){
                cmdToast.error('Export error!');
            });
        }
    }]);
angular.module('admin_app.database')
    .factory('DBManageUsersConfig', ['Users', 'Roles', function(Users, Roles) {

        this.entityName = 'Users';

        this.aeGridOptions = {
            resource: Users,
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
                },
                {
                    name: 'roles_ids',
                    type: 'multiselect',
                    label: 'Roles',
                    list: 'roles',
                    resource: Roles,
                    table_hide: true
                }
            ]
        };

        return this;
    }]);
var app_path = '/angular/admin_app/',
    modules_path = app_path + 'modules/';

angular.module('admin_app.general')
    .constant('AppPaths', {
        app:            app_path,
        modules:        modules_path,
        directives:     app_path + 'directives/',

        database:       modules_path + 'database/',
        pages:          modules_path + 'pages/',
        mailing:        modules_path + 'mailing/'
    });
angular.module('admin_app.mailing')
    .controller('MailFormController', ['$scope', '$state', '$http', '$mdSidenav', 'debounce', 'cmdToast', 'AppPaths', 'ServerData', 'Pages', 'Templates', 'MailTemplates', 'SentMails', 'SubscribersGroups', 'Subscribers',
        function($scope, $state, $http, $mdSidenav, debounce, cmdToast, AppPaths, ServerData, Pages, Templates, MailTemplates, SentMails, SubscribersGroups, Subscribers) {

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

            $scope.openSentMails = function(){
                $mdSidenav('sent_mails')
                    .toggle()
                    .then(function () {
                    });
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
                    };
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
                cmdToast.basic({message: 'Sending mail...', replaceMessage: true, delay: 999999});

                $scope.mail.sub_data = {};
                $scope.mail.sub_data_array.forEach(function(sub_item){
                    $scope.mail.sub_data[sub_item.key] = sub_item.value;
                });

                //always create new mail
                $scope.mail.id = null;
                $scope.mail.$save().then(function(result){
                    $scope.mail = angular.copy(defaultMail);

                    cmdToast.success({message: 'Mail sent!', replaceMessage: true});

                    $scope.getSentMails();

                    $scope.status.mail = {};
                }, function(){
                    $scope.status.mail.error = true;
                    cmdToast.error({message: 'Error. Something wrong...', replaceMessage: true});
                })
            };

            $scope.addNewSubItem = function(){
                angular.merge($scope.mail.sub_data, {'':''});
            }
    }]);
angular
    .module('admin_app.pages')
    .factory('PageFormConfig', ['Templates', 'Contexts', 'Pages', 'Users', 'Tags', 'ControllerActions', function(Templates, Contexts, Pages, Users, Tags, ControllerActions) {

    this.models = {
        templates: Templates,
        contexts: Contexts,
        pages: Pages,
        users: Users,
        tags: Tags,
        controller_actions: ControllerActions
    };

    this.fields = {
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
        contexts: [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'key',
                label: 'Key'
            },
            {
                name: 'role',
                label: 'Role of context(lang for example)'
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

    return this;
}]);
angular
    .module('admin_app.pages')
    .controller('PageFormController', ['$scope', '$state', '$http', 'cmdToast', 'AppPaths', 'ServerData', 'PageFormConfig', 'Contexts', 'Pages', 'PagesSEO', 'Templates', 'Users', 'Tags', 'SubFields', 'ControllerActions',
        function($scope, $state, $http, cmdToast, AppPaths, ServerData, PageFormConfig, Contexts, Pages, PagesSEO, Templates, Users, Tags, SubFields, ControllerActions) {

            $scope.subFieldsApi = {};

            //Models for select inputs
            $scope.models = PageFormConfig.models;

            //Fields for adder functional at select inputs
            $scope.fields = PageFormConfig.fields;

            var defaultPage = new Pages();

            if($state.params.pageId){
                Pages.get({id: $state.params.pageId}, function(page){
                    $scope.page = page;
                    $scope.page.published_at = new Date($scope.page.published_at);
                });

                $scope.page = {id: $state.params.pageId};
            } else {
                defaultPage.is_menu_hide = true;
                defaultPage.tags_ids = [];
                defaultPage.controller_actions_ids = [];
                defaultPage.seo = {};

                defaultPage.context_id = $state.params.context_id;

                $scope.page = angular.copy(defaultPage);
            }

            //Get current user and set his id as author id
            ServerData.getCurrentUser(function(current_user){
                $scope.current_user = current_user;
                defaultPage.author_id = current_user.id;

                angular.extend($scope.page, angular.extend({}, defaultPage, $scope.page));
            });

            //Get site settings and set default values to page object
            ServerData.getSiteSettings(function(site_settings){
                $scope.site_settings = site_settings;
                defaultPage.template_id = $scope.site_settings.default_template_id;
                defaultPage.context_id = $scope.site_settings.default_context_id;

                angular.extend($scope.page, angular.extend({}, defaultPage, $scope.page));
            });

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
                console.log('get sub fields');
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

                    cmdToast.success('Page saved!');
                    $scope.pagesCtrl.refreshPagesTree();
                })
            };
    }]);