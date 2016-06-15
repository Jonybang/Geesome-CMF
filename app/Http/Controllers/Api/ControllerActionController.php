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
    public function index()
    {
        return Response::json(
            ControllerAction::all()->toArray(),
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
