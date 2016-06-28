<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\DictionaryWord;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DictionaryWordController extends Controller
{
    public function index()
    {
        return Response::json(
            DictionaryWord::all()->toArray(),
            200
        );
    }
    public function show($id)
    {
        return Response::json(
            DictionaryWord::find($id)->toArray(),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $data['context_id'] = \App\Context::first()->id;

        return Response::json(
            DictionaryWord::create($data)->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = DictionaryWord::find($data['id'])->update($data);

        return Response::json(
            DictionaryWord::find($data['id']),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = DictionaryWord::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
