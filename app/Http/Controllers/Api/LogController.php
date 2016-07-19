<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\UserActionLog;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class LogController extends ApiController
{
    public function index()
    {
        $data = [];
        foreach(UserActionLog::all() as $log){
            $log_data = $log->toArray();
            $log_data['logable_name'] = $log->logable ? $log->logable->name : '';
            $data[] = $log_data;
        }
        return $data;
    }
    public function show($id)
    {
        return UserActionLog::find($id)->toArray();
    }
    public function store(Request $request)
    {
        $data = $request->all();

        return UserActionLog::create($data)->toArray();
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
