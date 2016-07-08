<?php

namespace App\Http\Controllers\Api;

use App\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\Dictionary;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DictionaryController extends Controller
{
    public function index()
    {
        return Response::json(
            Dictionary::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            Dictionary::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = Dictionary::create($data);
        UserActionLog::saveAction($obj,"create");
        return Response::json(
            $obj->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = Dictionary::find($data['id'])->update($data);
        $obj =  Dictionary::find($data['id']);
        if ($is_saved)
            UserActionLog::saveAction($obj,"update");
        return Response::json(
            $obj,
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $obj = Dictionary::find($id);        
        $is_destroyed = Dictionary::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($obj,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
