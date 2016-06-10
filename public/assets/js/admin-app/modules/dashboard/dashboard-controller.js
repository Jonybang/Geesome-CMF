angular.module('app')
    .controller('DashboardController', ['$scope', 'Pages', 'Templates', 'Users', function($scope, Pages, Templates, Users) {
        $scope.page = new Pages();
        $scope.models = {
            pages : Pages,
            templates: Templates,
            users: Users
        };
        $scope.templatesFields = [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'path',
                label: 'Path'
            }
        ];

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