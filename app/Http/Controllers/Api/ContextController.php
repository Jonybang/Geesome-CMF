<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\Models\Context;
use \App\Models\UserActionLog;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class ContextController extends Controller
{
    public function index(Request $request)
    {
        $data = $request->all();
        unset($data['q']);
        return ApiHandler::parseMultiple(Context::query(), ['id', 'name', 'key', 'role', 'description'], $data)->getResponse();
    }
    public function show($id)
    {
        return Context::find($id);
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = Context::create($data);

        UserActionLog::saveAction($obj, "create");

        return $obj;
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = Context::find($data['id']);
        $is_saved = $obj->update($data);

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj;
    }
    public function destroy($id)
    {
        $obj = Context::find($id);
        $is_destroyed = Context::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
