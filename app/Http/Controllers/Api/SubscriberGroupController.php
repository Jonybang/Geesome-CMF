<?php

namespace App\Http\Controllers\Api;

use App\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\SubscriberGroup;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SubscriberGroupController extends Controller
{
    public function index()
    {
        return Response::json(
            SubscriberGroup::all()->toArray(),
            200
        );
    }
    public function show($id, Request $request)
    {
        if($request->input('with_subscribers'))
            $obj = SubscriberGroup::with('subscribers')->find($id);
        else
            $obj = SubscriberGroup::find($id);

        $obj_data = $obj->toArray();
        $obj_data['subscribers_ids'] = $obj->subscribers_ids;


        return Response::json(
            $obj_data,
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = SubscriberGroup::create($data);

        if(isset($data['subscribers_ids'])){
            $obj->subscribers_ids = $data['subscribers_ids'];
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
        $is_saved = SubscriberGroup::find($data['id'])->update($data);
        $obj =  SubscriberGroup::find($data['id']);

        if(isset($data['subscribers_ids'])){
            $obj->subscribers_ids = $data['subscribers_ids'];
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
        $obj = SubscriberGroup::find($id);
        $is_destroyed = SubscriberGroup::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
