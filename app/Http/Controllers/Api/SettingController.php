<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\Setting;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SettingController extends ApiController
{
    public function index()
    {
        return Response::json(
            Setting::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            Setting::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();

        return Response::json(
            Setting::create($data)->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = Setting::find($data['id'])->update($data);

        return Response::json(
            Setting::find($data['id']),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = Setting::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
