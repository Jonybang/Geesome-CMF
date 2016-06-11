<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\Tag;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class TagController extends ApiController
{
    public function index()
    {
        return Response::json(
            Tag::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            Tag::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();

        return Response::json(
            Tag::create($data)->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = Tag::find($data['id'])->update($data);

        return Response::json(
            Tag::find($data['id']),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = Tag::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
