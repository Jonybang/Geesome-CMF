<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\SubscriberGroup;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class SubscriberGroupController extends ApiController
{
    public function index()
    {
        return ApiHandler::parseMultiple(SubscriberGroup::query(), ['key', 'name'])->getResponse();
    }
    public function show($id, Request $request)
    {
        if($request->input('with_subscribers'))
            $obj = SubscriberGroup::with('subscribers')->find($id);
        else
            $obj = SubscriberGroup::find($id);

        $obj_data = $obj->toArray();
        $obj_data['subscribers_ids'] = $obj->subscribers_ids;

        return $obj_data;
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = SubscriberGroup::create($data);

        if(isset($data['subscribers_ids']))
            $obj->subscribers_ids = $data['subscribers_ids'];

        UserActionLog::saveAction($obj, "create");

        return $obj->toArray();
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = SubscriberGroup::find($data['id'])->update($data);
        $obj = SubscriberGroup::find($data['id']);

        if(isset($data['subscribers_ids']))
            $obj->subscribers_ids = $data['subscribers_ids'];

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj->toArray();
    }
    public function destroy($id)
    {
        $obj = SubscriberGroup::find($id);
        $is_destroyed = SubscriberGroup::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
