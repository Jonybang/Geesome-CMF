<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\DictionaryWord;
use \App\Models\Context;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class DictionaryWordController extends ApiController
{
    public function index()
    {
        return ApiHandler::parseMultiple(DictionaryWord::query(), ['key', 'value'])->getResponse();
    }
    public function show($id)
    {
        return DictionaryWord::find($id)->toArray();
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $data['context_id'] = Context::first()->id;
        $obj = DictionaryWord::create($data);

        UserActionLog::saveAction($obj, "create");

        return $obj->toArray();
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = DictionaryWord::find($data['id']);
        $is_saved = $obj->update($data);

        if ($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $obj->toArray();
    }
    public function destroy($id)
    {
        $obj = DictionaryWord::find($id);
        $is_destroyed = DictionaryWord::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
