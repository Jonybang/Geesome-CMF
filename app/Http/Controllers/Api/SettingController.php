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

        return Response::json(
            Setting::find($data['id'])->update($data)->toArray(),
            200
        );
    }
}
