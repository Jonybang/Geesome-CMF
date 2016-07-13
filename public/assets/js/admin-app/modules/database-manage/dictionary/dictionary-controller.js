angular.module('app')
    .controller('DictionaryController', ['$scope', 'Dictionaries', 'DictionariesWords', function($scope, Dictionaries, DictionariesWords) {
        $scope.dictionaries = Dictionaries.query();

        $scope.aGridDictionariesOptions = {
            caption: '',
            orderBy: '-id',
            resource: Dictionaries,
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

        $scope.dictionaries_words = DictionariesWords.query();

        $scope.aGridDictionariesWordsOptions = {
            caption: '',
            orderBy: '-id',
            resource: DictionariesWords,
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
                    type: 'select',
                    list: 'dictionaries',
                    or_name_field: 'key',
                    required: true
                }
            ],
            lists: {
                dictionaries: $scope.dictionaries
            }
        };
    }]);