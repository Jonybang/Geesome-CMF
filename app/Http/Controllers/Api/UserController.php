<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class UserController extends ApiController
{
    public function index()
    {
        return ApiHandler::parseMultiple(User::query(), ['id', 'name', 'email'])->getResponse();
    }
    public function show($id)
    {
        $obj = User::find($id);
        $user_data = $obj->toArray();
        $user_data['roles_ids'] = $obj->roles_ids;
        return $user_data;
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $data['password'] = bcrypt($data['password']);
        $obj = User::create($data);

        if(isset($data['roles_ids']))
            $obj->roles_ids = $data['roles_ids'];

        UserActionLog::saveAction($obj, "create");

        return $obj;
    }
    public function update(Request $request)
    {
        $data = $request->all();

        if(isset($data['password']) && $data['password'])
            $data['password'] = bcrypt($data['password']);

        $obj = User::find($data['id']);

        if(isset($data['roles_ids']))
            $obj->roles_ids = $data['roles_ids'];

        $is_saved = $obj->update($data);

        if($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj;
    }
    public function destroy($id)
    {
        $obj = User::find($id);
        $is_destroyed = User::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
