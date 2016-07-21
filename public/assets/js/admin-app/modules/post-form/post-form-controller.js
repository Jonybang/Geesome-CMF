angular.module('app')
    .controller('PostFormController', ['$scope', '$state', '$http', '$uibModal', 'AppPaths', 'AppData', 'Posts', 'Users', 'Tags',
        function($scope, $state, $http, $uibModal, AppPaths, AppData, Posts, Users, Tags) {
        var defaultPost = new Posts();

        if($state.params.postId){
            $scope.post = Posts.get({id: $state.params.postId});
            $scope.post.id = $state.params.postId;
        } else {
            defaultPost.is_resolved_nsfw = true;
            defaultPost.is_queue = true;
            defaultPost.is_resolved_tags = true;
            defaultPost.tags_ids = [];

            $scope.post = angular.copy(defaultPost);
        }

        //Get current user and set his id as author id
        function setCurUserAuthorId(){
            defaultPost.author_id = AppData.cur_user.id;
            angular.extend($scope.post, defaultPost);
        }
        if(AppData.cur_user.$promise)
            AppData.cur_user.$promise.then(setCurUserAuthorId);
        else
            setCurUserAuthorId();

        $scope.site_settings = {};
        //Get site settings and set default values to post object
        function setDefaultSettings(){
            $scope.site_settings = AppData.site_settings;
        }
        if(AppData.site_settings.$promise)
            AppData.site_settings.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        var old_alias = '';
        $scope.$watch('post.content', function(content){
            if(!content)
                return;

            function changeAlias(new_alias){
                //Change alias if its empty or if it not touched by manual
                if((!old_alias && $scope.post.alias) || (old_alias && $scope.post.alias != old_alias))
                    return;

                $scope.post.alias = new_alias;
                old_alias = $scope.post.alias;
            }

            //Translate title to english and paste to alias field if defined yandex_translate_api_key site setting
            //if not: just insert replace spaces to dashes and get lowercase title for set alias
            if(title && $scope.site_settings.yandex_translate_api_key){
                $http.get(
                    'https://translate.yandex.net/api/v1.5/tr.json/translate' +
                    '?key=' + $scope.site_settings.yandex_translate_api_key +
                    '&text=' + content +
                    '&lang=en')
                    .then(function(result){
                        changeAlias(result.data.text[0].replace(/\s+/g, '-').toLowerCase());
                    });
            } else {
                changeAlias(content.replace(/\s+/g, '-').toLowerCase());
            }
        });

        //Models for select inputs
        $scope.models = {
            posts: Posts,
            users: Users,
            tags: Tags
        };
        //Fields for adder functional at select inputs
        $scope.fields = {
            tags: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea'
                },
                {
                    name: 'copyrights',
                    label: 'Copyrights',
                    type: 'textarea'
                }
            ]
        };

        $scope.savePosts = function(){
            //If post is new - Create, if it not - Update
            var is_new = $scope.post.id ? false : true;

            var post_query;
            if(is_new)
                post_query = $scope.post.$save();
            else
                post_query = $scope.post.$update();

            post_query.then(function(result_post){
                if(is_new)
                    $scope.post = angular.copy(defaultPost);
                else
                    $scope.post = result_post;

                $scope.alert = 'Post saved!';
            })
        };

        $scope.closeAlert = function(){
            $scope.alert = ''
        };
    }]);