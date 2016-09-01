<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\UserActionLog;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class LogController extends ApiController
{
    public function index()
    {
        return ApiHandler::parseMultiple(UserActionLog::with('logable'), ['id', 'action', 'description'])->getResponse();
    }
    public function show($id)
    {
        return UserActionLog::find($id);
    }
    public function store(Request $request)
    {
        $data = $request->all();

        return UserActionLog::create($data);
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = UserActionLog::find($data['id']);
        $obj->update($data);

        return $obj;
    }
    public function destroy($id)
    {
        $is_destroyed = UserActionLog::destroy($id);

        return $is_destroyed;
    }
}
