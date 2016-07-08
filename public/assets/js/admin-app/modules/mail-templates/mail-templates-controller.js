angular.module('app')
    .controller('MailTemplatesController', ['$scope', 'MailTemplates', function($scope, MailTemplates) {
        $scope.mail_templates = MailTemplates.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            resource: MailTemplates,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Template name',
                    new_placeholder: 'New Mail Template',
                    required: true
                },
                {
                    name: 'key',
                    label: 'Template key',
                    required: true
                },
                {
                    name: 'title',
                    label: 'Mail Title'
                },
                {
                    name: 'content',
                    label: 'Main Content',
                    type: 'textarea',
                    width: '300px'
                }
            ]
        };
    }]);