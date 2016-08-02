<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;
use App\Models\PostStatus;
use App\Models\UserActionLog;

class PostStatusesController extends ApiController
{
	public function index()
	{
		return ApiHandler::parseMultiple(PostStatus::query(), ['name', 'key', 'value', 'description'])->getResponse();
	}
	public function show($id)
	{
		return PostStatus::find($id)->toArray();
	}
	public function store(Request $request)
	{
		$data = $request->all();
		$obj = PostStatus::create($data);

		UserActionLog::saveAction($obj, "create");

		return $obj->toArray();
	}
	public function update(Request $request)
	{
		$data = $request->all();
		$obj = PostStatus::find($data['id']);
		$is_saved = $obj->update($data);

		if ($is_saved)
			UserActionLog::saveAction($obj, "update");

		return $obj->toArray();
	}
	public function destroy($id)
	{
		$obj = PostStatus::find($id);
		$is_destroyed = PostStatus::destroy($id);

		if ($is_destroyed)
			UserActionLog::saveAction($obj, "destroy");

		return $is_destroyed;
	}
}
