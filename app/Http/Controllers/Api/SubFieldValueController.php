<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\SubFieldValue;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SubFieldValueController extends Controller
{
    public function index(Request $request)
    {
        $data = $request->all();
        if(isset($data['sub_field_id']) && isset($data['page_id']))
            $sub_fields = SubFieldValue::where('sub_field_id', $data['sub_field_id'])->where('page_id', $data['page_id'])->get();
        else
            $sub_fields = SubFieldValue::all();

        return Response::json(
            $sub_fields->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            SubFieldValue::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj =  SubFieldValue::create($data);
        UserActionLog::saveAction($obj,"create");
        return Response::json(
            $obj->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();

        $obj = SubFieldValue::find($data['id']);
        $prev_value = $obj->value;
        $is_saved = $obj->update($data);

        if ($is_saved && $prev_value != $obj->value)
            UserActionLog::saveAction($obj, "update");

        return Response::json(
            $obj,
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $obj = SubFieldValue::find($id);
        $is_destroyed = SubFieldValue::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
