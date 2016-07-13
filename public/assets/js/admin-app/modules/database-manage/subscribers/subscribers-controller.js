angular.module('app')
    .controller('SubscribersController', ['$scope', 'SubscribersGroups', 'Subscribers', 'Templates', function($scope, SubscribersGroups, Subscribers, Templates) {
        $scope.subscribers_groups = SubscribersGroups.query();

        $scope.aGridSubscribersGroupsOptions = {
            caption: '',
            orderBy: '-id',
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
            ],
            lists: {
                subscribers: $scope.subscribers
            }
        };

        $scope.subscribers = Subscribers.query();

        $scope.aGridSubscribersOptions = {
            caption: '',
            orderBy: '-id',
            resource: Subscribers,
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
            ],
            lists: {
                subscribers_groups: $scope.subscribers_groups
            }
        };
    }]);