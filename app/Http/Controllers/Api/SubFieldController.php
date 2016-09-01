<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\SubField;
use \App\Models\Template;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class SubFieldController extends ApiController
{
    public function index(Request $request)
    {
        $template_id = $request->input('template_id');
        if($template_id)
            $list = Template::find($template_id)->sub_fields->toArray();
        else
            $list = ApiHandler::parseMultiple(SubField::query(), ['id', 'name', 'key', 'config', 'description', 'default_value'])->getResponse();

        return $list;
    }
    public function show($id)
    {
        $sub_field = SubField::find($id);
        $sub_field_data = $sub_field->toArray();
        $sub_field_data['templates_ids'] = $sub_field->templates_ids;

        return $sub_field_data;
    }
    public function store(Request $request)
    {
        $data = $request->all();

        $sub_field = SubField::create($data);
        if(isset($data['templates_ids']))
            $sub_field->templates_ids = $data['templates_ids'];

        UserActionLog::saveAction($sub_field, "create");

        return $sub_field;
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = SubField::find($data['id']);
        $is_saved = $obj->update($data);

        if(isset($data['templates_ids']))
            $obj->templates_ids = $data['templates_ids'];

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj;
    }
    public function destroy($id)
    {
        $obj = SubField::find($id);
        $is_destroyed = SubField::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
