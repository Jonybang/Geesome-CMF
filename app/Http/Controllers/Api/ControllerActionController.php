<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\Template;
use \App\Models\ControllerAction;
use \App\Models\UserActionLog;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ControllerActionController extends Controller
{
    public function index(Request $request)
    {
        $template_id = $request->input('template_id');
        if($template_id)
            $list = Template::find($template_id)->controller_actions;
        else
            $list = ControllerAction::all();

        return Response::json(
            $list->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            ControllerAction::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj=ControllerAction::create($data);
        UserActionLog::saveAction($obj,"create");
        return Response::json(
            $obj->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = ControllerAction::find($data['id']);
        $is_saved = $obj->update($data);
        if ($is_saved)
            UserActionLog::saveAction($obj,"update");
        return Response::json(
            ControllerAction::find($data['id']),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $obj = ControllerAction::find($id);
        $is_destroyed = ControllerAction::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
