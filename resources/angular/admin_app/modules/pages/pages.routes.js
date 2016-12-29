angular
    .module('admin_app.pages')
    .config(['$stateProvider', 'AppPaths', function($stateProvider, AppPaths) {

            $stateProvider

            //=====================================================
            // PAGES
            //=====================================================

                .state('app.page', {
                    url: '',
                    abstract: true,
                    views: {
                        header:     { template: "<h3>Pages</h3>" },
                        content:    { templateUrl: AppPaths.pages + 'templates/index.html', controller: "PagesController" }
                    }
                })
                    .state('app.page.create', {
                        url: '?context_id',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.pages + 'page_form/templates/index.html'
                    })
                    .state('app.page.edit', {
                        url: '/page/:pageId?context_id',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.pages + 'page_form/templates/index.html'
                    });
        }]);