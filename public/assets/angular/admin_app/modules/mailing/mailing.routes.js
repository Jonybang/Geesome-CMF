angular
    .module('admin_app.mailing')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

            $stateProvider

            //=====================================================
            // MAILING
            //=====================================================

                .state('app.mailing', {
                    url: '/manage',
                    abstract: true,
                    views: {
                        header:     { template: "<h3 class='text-center'>Mailing</h3>" },
                        content:    { template: "<ui-view></ui-view>" }
                    }
                })
                    .state('app.mailing.manage', {
                        url: '/mailing/:sentMailId',
                        controller: 'MailFormController',
                        templateUrl: AppPaths.mailing + 'mail_form/templates/index.html'
                    });
        }]);