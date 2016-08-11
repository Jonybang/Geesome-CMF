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

Route::group(['prefix' => 'admin', 'as' => 'admin::', 'middleware' => ['auth', 'role:admin']], function () {
    Route::group(['prefix' => 'api', 'as' => 'api::'], function () {
        //Sub data
        Route::get('/current_user', 'AdminController@current_user');
        Route::get('/site_settings_dictionary', 'AdminController@site_settings_dictionary');

        //Sub actions
        Route::post('/preview_mail', 'AdminController@preview_mail');

        //REST API
        Route::resource('settings', 'Api\SettingController');
        Route::resource('pages', 'Api\PageController');

        Route::resource('pages/{page_id}/seo', 'Api\PageSEOController');

        Route::resource('templates', 'Api\TemplateController');
        Route::resource('mail_templates', 'Api\MailTemplateController');
        Route::resource('logs', 'Api\LogController');
        Route::resource('users', 'Api\UserController');
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
    Route::get('/{alias?}/{sub_alias?}', function ($alias = null, $sub_alias = null) {

        function getContextByLocale(){
            $context = Context::whereHas('settings', function($query){
                //get context, where setting has current locale
                $query->where([
                    'key' => 'locale',
                    'value' => LaravelLocalization::getCurrentLocale()
                ]);
            })->first();

            return $context ? $context : Context::first();
        }

        //Get current context by id or by current locale
        if(session('current_context_id') && session('last_locale') == LaravelLocalization::getCurrentLocale())
            $current_context = Context::find(session('current_context_id'));
        else
            $current_context = getContextByLocale();


        Session::put('current_context_id', $current_context->id);
        Session::put('last_locale', LaravelLocalization::getCurrentLocale());

        $page = null;
        //find page by alias or get main page from current context
        if($alias)
            $page = $current_context->pages()->where('alias', 'like', $alias . '%')->orWhere('id', $alias)->first();
        else{
            $main_page_id = $current_context->settings()->where('key', 'main_page')->first()->value;
            $page = Page::find($main_page_id);
        }

        //if page exist and published get all page data, else return 404 template
        $sub_fields = [];
        $settings = [];
        $page_data = [];
        if($page && $page->is_published){
            //Get path to laravel template from resources/views/templates folder
            $path = $page->template->key;
            //Get name/value dictionary sub fieds of current page
            $sub_fields = $page->sub_fields_values;

            //execute controller actions on page template and get data from they
            foreach($page->template->controller_actions as $controller_action){
                $result = \App::call('App\\Http\\Controllers\\' . $controller_action->key, [
                    'page' => $page,
                    'sub_alias' => $sub_alias
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
    });
});
