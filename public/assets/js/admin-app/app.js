angular
    .module('admin-app', [
        'ngResource',
        'ui.bootstrap',
        'ui.router',
        'ui.router.tabs',
        'ui-notification',
        'wiz.markdown',
        'dndLists',
        'rt.debounce',
        'ckeditor',
        'a-edit'
    ])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 'AppPaths', 'NotificationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, AppPaths, NotificationProvider) {

            $stateProvider
                .state('app', {
                    url: '/admin',
                    controller: 'AppController as app',
                    templateUrl: AppPaths.app_tpls + 'index.html',
                    abstract: true
                })

                //=====================================================
                // PAGE FORM
                //=====================================================

                .state('app.page', {
                    url: '',
                    template: '<ui-view></ui-view>',
                    abstract: true
                })
                    .state('app.page.create', {
                        url: '?context_id',
                        controller: 'PageFormController',
                        templateUrl: AppPaths.page_form_tpls + 'index.html'
                    })
                    .state('app.page.edit', {
                        url: '/page/:pageId?context_id',
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
                    // modules/database-manage routes
                    .state('app.db.pages', {
                        url: '/pages',
                        controller: 'DBManageGeneralController',
                        templateUrl: AppPaths.db_manage_general_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManagePagesConfig'
                        }
                    })
                    .state('app.db.translations', {
                        url: '/translations',
                        controller: 'DBManageGeneralController',
                        templateUrl: AppPaths.db_manage_translations_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageTranslationsConfig'
                        }
                    })
                    .state('app.db.mail_templates', {
                        url: '/mail_templates',
                        controller: 'DBManageGeneralController',
                        templateUrl: AppPaths.db_manage_general_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageMailTemplatesConfig'
                        }
                    })
                    .state('app.db.subscribers', {
                        url: '/subscribers',
                        controller: 'DBManageSubscribersController',
                        templateUrl: AppPaths.db_manage_subscribers_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageSubscribersConfig'
                        }
                    })
                    .state('app.db.sent_mails', {
                        url: '/sent_mails',
                        controller: 'DBManageGeneralController',
                        templateUrl: AppPaths.db_manage_general_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageSentMailsConfig'
                        }
                    })
                    .state('app.db.settings', {
                        url: '/settings',
                        controller: 'DBManageGeneralController',
                        templateUrl: AppPaths.db_manage_general_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageSettingsConfig'
                        }
                    })
                    .state('app.db.logs', {
                        url: '/logs',
                        controller: 'DBManageGeneralController',
                        templateUrl: AppPaths.db_manage_general_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageLogsConfig'
                        }
                    })
                    .state('app.db.tags', {
                        url: '/tags',
                        controller: 'DBManageGeneralController',
                        templateUrl: AppPaths.db_manage_general_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageTagsConfig'
                        }
                    })
                    .state('app.db.templates', {
                        url: '/templates',
                        controller: 'DBManageGeneralController',
                        templateUrl: AppPaths.db_manage_general_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageTemplatesConfig'
                        }
                    })
                    .state('app.db.sub_fields', {
                        url: '/sub_fields',
                        controller: 'DBManageSubFieldsController',
                        templateUrl: AppPaths.db_manage_sub_fields_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageSubFieldsConfig'
                        }
                    })
                    .state('app.db.users', {
                        url: '/users',
                        controller: 'DBManageGeneralController',
                        templateUrl: AppPaths.db_manage_general_tpls + 'index.html',
                        resolve: {
                            EntityConfig: 'DBManageUsersConfig'
                        }
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

            NotificationProvider.setOptions({
                delay: 5000,
                startTop: 20,
                startRight: 10,
                verticalSpacing: 20,
                horizontalSpacing: 20,
                positionX: 'right',
                positionY: 'top'
            });
        }])
    .run(['$rootScope', 'AppData', 'AEditConfig', function($rootScope, AppData, AEditConfig){

        //Get current user and set his id as author id
        AppData.getCurrentUser(function(current_user){
            $rootScope.current_user = current_user;
        });

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            AppData.reload();
        });

        $rootScope.CKEditorOptions = {
            language: 'en',
            allowedContent: true,
            entities: false,
            toolbarGroups: [
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'justify'] },
                { name: 'styles' },
                { name: 'colors' },
                '/',
                { name: 'links' },
                { name: 'insert' },
                { name: 'tools' },
                { name: 'others' },
                { name: 'document',     groups: [ 'mode', 'document', 'doctools' ] },
                { name: 'editing',     groups: [ 'find', 'selection' ] }
            ]
        };

        //config for marcelgwerder/laravel-api-handler
        AEditConfig.grid_options.additional_request_params._config = "meta-total-count,meta-filter-count,response-envelope";
    }]);