angular.module('app')
    .controller('SendedMailsController', ['$scope', 'SendedMails', 'MailTemplates', 'Pages', 'SubscribersGroups', function($scope, SendedMails, MailTemplates, Pages, SubscribersGroups) {
        $scope.sended_mails = SendedMails.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: SendedMails,
            create: false,
            edit: false,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'result_title',
                    modal: 'self',
                    label: 'Result Title'
                },
                {
                    name: 'result_content',
                    label: 'Result Content',
                    type: 'textarea'
                },
                {
                    name: 'result_addresses',
                    label: 'Addresses Mail',
                    type: 'textarea'
                },
                {
                    name: 'mail_template_id',
                    label: 'Mail template',
                    type: 'select',
                    resource: MailTemplates,
                    list: 'mail_templates'
                },
                {
                    name: 'page_id',
                    label: 'Source page',
                    type: 'select',
                    resource: Pages,
                    list: 'pages'
                },
                {
                    name: 'subscribers_groups_ids',
                    label: 'Subscribers groups',
                    type: 'multiselect',
                    resource: SubscribersGroups,
                    list: 'subscribers_groups',
                    table_hide: true
                }
            ]
        };
    }]);