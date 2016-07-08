<?php

namespace App\Http\Controllers\Api;

use App\UserActionLog;
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
        $obj =  Tag::create($data);
        UserActionLog::saveAction($obj,"create");
        return Response::json(
            $obj->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = Tag::find($data['id'])->update($data);
        $obj = Tag::find($data['id']);
        if ($is_saved)
            UserActionLog::saveAction($obj,"update");
        return Response::json(
            $obj,
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $obj = Tag::find($id);
        $is_destroyed = Tag::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
