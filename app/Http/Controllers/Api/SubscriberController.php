<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\Subscriber;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class SubscriberController extends ApiController
{
    public function index()
    {
        return ApiHandler::parseMultiple(Subscriber::query(), ['mail', 'name', 'provider', 'user_agent'])->getResponse();
    }
    public function show($id)
    {
        $obj = Subscriber::find($id);
        $obj_data = $obj->toArray();
        $obj_data['groups_ids'] = $obj->groups_ids;

        return $obj_data;
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = Subscriber::create($data);

        if(isset($data['groups_ids']))
            $obj->groups_ids = $data['groups_ids'];

        UserActionLog::saveAction($obj, "create");

        return $obj->toArray();
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj =  Subscriber::find($data['id']);
        $is_saved = $obj->update($data);

        if(isset($data['groups_ids']))
            $obj->groups_ids = $data['groups_ids'];

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj->toArray();
    }
    public function destroy($id)
    {
        $obj = Subscriber::find($id);
        $is_destroyed = Subscriber::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
