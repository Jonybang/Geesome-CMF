<?php

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

Route::get('admin-login/', ['as' => 'admin-login', function () {
    return view('admin.login');
}]);