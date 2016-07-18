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

        return $sub_fields->toArray();
    }
    public function show($id)
    {
        return SubFieldValue::find($id)->toArray();
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = SubFieldValue::create($data);

        UserActionLog::saveAction($obj, "create");

        return $obj->toArray();
    }
    public function update(Request $request)
    {
        $data = $request->all();

        $obj = SubFieldValue::find($data['id']);
        $prev_value = $obj->value;
        $is_saved = $obj->update($data);

        if ($is_saved && $prev_value != $obj->value)
            UserActionLog::saveAction($obj, "update");

        return $obj->toArray();
    }
    public function destroy($id)
    {
        $obj = SubFieldValue::find($id);
        $is_destroyed = SubFieldValue::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
