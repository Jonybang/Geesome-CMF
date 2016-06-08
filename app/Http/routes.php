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

Route::get('/test', ['as' => 'test', function(){
    return dd(\App::call('App\Http\Controllers\Api\ApiController@test', ['test'=>\Auth::user()])->getData());
}]);


Route::get('/login', ['as' => 'login', function(){
    return view('admin.login');
}]);

Route::post('/login', 'Auth\AuthController@authenticate');

Route::get('/logout', 'Auth\AuthController@logout');

Route::group(['prefix' => 'admin', 'as' => 'admin::', 'middleware' => 'auth'], function () {
    Route::group(['prefix' => 'api', 'as' => 'api::'], function () {
        Route::get('/cur_user', 'Api\ApiController@cur_user');

        Route::resource('settings', 'Api\SettingController');
        Route::resource('pages', 'Api\PageController');
        Route::resource('templates', 'Api\TemplateController');
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

    $sub_fields = [];
    $page_data = [];
    if($page){
        $path = $page->template->path;

        $sub_fields = $page->sub_fields_values;

        foreach($page->template->controller_actions as $controller_action){
            $result = \App::call("App\\Http\\Controllers\\" . $controller_action, ['page' => $page]);

            if($result instanceof \Illuminate\Http\JsonResponse)
                $result_data = $result->getData();
            else
                $result_data = $result['data'];

            $page_data = array_merge($page_data, $result_data);
        }
    } else {
        $path = '404';
    }

    $page_data = array_merge($page_data, ['page' => $page, 'sub_fields' => $sub_fields]);
    return view('templates.' . $path, $page_data);
});
