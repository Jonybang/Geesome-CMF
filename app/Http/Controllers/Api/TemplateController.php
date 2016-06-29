<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\Template;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class TemplateController extends Controller
{
    public function index()
    {
        return Response::json(
            Template::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        $template = Template::find($id);
        $template_data = $template->toArray();
        $template_data['controller_actions_ids'] = $template->controller_actions_ids;
        $template_data['sub_fields_ids'] = $template->sub_fields_ids;

        return Response::json(
            $template_data,
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $template = Template::create($data);

        if(isset($data['controller_actions_ids'])){
            $template->controller_actions_ids = $data['controller_actions_ids'];
            $template->save();
        }
        if(isset($data['sub_fields_ids'])){
            $template->sub_fields_ids = $data['sub_fields_ids'];
            $template->save();
        }
        if(isset($data['pages_ids'])){
            $template->pages_ids = $data['pages_ids'];
            $template->save();
        }

        return Response::json(
            $template->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $template = Template::find($data['id']);
        $is_saved = $template->update($data);


        if(isset($data['controller_actions_ids'])){
            $template->controller_actions_ids = $data['controller_actions_ids'];
            $template->save();
        }
        if(isset($data['sub_fields_ids'])){
            $template->sub_fields_ids = $data['sub_fields_ids'];
            $template->save();
        }
        if(isset($data['pages_ids'])){
            $template->pages_ids = $data['pages_ids'];
            $template->save();
        }

        return Response::json(
            $template->toArray(),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = Template::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
