<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use App\Models\MailTemplate;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MailTemplateController extends Controller
{
    public function index()
    {
        return Response::json(
            MailTemplate::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            MailTemplate::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = MailTemplate::create($data);
        UserActionLog::saveAction($obj,"create");
        return Response::json(
            $obj->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = MailTemplate::find($data['id'])->update($data);
        $obj = MailTemplate::find($data['id']);
        if ($is_saved)
            UserActionLog::saveAction($obj,"update");
        return Response::json(
            $obj,
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $obj = MailTemplate::find($id);
        $is_destroyed = MailTemplate::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
