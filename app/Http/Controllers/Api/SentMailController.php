<?php

namespace App\Http\Controllers\Api;

use App\UserActionLog;
use App\SentMail;
use Illuminate\Http\Request;
use \Response;
use \Auth;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SentMailController extends Controller
{
    public function index()
    {
        return Response::json(
            SentMail::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        $obj = SentMail::find($id);
        $obj_data = $obj->toArray();
        $obj_data['subscribers_groups_ids'] = $obj->subscribers_groups_ids;

        return Response::json(
            $obj_data,
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = new SentMail($data);

        $obj->sendMailsToSubscribersGroups($data['subscribers_groups_ids']);
        $obj->save();

        $obj->subscribers_groups_ids = $data['subscribers_groups_ids'];

        if(isset($data['sub_data']))
            $obj->sub_data = $data['sub_data'];

        $obj->save();

        UserActionLog::saveAction($obj, "send_mail");
        return Response::json(
            $obj->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = SentMail::find($data['id']);
        $is_saved = $obj->update($data);

        if(isset($data['subscribers_groups_ids'])){
            $obj->subscribers_groups_ids = $data['subscribers_groups_ids'];
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
        $obj = SentMail::find($id);
        $is_destroyed = SentMail::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
