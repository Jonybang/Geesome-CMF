angular.module('app')
    .controller('PagesController', ['$scope', 'Pages', 'Templates', function($scope, Pages, Templates) {
        $scope.pages = Pages.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            model: Pages,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'title',
                    modal: 'self',
                    label: 'Title',
                    new_placeholder: 'New page',
                    required: true
                },
                {
                    name: 'alias',
                    label: 'Alias'
                },
                {
                    name: 'sub_title',
                    label: 'SubTitle'
                },
                {
                    name: 'parent_page_id',
                    label: 'Parent page',
                    type: 'select',
                    list: 'self'
                },
                {
                    name: 'template_id',
                    label: 'Template',
                    type: 'select',
                    model: Templates,
                    list: 'templates'
                },
                {
                    name: 'menu_title',
                    label: 'MenuTitle',
                    table_hide: true
                },
                {
                    name: 'menu_index',
                    label: 'Menu Index',
                    table_hide: true
                },
                {
                    name: 'description',
                    label: 'Description',
                    table_hide: true
                },
                {
                    name: 'is_abstract',
                    label: 'Is abstract page',
                    table_hide: true
                },
                {
                    name: 'is_menu_hide',
                    label: 'Is hide from menu',
                    table_hide: true
                },
                {
                    name: 'content',
                    label: 'Content',
                    type: 'textarea',
                    table_hide: true
                }
            ]
        };
    }]);