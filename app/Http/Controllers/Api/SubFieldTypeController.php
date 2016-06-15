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

        return Response::json(
            SubFieldType::create($data)->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = SubFieldType::find($data['id'])->update($data);

        return Response::json(
            SubFieldType::find($data['id']),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = SubFieldType::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
