var app = angular.module('app');

var defaultOptions = {
    'update': { method: 'PUT' }
};

app.factory('Settings', ['$resource', function($resource) {
    return $resource('admin/api/settings/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Pages', ['$resource', function($resource) {
    return $resource('admin/api/pages/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Templates', ['$resource', function($resource) {
    return $resource('admin/api/templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Logs', ['$resource', function($resource) {
    return $resource('admin/api/logs/:id', { id: '@id' }, defaultOptions);
}]);