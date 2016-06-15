<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\SubFieldValue;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SubFieldValueController extends Controller
{
    public function index()
    {
        return Response::json(
            SubFieldValue::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            SubFieldValue::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();

        return Response::json(
            SubFieldValue::create($data)->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = SubFieldValue::find($data['id'])->update($data);

        return Response::json(
            SubFieldValue::find($data['id']),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = SubFieldValue::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
