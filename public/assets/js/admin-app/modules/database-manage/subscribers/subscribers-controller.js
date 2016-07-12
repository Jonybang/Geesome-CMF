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
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Sub Field Type',
                    required: true
                }
            ]
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
                    name: 'email',
                    modal: 'self',
                    label: 'Email',
                    new_placeholder: 'New Subscriber',
                    required: true
                },
                {
                    name: 'user_agent',
                    label: 'User agent info',
                    type: 'textarea'
                },
                {
                    name: 'subscriber_group_id',
                    label: 'Subscriber group',
                    type: 'select',
                    list: 'subscribers_groups'
                }
            ],
            lists: {
                subscribers_groups: $scope.subscribers_groups
            }
        };
    }]);