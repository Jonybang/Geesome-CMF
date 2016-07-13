angular.module('app')
    .controller('MailingController', ['$scope', '$state', '$http', '$uibModal', 'AppPaths', 'AppData', 'Pages', 'Templates', 'MailTemplates', 'SendedMails', 'SubscribersGroups', 'Subscribers',
        function($scope, $state, $http, $uibModal, AppPaths, AppData, Pages, Templates, MailTemplates, SendedMails, SubscribersGroups, Subscribers) {
            var defaultMail = new SendedMails();

            if($state.params.sendedMailId){
                $scope.mail = SendedMails.get({id: $state.params.sendedMailId});
                $scope.mail.id = $state.params.sendedMailId;
            } else {
                defaultMail.subscribers_groups_ids = [];

                $scope.mail = angular.copy(defaultMail);
            }

            $scope.getSendedMails = function(){
                $scope.sended_mails = SendedMails.query();
            };
            $scope.getSendedMails();

            //Models for select inputs
            $scope.models = {
                subscribers_groups: SubscribersGroups,
                mail_templates: MailTemplates,
                pages: Pages
            };
            //Fields for adder functional at select inputs
            $scope.fields = {
                subscribers_groups: [
                    {
                        name: 'key',
                        label: 'Key',
                        required:true
                    },
                    {
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        name: 'subscribers_ids',
                        label: 'Subscribers',
                        type: 'multiselect',
                        model: Subscribers,
                        list: 'subscribers'
                    }
                ],
                mail_templates: [
                    {
                        name: 'key',
                        label: 'Key',
                        required:true
                    },
                    {
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        name: 'title',
                        label: 'Title template'
                    },
                    {
                        name: 'content',
                        label: 'Content template',
                        type: 'textarea'
                    }
                ],
                pages: [
                    {
                        name: 'title',
                        label: 'Title'
                    },
                    {
                        name: 'template_id',
                        label: 'Template',
                        type: 'select',
                        model: Templates,
                        list: 'templates'
                    }
                ]
            };

            $scope.sendMail = function(){
                //Validate for require fields
                $scope.hasErrors = {};
                var required = ['subscribers_groups_ids', 'mail_template_id'];
                required.forEach(function(reqField){
                    if(!$scope.mail[reqField] || (angular.isArray($scope.mail[reqField]) || !$scope.mail[reqField].length))
                        $scope.hasErrors[reqField] = true;
                    else
                        delete $scope.hasErrors[reqField];
                });

                if(!_.isEmpty($scope.hasErrors))
                    return;

                $scope.mail.$save().then(function(result){
                    $scope.mail = angular.copy(defaultMail);

                    $scope.alert = 'Mail sended!';

                    $scope.getSendedMails();
                })
            };

            $scope.closeAlert = function(){
                $scope.alert = ''
            };
    }]);