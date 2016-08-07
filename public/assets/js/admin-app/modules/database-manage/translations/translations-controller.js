angular.module('app')
    .controller('TranslationsController', ['$scope', 'Translations', 'TranslationsGroups', 'TranslationsLocales', function($scope, Translations, TranslationsGroups, TranslationsLocales) {
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
            $scope.items = Translations.query({_import_replace: true});
            $scope.aGridOptions = angular.copy($scope.aGridOptions);
        };

    }]);