<?php


//========================================================================================================
// ADMIN AND API
//========================================================================================================

Route::group(['prefix' => 'api', 'as' => 'api::'], function () {
    //Sub data
    Route::get('/current_user', 'AdminController@current_user');
    Route::get('/site_settings_dictionary', 'AdminController@site_settings_dictionary');
    Route::get('translations_groups', 'Api\TranslationController@getGroups');
    Route::get('translations_locales', 'Api\TranslationController@getLocales');

    //Sub actions
    Route::post('/preview_mail', 'AdminController@preview_mail');
    Route::post('import_translations', 'Api\TranslationController@importAll');
    Route::post('export_translations', 'Api\TranslationController@exportAll');

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