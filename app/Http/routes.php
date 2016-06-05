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

Route::group(['prefix' => 'admin', 'as' => 'admin::', 'middleware' => 'auth'], function () {
    Route::get('/', ['as' => 'dashboard', 'AdminController@index']);
});


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
