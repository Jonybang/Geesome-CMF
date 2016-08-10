angular.module('app')
    .controller('TranslationsController', ['$scope', '$http', 'Notification', 'Translations', 'TranslationsGroups', 'TranslationsLocales', function($scope, $http, Notification, Translations, TranslationsGroups, TranslationsLocales) {
        $scope.items = [];

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: Translations,
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
                    name: 'key',
                    modal: 'self',
                    label: 'Translation key',
                    new_placeholder: 'New Translation',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value'
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

        $scope.importWithReplace = function(){
            if(!confirm('Are you sure to IMPORT to database with replace all translations? This action will rewrite database data.'))
                return;

            $http.post('admin/api/import_translations').then(function(){
                Notification.success('Import success!');
                $scope.aGridOptions = angular.copy($scope.aGridOptions);
            }, function(){
                Notification.error('Import error!');
            });
        };

        $scope.exportToFiles = function(){
            if(!confirm('Are you sure to EXPORT to files all translations? This action will rewrite resources/lang files content.'))
                return;

            $http.post('admin/api/export_translations').then(function(){
                Notification.success('Export success!');
            }, function(){
                Notification.error('Export error!');
            });
        }
    }]);