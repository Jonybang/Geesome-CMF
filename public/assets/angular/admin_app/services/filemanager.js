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