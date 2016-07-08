<?php

namespace App\Http\Controllers\Api;

use App\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class UserController extends ApiController
{
    public function index()
    {
        $data = [];
        foreach(User::all() as $log){
            $log_data = $log->toArray();
            $log_data['logable_name'] = $log->logable ? $log->logable->name : '';
            $data[] = $log_data;
        }
        return Response::json(
            $data,
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            User::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $data['password'] = bcrypt($data['password']);
        $obj = User::create($data);
        UserActionLog::saveAction($obj,"create");
        return Response::json(
            $obj->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        if(isset($data['password']) && $data['password'])
            $data['password'] = bcrypt($data['password']);
        $is_saved = User::find($data['id'])->update($data);
        $obj = User::find($data['id']);
        UserActionLog::saveAction($obj,"update");
        return Response::json(
            $obj,
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $obj = User::find($id);
        $is_destroyed = User::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
