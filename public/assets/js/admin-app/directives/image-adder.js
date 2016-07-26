angular
    .module('app')
    .directive('imageAdder', ['$timeout', '$http', 'AppPaths', function($timeout, $http, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/image-adder.html',
            scope: {
                ngModel: '=',
                ngChange: '&'
            },
            link: function (scope, element) {
                var defaultItem = {
                    chosen_mode: '',
                    uploadFile: null,
                    previewImage: '',
                    imageUri: '',

                    chosen_files: [],
                    images_files: []
                };
                function initNgModel(){
                    scope.ngModel = [angular.copy(defaultItem)];
                }
                initNgModel();

                scope.addItem = function(){
                    scope.ngModel.push(angular.copy(defaultItem));
                };
                scope.deleteItem = function(index){
                    scope.ngModel.splice(index, 1);
                    if(!scope.ngModel.length){
                        initNgModel();
                        return;
                    }
                    var lastItem = scope.ngModel[scope.ngModel.length - 1];
                    if(lastItem.previewImage || lastItem.imageUri){
                        scope.addItem();
                    }
                };

                scope.filesAdded = function(item){
                    if(item.chosen_files.length > 1){
                        angular.forEach(item.chosen_files, function(file, index){
                            if(index > 0)
                                scope.ngModel.push({
                                    uploadFile: file,
                                    previewImage: item.images_files[index],
                                    chosen_mode: 'upload'
                                });
                        });
                    }

                    item.uploadFile = item.chosen_files[0];
                    item.previewImage = item.images_files[0];

                    scope.addItem();
                };
                scope.linkPasted = function(item){
                    $http.get(item.imageUri).then(function(response){
                        scope.addItem();
                    })
                }
            }
        };
    }]);