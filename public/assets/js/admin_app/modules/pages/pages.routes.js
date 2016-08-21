angular
    .module('admin_app.pages')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

            $stateProvider

            //=====================================================
            // PAGES
            //=====================================================

                .state('app.page', {
                    url: '',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.page.create', {
                        url: '?context_id',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.pages + 'page-form/templates/index.html'
                    })
                    .state('app.page.edit', {
                        url: '/page/:pageId?context_id',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.pages + 'page-form/templates/index.html'
                    });
        }]);