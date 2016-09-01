<?php

use App\Models\Page;
use App\Models\Setting;
use App\Models\Context;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//========================================================================================================
// CUSTOM ACTIONS
//========================================================================================================

Route::post('/send-message', ['as' => 'send-message', 'uses' => 'ClientController@sendFeedbackMessage']);
Route::post('/subscribe', ['as' => 'subscribe', 'uses' => 'ClientController@subscribe']);

//========================================================================================================
// AUTHENTICATE
//========================================================================================================

Route::post('/login', 'Auth\AuthController@authenticate');
Route::get('/logout', 'Auth\AuthController@logout');

//========================================================================================================
// ADMIN AND API
//========================================================================================================

Route::get('admin-login/', ['as' => 'admin-login', function () {
    return view('admin.login');
}]);

$middleware = array_merge(\Config::get('lfm.middlewares'), ['\Unisharp\Laravelfilemanager\middleware\MultiUser']);
$prefix = \Config::get('lfm.prefix', 'laravel-filemanager');
$as = 'unisharp.lfm.';
$namespace = '\Unisharp\Laravelfilemanager\controllers';
// make sure authenticated
Route::group(compact('middleware', 'prefix', 'as', 'namespace'), function () {
    // Show LFM
    Route::get('/', [
        'uses' => 'LfmController@show',
        'as' => 'show'
    ]);
    // upload
    Route::any('/upload', [
        'uses' => 'UploadController@upload',
        'as' => 'upload'
    ]);
    // list images & files
    Route::get('/jsonitems', [
        'uses' => 'ItemsController@getItems',
        'as' => 'getItems'
    ]);
    // folders
    Route::get('/newfolder', [
        'uses' => 'FolderController@getAddfolder',
        'as' => 'getAddfolder'
    ]);
    Route::get('/deletefolder', [
        'uses' => 'FolderController@getDeletefolder',
        'as' => 'getDeletefolder'
    ]);
    Route::get('/folders', [
        'uses' => 'FolderController@getFolders',
        'as' => 'getFolders'
    ]);
    // crop
    Route::get('/crop', [
        'uses' => 'CropController@getCrop',
        'as' => 'getCrop'
    ]);
    Route::get('/cropimage', [
        'uses' => 'CropController@getCropimage',
        'as' => 'getCropimage'
    ]);
    // rename
    Route::get('/rename', [
        'uses' => 'RenameController@getRename',
        'as' => 'getRename'
    ]);
    // scale/resize
    Route::get('/resize', [
        'uses' => 'ResizeController@getResize',
        'as' => 'getResize'
    ]);
    Route::get('/doresize', [
        'uses' => 'ResizeController@performResize',
        'as' => 'performResize'
    ]);
    // download
    Route::get('/download', [
        'uses' => 'DownloadController@getDownload',
        'as' => 'getDownload'
    ]);
    // delete
    Route::get('/delete', [
        'uses' => 'DeleteController@getDelete',
        'as' => 'getDelete'
    ]);
});

Route::group(['prefix' => 'admin', 'as' => 'admin::', 'middleware' => ['auth', 'role:admin']], function () {
    Route::group(['prefix' => 'api', 'as' => 'api::'], function () {
        //Sub data
        Route::get('/current_user', 'AdminController@current_user');
        Route::get('/site_settings_dictionary', 'AdminController@site_settings_dictionary');

        //Sub actions
        Route::post('/preview_mail', 'AdminController@preview_mail');

        //REST API
        Route::resource('settings', 'Api\SettingController');
        Route::resource('contexts', 'Api\ContextController');
        Route::resource('pages', 'Api\PageController');

        Route::resource('pages/{page_id}/seo', 'Api\PageSEOController');

        Route::resource('templates', 'Api\TemplateController');
        Route::resource('mail_templates', 'Api\MailTemplateController');
        Route::resource('logs', 'Api\LogController');
        Route::resource('users', 'Api\UserController');
        Route::resource('roles', 'Api\RoleController');
        Route::resource('tags', 'Api\TagController');

        Route::resource('sub_fields', 'Api\SubFieldController');
        Route::resource('sub_fields_types', 'Api\SubFieldTypeController');
        Route::resource('sub_fields_values', 'Api\SubFieldValueController');

        Route::resource('controller_actions', 'Api\ControllerActionController');

        Route::resource('dictionaries', 'Api\DictionaryController');
        Route::resource('dictionaries_words', 'Api\DictionaryWordController');

        Route::resource('translations', 'Api\TranslationController');
        Route::get('translations_groups', 'Api\TranslationController@getGroups');
        Route::get('translations_locales', 'Api\TranslationController@getLocales');
        Route::post('import_translations', 'Api\TranslationController@importAll');
        Route::post('export_translations', 'Api\TranslationController@exportAll');

        Route::resource('subscribers', 'Api\SubscriberController');
        Route::resource('subscribers_groups', 'Api\SubscriberGroupController');
        Route::resource('sent_mails', 'Api\SentMailController');
    });

    Route::get('/', function () {
        return view('admin.index');
    });

    //For angular HTML5 routes
    Route::get('{any}', function ($any) {
        return view('admin.index');
    })->where('any', '.*');
});

//========================================================================================================
// CMS CORE - RENDER PAGE AND SET DATA FOR TEMPLATE
//========================================================================================================

Route::group(['prefix' => LaravelLocalization::setLocale()], function(){
    Route::any('{all?}', function ($url_query = null) {

        $current_context = Context::getByLocale(LaravelLocalization::getCurrentLocale());

        Session::put('current_context_id', $current_context->id);
        Session::put('last_locale', LaravelLocalization::getCurrentLocale());

        $page = null;
        //find page by url or get main page from current context
        if($url_query && $url_query != '/'){
            $page = $current_context->pages()->where('alias', $url_query)->first();

            // uri_1/uri_2/uri_3/.../uri_n => ['uri_1','uri_2','uri_3', ... , 'uri_n']
            $url_query_array = explode('/', $url_query);

            if(!$page && count($url_query_array) > 1){

                function whereParent(&$pages_query, $url_query_array, $index)
                {
                    if ($index < 0)
                        return null;
                    //where page.parent.alias == 'uri_(n-1)'
                    return $pages_query->whereHas('parent_page', function ($query) use ($url_query_array, $index) {
                        $url_part = $url_query_array[$index];
                        $query->where('alias', '=', $url_part);
                        whereParent($query, $url_query_array, $index - 1);
                    })->first();
                }

                $index = count($url_query_array) - 1;
                //where page.alias == 'uri_n'
                $pages_query = $current_context->pages()->where('alias', '=', $url_query_array[$index]);
                //if not exist try to get 'uri_(n-1)'
                if($pages_query->count() == 0){
                    $index -= 1;
                    $pages_query = $current_context->pages()->where('alias', '=', $url_query_array[$index])->where('is_allow_nested_alias', true);
                }
                //if no parent uri - just get page
                if($index == 0)
                    $page = $pages_query->first();
                //if still not exist - page not found
                else if($pages_query->count())
                    $page = whereParent($pages_query, $url_query_array, $index - 1);
            }
        } else {
            $main_page_id = $current_context->settings()->where('key', 'main_page')->first()->value;
            $page = Page::find($main_page_id);
        }

        if($page && $page->context_id != $current_context->id){
            $page = $page->getPageByTranslation(LaravelLocalization::getCurrentLocale());
        }

        //if page exist and published get all page data, else return 404 template
        $sub_fields = [];
        $settings = [];
        $page_data = [];
        if($page && $page->is_published && !$page->is_deleted){
            //Get path to laravel template from resources/views/templates folder
            $path = $page->template->key;
            //Get name/value dictionary sub fieds of current page
            $sub_fields = $page->sub_fields_values;

            //execute controller actions on page template and get data from they
            foreach($page->template->controller_actions as $controller_action){
                $result = \App::call('App\\Http\\Controllers\\' . $controller_action->key, [
                    'page' => $page,
                    'url_query' => $url_query,
                    'last_alias' => $url_query_array ? $url_query_array[count($url_query_array) - 1] : null
                ]);

                if($result instanceof \Illuminate\Http\JsonResponse)
                    $result_data = (array)$result->getData();
                else
                    $result_data = $result;

                //if action return data for render another template - set this template
                if(isset($result_data['render_template']))
                    $path = $result_data['render_template'];

                $page_data = array_merge($page_data, $result_data);
            }
        } else {
            $path = '404';
        }

        //get menu items
        $page_data['menu_items'] = $current_context->pages()->where([
            'is_menu_hide' => false,
            'is_published' => true,
            'is_deleted' => false,
            'parent_page_id' => null
        ])->orderBy('menu_index', 'ASC')->with('child_pages')->get();

        //get general settings and add or rewrite by settings in current context
        $general_settings = \DB::table('settings')->whereNull('context_id')->lists('value', 'key');
        $context_settings = $current_context->settings_values;
        $settings = $context_settings ? array_merge($general_settings, $context_settings) : $general_settings;
        //dd($general_settings);
        //get language contexts
        $lang_contexts = Context::where('role', 'lang')->get();

        //sf - sub fields and st -settings dictionaries for alternative to take sub_fields in page if a conflict of variables naming
        $page_data = array_merge($page_data, ['page' => $page, 'sf' => $sub_fields, 'st' => $settings, 'lang_contexts' => $lang_contexts], $sub_fields, $settings);
        return view('templates.' . $path, $page_data);
    })->where('all', '.*');
});
