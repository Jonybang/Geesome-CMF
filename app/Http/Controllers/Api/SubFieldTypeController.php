<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\SubFieldType;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class SubFieldTypeController extends ApiController
{
    public function index()
    {
        return ApiHandler::parseMultiple(SubFieldType::query(), ['id', 'name', 'key', 'directive'])->getResponse();
    }
    public function show($id)
    {
        return SubFieldType::find($id);
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj =  SubFieldType::create($data);

        UserActionLog::saveAction($obj, "create");

        return $obj;
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = SubFieldType::find($data['id']);
        $is_saved = $obj->update($data);

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj;
    }
    public function destroy($id)
    {
        $obj = SubFieldType::find($id);
        $is_destroyed = SubFieldType::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
