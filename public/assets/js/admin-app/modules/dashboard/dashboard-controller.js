angular.module('app')
    .controller('DashboardController', ['$scope', '$http', 'AppData', 'Pages', 'Templates', 'Users', function($scope, $http, AppData, Pages, Templates, Users) {
        $scope.page = new Pages();
        $scope.page.is_menu_hide = true;

        //Get current user and set his id as author id
        function setCurUserAuthorId(){
            $scope.page.author_id =  AppData.cur_user.id;
        }
        if(AppData.cur_user.$promise)
            AppData.cur_user.$promise.then(setCurUserAuthorId);
        else
            setCurUserAuthorId();

        var site_settings = {};
        //Get site settings and set default values to page object
        function setDefaultSettings(){
            site_settings = AppData.site_settings;
            $scope.page.template_id =  site_settings.default_template_id;
        }
        if(AppData.site_settings.$promise)
            AppData.site_settings.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        //Translate title to english and paste to alias field if defined yandex_translate_api_key site setting
        //if not: just insert replace spaces to dashes and get lowercase title for set alias
        var last_translate = '';
        $scope.$watch('page.title', function(title){
            if(!title)
                return;

            if((!$scope.page.alias || $scope.page.alias == last_translate) && site_settings.yandex_translate_api_key){
                $http.get(
                    'https://translate.yandex.net/api/v1.5/tr.json/translate' +
                    '?key=' + site_settings.yandex_translate_api_key +
                    '&text=' + title +
                    '&lang=en')
                    .then(function(result){
                        last_translate = result.data.text[0].replace(/\s+/g, '-').toLowerCase();
                        $scope.page.alias = last_translate;
                    });
            } else {
                $scope.page.alias = title.replace(/\s+/g, '-').toLowerCase();
            }
        });

        //Models for select inputs
        $scope.models = {
            templates: Templates,
            pages : Pages,
            users: Users
        };
        //Fields for adder functional at select inputs
        $scope.fields = {
            templates: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'path',
                    label: 'Path'
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
            ],
            users: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'email',
                    label: 'Email'
                },
                {
                    name: 'password',
                    label: 'Password',
                    type: 'password'
                }
            ]
        };

        //Validate for require and save page
        $scope.savePage = function(){
            $scope.hasErrors = {};
            var required = ['title', 'template_id'];
            required.forEach(function(reqField){
                if(!$scope.page[reqField])
                    $scope.hasErrors[reqField] = true;
                else
                    delete $scope.hasErrors[reqField];
            });

            if(!_.isEmpty($scope.hasErrors))
                return;

            $scope.page.$save().then(function(){
                $scope.page = {};
            })
        }
    }]);