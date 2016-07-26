angular.module('app')
    .controller('PostFormController', ['$scope', '$state', '$http', '$uibModal', 'Upload', 'AppPaths', 'AppData', 'Posts', 'PostsStatuses', 'Users', 'Tags',
        function($scope, $state, $http, $uibModal, Upload, AppPaths, AppData, Posts, PostsStatuses, Users, Tags) {
        var defaultPost = new Posts();

        if($state.params.postId){
            $scope.post = Posts.get({id: $state.params.postId});
            $scope.post.id = $state.params.postId;
        } else {
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
            defaultPost.is_queue = $scope.site_settings.default_post_queue == 1;
            defaultPost.is_published = !defaultPost.is_queue;
            if(!$state.params.postId)
                angular.extend($scope.post, defaultPost);
        }
        if(AppData.site_settings.$promise)
            AppData.site_settings.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        var old_alias = '';
        $scope.$watch('post.title', function(title){
            if(!title)
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
                    '&text=' + title +
                    '&lang=en')
                    .then(function(result){
                        changeAlias(result.data.text[0].replace(/\s+/g, '-').toLowerCase());
                    });
            } else {
                changeAlias(title.replace(/\s+/g, '-').toLowerCase());
            }
        });

        //Models for select inputs
        $scope.models = {
            posts: Posts,
            users: Users,
            tags: Tags,
            posts_statuses: PostsStatuses
        };
        //Fields for adder functional at select inputs
        $scope.fields = {
            tags: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'copyrights',
                    label: 'Copyrights',
                    type: 'textarea'
                },
                {
                    name: 'parent_tag_id',
                    label: 'Parent tag',
                    type: 'select',
                    resource: Tags,
                    list: 'tags'
                }
            ],
            posts_statuses: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'key',
                    label: 'Key'
                }
            ]
        };

        $scope.images = [];

        $scope.savePost = function(){
            $scope.post.images_urls = [];
            var imagesFiles = [];

            $scope.images.forEach(function(image, index){
                if(image.chosen_mode == 'upload')
                    imagesFiles.push({index: index, file: image.uploadFile});
                else if(image.chosen_mode == 'paste-link')
                    $scope.post.images_urls.push({index: index, url: image.imageUri});
            });
            //If post is new - Create, if it not - Update
            var is_new = $scope.post.id ? false : true;

            var post_query;
            if(is_new)
                post_query = $scope.post.$save();
            else
                post_query = $scope.post.$update();

            post_query.then(function(result_post){
                imagesFiles.forEach(function(image){
                    Upload.upload({
                        url: 'admin/api/posts/' + result_post.id + '/upload_images',
                        data: {file: image.file, index: image.index}
                    });
                });

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