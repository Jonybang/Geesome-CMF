angular.module('admin-app.database')
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