angular
    .module('app', ['ngResource', 'ui.bootstrap', 'ui.router', 'ui.router.tabs', 'wiz.markdown', 'dndLists', 'rt.debounce', 'ckeditor', 'a-edit'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 'AppPaths',
        function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, AppPaths) {

            $stateProvider
                .state('app', {
                    url: '/admin',
                    controller: 'AppController as app',
                    templateUrl: AppPaths.app_tpls + 'index.html',
                    abstract: true
                })

                //=====================================================
                // POST FORM
                //=====================================================

                .state('app.post', {
                    url: '',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                .state('app.post.create', {
                    url: '',
                    controller: 'PostFormController',
                    templateUrl: AppPaths.post_form_tpls + 'index.html'
                })
                .state('app.post.edit', {
                    url: '/post/:postId',
                    controller: 'PostFormController',
                    templateUrl: AppPaths.post_form_tpls + 'index.html'
                })

                //=====================================================
                // PAGE FORM
                //=====================================================

                .state('app.page', {
                    url: '/page',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.page.create', {
                        url: '',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.page_form_tpls + 'index.html'
                    })
                    .state('app.page.edit', {
                        url: '/page/:pageId',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.page_form_tpls + 'index.html'
                    })

                //=====================================================
                // DATABASE MANAGE
                //=====================================================

                .state('app.db', {
                    url: '/db',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.db.pages', {
                        url: '/pages',
                        controller: 'PagesController',
                        templateUrl: AppPaths.pages_tpls + 'index.html'
                    })
                    .state('app.db.dictionary', {
                        url: '/dictionary',
                        controller: 'DictionaryController',
                        templateUrl: AppPaths.dictionary_tpls + 'index.html'
                    })
                    .state('app.db.mail_templates', {
                        url: '/mail_templates',
                        controller: 'MailTemplatesController',
                        templateUrl: AppPaths.mail_templates_tpls + 'index.html'
                    })
                    .state('app.db.subscribers', {
                        url: '/subscribers',
                        controller: 'SubscribersController',
                        templateUrl: AppPaths.subscribers_tpls + 'index.html'
                    })
                    .state('app.db.sent_mails', {
                        url: '/sent_mails',
                        controller: 'SentMailsController',
                        templateUrl: AppPaths.sent_mails_tpls + 'index.html'
                    })
                    .state('app.db.settings', {
                        url: '/settings',
                        controller: 'SettingsController',
                        templateUrl: AppPaths.settings_tpls + 'index.html'
                    })
                    .state('app.db.logs', {
                        url: '/logs',
                        controller: 'LogsController',
                        templateUrl: AppPaths.logs_tpls + 'index.html'
                    })
                    .state('app.db.tags', {
                        url: '/tags',
                        controller: 'TagsController',
                        templateUrl: AppPaths.tags_tpls + 'index.html'
                    })
                    .state('app.db.templates', {
                        url: '/templates',
                        controller: 'TemplatesController',
                        templateUrl: AppPaths.templates_tpls + 'index.html'
                    })
                    .state('app.db.sub_fields', {
                        url: '/sub_fields',
                        controller: 'SubFieldsController',
                        templateUrl: AppPaths.sub_fields_tpls + 'index.html'
                    })
                    .state('app.db.users', {
                        url: '/users',
                        controller: 'UserController',
                        templateUrl: AppPaths.users_tpls + 'index.html'
                    })

                //=====================================================
                // DATABASE MANAGE
                //=====================================================

                .state('app.manage', {
                    url: '/manage',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.manage.mailing', {
                        url: '/mailing/:sentMailId',
                        controller: 'MailingController',
                        templateUrl: AppPaths.mailing_tpls + 'index.html'
                    });

            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise("/admin");
        }])
    .run(['$rootScope', 'AppData', 'AEditConfig', function($rootScope, AppData, AEditConfig){

        function setDefaultSettings(){
            $rootScope.cur_user = AppData.cur_user;
        }
        if(AppData.cur_user.$promise)
            AppData.cur_user.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            AppData.reload();
        });

        $rootScope.CKEditorOptions = {
            language: 'en',
            allowedContent: true,
            entities: false,
            toolbarGroups: [
                { name: 'editing',     groups: [ 'find', 'selection' ] },
                '/',
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
                { name: 'links' },
                { name: 'insert' },
                '/',
                { name: 'styles' },
                { name: 'colors' },
                { name: 'tools' },
                { name: 'others' },
                { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
            ]
        };

        //config for marcelgwerder/laravel-api-handler
        AEditConfig.grid_options.additional_request_params._config = "meta-total-count,meta-filter-count,response-envelope";
    }]);