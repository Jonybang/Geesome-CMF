<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\Template;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class TemplateController extends ApiController
{
    public function index()
    {
        return ApiHandler::parseMultiple(Template::query(), ['key', 'name', 'description'])->getResponse();
    }
    public function show($id)
    {
        $template = Template::find($id);
        $template_data = $template->toArray();
        $template_data['controller_actions_ids'] = $template->controller_actions_ids;
        $template_data['sub_fields_ids'] = $template->sub_fields_ids;

        return $template_data;
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $template = Template::create($data);

        if(isset($data['controller_actions_ids']))
            $template->controller_actions_ids = $data['controller_actions_ids'];

        if(isset($data['sub_fields_ids']))
            $template->sub_fields_ids = $data['sub_fields_ids'];

        if(isset($data['pages_ids']))
            $template->pages_ids = $data['pages_ids'];

        UserActionLog::saveAction($template, "create");

        return $template;
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $template = Template::find($data['id']);
        $is_saved = $template->update($data);

        if(isset($data['controller_actions_ids']))
            $template->controller_actions_ids = $data['controller_actions_ids'];

        if(isset($data['sub_fields_ids']))
            $template->sub_fields_ids = $data['sub_fields_ids'];

        if(isset($data['pages_ids']))
            $template->pages_ids = $data['pages_ids'];

        if($is_saved)
            UserActionLog::saveAction($template, "update");

        return $template;
    }
    public function destroy($id)
    {        
        $obj = Template::find($id);
        $is_destroyed = Template::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
