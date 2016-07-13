<?php

namespace App\Http\Controllers\Api;

use App\UserActionLog;
use App\SendedMail;
use Illuminate\Http\Request;
use \Response;
use \Auth;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SendedMailController extends Controller
{
    public function index()
    {
        return Response::json(
            SendedMail::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            SendedMail::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = new SendedMail($data);

        $obj->sendMailsToAddresses($data['subscribers_groups_ids']);
        $obj->save();

        $obj->subscribers_groups_ids = $data['subscribers_groups_ids'];
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
        $is_saved = SendedMail::find($data['id'])->update($data);
        $obj = SendedMail::find($data['id']);

        if(isset($data['subscribers_groups_ids'])){
            $obj->subscribers_groups_ids = $data['subscribers_groups_ids'];
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
        $obj = SendedMail::find($id);
        $is_destroyed = SendedMail::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
