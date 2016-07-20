<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use App\Models\SentMail;
use Illuminate\Http\Request;
use \Response;
use \Auth;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class SentMailController extends ApiController
{
    public function index()
    {
        return ApiHandler::parseMultiple(SentMail::query(), ['result_title', 'result_content', 'sub_data', 'result_addresses'])->getResponse();
    }
    public function show($id)
    {
        $obj = SentMail::find($id);
        $obj_data = $obj->toArray();
        $obj_data['subscribers_groups_ids'] = $obj->subscribers_groups_ids;

        return $obj_data;
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

        return $obj->toArray();
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = SentMail::find($data['id']);
        $is_saved = $obj->update($data);

        if(isset($data['subscribers_groups_ids']))
            $obj->subscribers_groups_ids = $data['subscribers_groups_ids'];

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj->toArray();
    }
    public function destroy($id)
    {
        $obj = SentMail::find($id);
        $is_destroyed = SentMail::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
