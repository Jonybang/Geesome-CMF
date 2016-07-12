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
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Dictionary',
                    required: true
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
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
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
                    required: true
                }
            ],
            lists: {
                dictionaries: $scope.dictionaries
            }
        };
    }]);