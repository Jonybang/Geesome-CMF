var app = angular.module('app');

var defaultOptions = {
    'update': { method:'PUT' }
};

app.factory('Settings', ['$resource', function($resource) {
    return $resource('/settings/:id', null, defaultOptions);
}]);