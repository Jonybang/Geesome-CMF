angular.module('admin_app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'ServerData', 'Contexts', 'Pages', 'DatabaseConfig', function($scope, $http, AppPaths, ServerData, Contexts, Pages, DatabaseConfig) {
        var self = this;

        self.tabs = [
            {title:'Pages Tree', name: 'pages-tree'},
            {title: 'Database Manage', name:'db-manage'}
        ];

        self.activeTab = 'pages-tree';

        self.databaseMenu = DatabaseConfig.menu;

        self.refreshPagesTree = function(){
            self.contexts = Contexts.query({_with: 'pages_tree'});
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
    }]);