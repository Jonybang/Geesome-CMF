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

app.factory('Posts', ['$resource', function($resource) {
    return $resource('admin/api/posts/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('PostsStatuses', ['$resource', function($resource) {
    return $resource('admin/api/posts_statuses/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('PagesSEO', ['$resource', function($resource) {
    return $resource('admin/api/pages/:page_id/seo', { id: '@page_id' }, defaultOptions);
}]);

app.factory('Templates', ['$resource', function($resource) {
    return $resource('admin/api/templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('MailTemplates', ['$resource', function($resource) {
    return $resource('admin/api/mail_templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Logs', ['$resource', function($resource) {
    return $resource('admin/api/logs/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Users', ['$resource', function($resource) {
    return $resource('admin/api/users/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Tags', ['$resource', function($resource) {
    return $resource('admin/api/tags/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Templates', ['$resource', function($resource) {
    return $resource('admin/api/templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('SubFieldsTypes', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields_types/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubFieldsValues', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields_values/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubFields', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('ControllerActions', ['$resource', function($resource) {
    return $resource('admin/api/controller_actions/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Dictionaries', ['$resource', function($resource) {
    return $resource('admin/api/dictionaries/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('DictionariesWords', ['$resource', function($resource) {
    return $resource('admin/api/dictionaries_words/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Subscribers', ['$resource', function($resource) {
    return $resource('admin/api/subscribers/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubscribersGroups', ['$resource', function($resource) {
    return $resource('admin/api/subscribers_groups/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('SentMails', ['$resource', function($resource) {
    return $resource('admin/api/sent_mails/:id', { id: '@id' }, defaultOptions);
}]);