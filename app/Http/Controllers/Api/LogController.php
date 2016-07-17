<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\UserActionLog;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class LogController extends ApiController
{
    public function index()
    {
        $data = [];
        foreach(UserActionLog::all() as $log){
            $log_data = $log->toArray();
            $log_data['logable_name'] = $log->logable ? $log->logable->name : '';
            $data[] = $log_data;
        }
        return Response::json(
            $data,
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            UserActionLog::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();

        return Response::json(
            UserActionLog::create($data)->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = UserActionLog::find($data['id'])->update($data);

        return Response::json(
            UserActionLog::find($data['id']),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = UserActionLog::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
