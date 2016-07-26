<?php

use App\Models\Page;
use App\Models\Setting;

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
        Route::get('/cur_user', 'AdminController@cur_user');
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

Route::get('/{alias?}/{sub_alias?}', function ($alias = null, $sub_alias = null) {
    $page = null;
    //find by alias or get main page
    if($alias)
        $page = Page::where('alias', $alias)->orWhere('id', $alias)->first();
    else{
        $main_page_id = Setting::where('key', 'main_page')->first()->value;
        $page = Page::find($main_page_id)->first();
    }

    //if page exist and published get all page data, else return 404 template
    $sub_fields = [];
    $settings = [];
    $page_data = [];
    if($page && $page->is_published){
        $path = $page->template->key;

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
    $page_data['menu_items'] = Page::where([
        'is_menu_hide' => false,
        'is_published' => true,
        'is_deleted' => false,
        'parent_page_id' => null
    ])->with('child_pages')->get();

    //get general settings and add or rewrite by settings in page context
    $general_settings = \DB::table('settings')->whereNull('context_id')->orWhere('context_id', 0)->lists('value', 'key');
    $context_settings = [];
    if($page)
        $context_settings = $page->context->settings_values;
    $settings = $context_settings ? array_merge($general_settings, $context_settings) : $general_settings;

    //auth users logic
    if(isset($settings['need_auth']) && $settings['need_auth']){
        if(!\Auth::user())
            return redirect('login');
    }

    //sf -sub fields and st -settings dictionaries for alternative to take sub_fields in page if a conflict of variables naming
    $page_data = array_merge($page_data, ['page' => $page, 'sf' => $sub_fields, 'st' => $settings], $sub_fields, $settings);
    return view('templates.' . $path, $page_data);
});