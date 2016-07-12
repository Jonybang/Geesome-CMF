<?php

namespace App\Http\Controllers\Api;

use App\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Subscriber;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SubscriberController extends Controller
{
    public function index()
    {
        return Response::json(
            Subscriber::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            Subscriber::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = Subscriber::create($data);

        if(isset($data['groups_ids'])){
            $obj->groups_ids = $data['groups_ids'];
            $obj->save();
        }

        UserActionLog::saveAction($obj,"create");
        return Response::json(
            $obj->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = Subscriber::find($data['id'])->update($data);
        $obj =  Subscriber::find($data['id']);

        if(isset($data['groups_ids'])){
            $obj->groups_ids = $data['groups_ids'];
            $obj->save();
        }

        if ($is_saved)
            UserActionLog::saveAction($obj,"update");
        return Response::json(
            $obj,
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $obj = Subscriber::find($id);
        $is_destroyed = Subscriber::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
