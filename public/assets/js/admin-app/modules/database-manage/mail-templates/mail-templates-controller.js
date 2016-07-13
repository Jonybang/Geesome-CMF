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
                    name: 'key',
                    label: 'Template key',
                    modal: 'self',
                    required: true,
                    new_placeholder: 'New Mail Template'
                },
                {
                    name: 'name',
                    label: 'Template name'
                },
                {
                    name: 'title',
                    label: 'Mail Title'
                },
                {
                    name: 'content',
                    label: 'Main Content',
                    type: 'textarea',
                    width: '500px'
                }
            ]
        };
    }]);