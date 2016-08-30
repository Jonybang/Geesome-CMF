angular
	.module('admin_app')
	.directive('sfTexteditor', ['$timeout', 'AppPaths', 'ServerData', function($timeout, AppPaths, ServerData) {
		return {
			restrict: 'E',
			templateUrl: AppPaths.directives + 'sf_texteditor/sf_texteditor.html',
			scope: {
				/* SubFieldValues resource */
				ngModel: '=',
				pageResource: '=?',
				templateResource: '=?',
				isEdit: '=?'
			},
			link: function (scope, element) {
				ServerData.getSiteSettings(function(site_settings){
					scope.site_settings = site_settings;
				});

				scope.CKEditorOptions = {
					language: 'en',
					allowedContent: true,
					entities: false,
					toolbarGroups: [
						{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
						{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'justify'] },
						{ name: 'styles' },
						{ name: 'colors' },
						'/',
						{ name: 'links' },
						{ name: 'insert' },
						{ name: 'tools' },
						{ name: 'others' },
						{ name: 'document',     groups: [ 'mode', 'document', 'doctools' ] },
						{ name: 'editing',     groups: [ 'find', 'selection' ] }
					]
				};
			}
		};
	}]);