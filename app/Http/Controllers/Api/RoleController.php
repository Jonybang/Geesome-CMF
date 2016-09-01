<?php

namespace App\Http\Controllers\Api;

use App\Models\Role;
use App\Models\UserActionLog;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class RoleController extends Controller
{
    public function index()
    {
        return ApiHandler::parseMultiple(Role::query(), ['id', 'name', 'display_name', 'description'])->getResponse();
    }
    public function show($id)
    {
        return Role::find($id);
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = Role::create($data);

        UserActionLog::saveAction($obj, "create");

        return $obj;
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = Role::find($data['id']);
        $is_saved = $obj->update($data);

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj;
    }
    public function destroy($id)
    {
        $obj = Role::find($id);
        $is_destroyed = Role::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
