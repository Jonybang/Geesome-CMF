angular.module('app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'AppData', 'Pages', function($scope, $http, AppPaths, AppData, Pages) {
        var self = this;

        self.menuList = [
            {
                heading: 'Dashboard',
                route:   'app.dashboard'
            },
            {
                heading: 'Pages',
                route:   'app.pages'
            },
            {
                heading: 'Dictionary',
                route:   'app.dictionary'
            },
            {
                heading: 'Mail Templates',
                route:   'app.mail_templates'
            },
            {
                heading: 'Settings',
                route:   'app.settings'
            },
            {
                heading: 'Logs',
                route:   'app.logs'
            },
            {
                heading: 'Tags',
                route:   'app.tags'
            },
            {
                heading: 'Templates',
                route:   'app.templates'
            },
            {
                heading: 'SubFields',
                route:   'app.sub_fields'
            },
            {
                heading: 'Users',
                route:   'app.users'
            },
            {
                heading: 'Accounts',
                route:   'app.accounts',
                disable: true
            }
        ];

        self.refreshPagesTree = function(){
            self.pages_tree = Pages.query({tree_mode: true});
        };

        self.refreshPagesTree();

        self.changeParent = function(event, dropped_index, dropped_item, parent){
            if(parent.id == dropped_item.id)
                return;

            dropped_item.parent_page_id = parent.id;
            dropped_item.menu_index = dropped_index;

            Pages.update({ id: dropped_item.id }, dropped_item);

            parent.child_pages_by_index.forEach(function(page, page_index){
                if(page_index >= dropped_index && page.id != dropped_item.id){
                    page.menu_index = page_index + 1;
                    Pages.update({ id: page.id }, page);
                }
            });

            return dropped_item;
        };

        self.activeTab = 'pages-tree';

        self.tabs = [{title:'Pages Tree', name: 'pages-tree'}, {title: 'Database Manage', name:'db-manage'}];
    }]);