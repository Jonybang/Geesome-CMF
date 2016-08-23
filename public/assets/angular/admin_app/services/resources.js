var defaultOptions = {
    'update': { method: 'PUT' }
};

//  simple resources
var resources_names = [
    'settings', 'contexts', 'pages', 'templates', 'mail_templates', 'logs', 'users', 'roles', 'tags',
    'sub_fields', 'sub_fields_types', 'sub_fields_values', 'controller_actions', 'translations', 'translations_groups',
    'translations_locales', 'subscribers', 'subscribers_groups', 'sent_mails'
];

resources_names.forEach(function(resource_name){
    var ResourceName = _.upperFirst(_.camelCase(resource_name));
    angular.module('admin_app').factory(ResourceName, ['$resource', function($resource) {
        return $resource('admin/api/' + resource_name + '/:id', { id: '@id' }, defaultOptions);
    }]);
});

// advanced resources
angular.module('admin_app').factory('PagesSEO', ['$resource', function($resource) {
    return $resource('admin/api/pages/:page_id/seo', { id: '@page_id' }, defaultOptions);
}]);
