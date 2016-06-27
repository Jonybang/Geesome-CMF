<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\ControllerAction;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ControllerActionController extends Controller
{
    public function index(Request $request)
    {
        $template_id = $request->input('template_id');
        if($template_id)
            $list = \App\Template::find($template_id)->controller_actions;
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

        return Response::json(
            ControllerAction::create($data)->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = ControllerAction::find($data['id'])->update($data);

        return Response::json(
            ControllerAction::find($data['id']),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = ControllerAction::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
