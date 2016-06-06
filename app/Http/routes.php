<?php

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

Route::get('/login', ['as' => 'login', function(){
    return view('admin.login');
}]);

Route::post('/login', 'Auth\AuthController@authenticate');

Route::get('/logout', 'Auth\AuthController@logout');

Route::group(['prefix' => 'admin', 'as' => 'admin::', 'middleware' => 'auth'], function () {
    Route::group(['prefix' => 'api', 'as' => 'api::'], function () {
        Route::resource('settings', 'Api\SettingController');
    });


    Route::get('/', function () {
        return view('admin.index');
    });

    Route::get('{any}', function ($any) {
        return view('admin.index');
    })->where('any', '.*');

    #Route::get('/', ['as' => 'dashboard', 'uses' => 'AdminController@index']);
});

//Route::get('{page}/{subs}', ['middleware' => 'auth', function($uri) {
//    return view('admin.index');
//}])->where(['page' => '^((?!admin).)*$', 'subs' => '.*']);

Route::get('/{alias?}', function ($alias = null) {
    $page = null;
    if($alias)
        $page = \App\Page::where('alias', $alias)->orWhere('id', $alias)->first();
    else{
        $main_page_id = \App\Setting::where('name', 'main_page')->first()->value;
        $page = \App\Page::find($main_page_id)->first();
    }

    $path = $page ? $page->template->path : '404';

    $sub_fields = [];
    if($page){
        $sub_fields = $page->sub_fields_values;
    }

    return view('templates.' . $path, ['page' => $page, 'sub_fields' => $sub_fields]);
});
