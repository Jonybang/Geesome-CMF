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
        return MailTemplate::all()->toArray();
    }
    public function show($id)
    {
        return MailTemplate::find($id)->toArray();
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = MailTemplate::create($data);

        UserActionLog::saveAction($obj, "create");

        return $obj->toArray();
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = MailTemplate::find($data['id']);
        $is_saved = $obj->update($data);

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj->toArray();
    }
    public function destroy($id)
    {
        $obj = MailTemplate::find($id);
        $is_destroyed = MailTemplate::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
