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