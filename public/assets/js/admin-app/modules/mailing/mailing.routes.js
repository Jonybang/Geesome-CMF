angular
    .module('admin-app.mailing')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

            $stateProvider

            //=====================================================
            // MAILING
            //=====================================================

                .state('app.mailing', {
                    url: '/manage',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.mailing.manage', {
                        url: '/mailing/:sentMailId',
                        controller: 'MailFormController',
                        templateUrl: AppPaths.mailing + 'mail_form/templates/index.html'
                    });
        }]);