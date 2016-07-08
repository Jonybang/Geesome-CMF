<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\SubFieldType;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SubFieldTypeController extends Controller
{
    public function index()
    {
        return Response::json(
            SubFieldType::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            SubFieldType::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj =  SubFieldType::create($data);
        UserActionLog::saveAction($obj,"create");
        return Response::json(
           $obj->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = SubFieldType::find($data['id'])->update($data);
        $obj = SubFieldType::find($data['id']);
        if ($is_saved)
            UserActionLog::saveAction($obj,"update");
        return Response::json(
            $obj,
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $obj = SubFieldType::find($id);
        $is_destroyed = SubFieldType::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
