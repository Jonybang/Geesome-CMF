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

        return $list->toArray();
    }
    public function show($id)
    {
        return ControllerAction::find($id)->toArray();
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj=ControllerAction::create($data);

        UserActionLog::saveAction($obj, "create");

        return $obj->toArray();
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = ControllerAction::find($data['id']);
        $is_saved = $obj->update($data);

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj->toArray();
    }
    public function destroy($id)
    {
        $obj = ControllerAction::find($id);
        $is_destroyed = ControllerAction::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
