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

		$post = Post::create($data);

		$post->contents()->create([
			'context_id' => Context::first()->id,
			'title' => isset($data['title']) ? $data['title'] : '',
			'content' => isset($data['content']) ? $data['content'] : ''
		]);

		if(isset($data['tags_ids'])){
			$post->tags_ids = $data['tags_ids'];
			$post->addAutoTags();
			$post->save();
			$post = Post::find($post->id);
		}

		$attachments = [];
		foreach($data['images_urls'] as $image){
			$path_to_file = FileHelper::savePostFile($post, $image['url'], $image['index']);
			$attachments[$image['index']] = ['type' => 'image', 'src' => $path_to_file];
		}
		ksort($attachments);
		$post->attachments = $attachments;

		if($post->is_published)
			$post->published_at = new \DateTime();

		$post->save();

		UserActionLog::saveAction($post, "create");

		return $post;
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
		$path_to_file = FileHelper::savePostFile($post, $request->file('file'), $file_index);

		$attachments = $post->attachments;
		$attachments[$file_index] = ['type' => 'image', 'src' => $path_to_file];
		ksort($attachments);
		$post->attachments = $attachments;
		$post->save();
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
