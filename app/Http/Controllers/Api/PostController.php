<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\UserActionLog;
use App\Models\Context;
use \Response;
use App\Helpers\FileHelper;

class PostController extends Controller
{
	public function index()
	{
		return Response::json(
			Post::all()->toArray(),
			200
		);
	}
	public function show($id)
	{
		return Response::json(
			Post::find($id)->toArray(),
			200
		);
	}
	public function store(Request $request)
	{


		$data = $request->all();
		$data['context_id'] = Context::first()->id;

		if($request->file('')) {
			$uploaded = [];
			foreach($request->file('other_photos') as $key => $other_photo) {
				$uploaded[$key] = FileHelper::saveImage($other_photo);
				if (count($uploaded) >= 4)
					break;
			}
			$dataф['other_photos'] = $uploaded;
		}

		//$advert = Advert::create($fields);

		$obj = Post::create($data);

		UserActionLog::saveAction($obj,"create");
		return Response::json(
			$obj->toArray(),
			200
		);
	}
	public function update(Request $request)
	{
		$data = $request->all();
		$is_saved = Post::find($data['id'])->update($data);
		$obj = Post::find($data['id']);
		if ($is_saved)
			UserActionLog::saveAction($obj,"update");
		return Response::json(
			$obj,
			$is_saved ? 200 : 400
		);
	}
	public function uploadImages($post_id, Request $request)
	{
		$this->validate($request, [
			'file' => 'required|image|max:10000',
			'index' => 'required|integer'
		]);

		if(!$request->hasFile('file'))
			return;

		$file_index = $request->input('index');

		$post = Post::find($post_id);
		$path_to_file = FileHelper::saveImage($post, $request->file('file'), $file_index);

		$post->attachments[$file_index] = json_encode([
			['type' => 'image', 'src' => $path_to_file]
		]);
	}
	public function destroy($id)
	{
		$obj = Post::find($id);
		$is_destroyed = Post::destroy($id);
		if ($is_destroyed)
			UserActionLog::saveAction($obj,"destroy");
		return Response::json(
			$is_destroyed ? 200 : 400
		);
	}
}
