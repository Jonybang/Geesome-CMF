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