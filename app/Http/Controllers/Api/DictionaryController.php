<?php

namespace App\Http\Controllers\Api;

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

        return Response::json(
            Dictionary::create($data)->toArray(),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $is_saved = Dictionary::find($data['id'])->update($data);

        return Response::json(
            Dictionary::find($data['id']),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = Dictionary::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
