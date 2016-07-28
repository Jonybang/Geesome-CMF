<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\UserActionLog;
use App\Models\Context;
use Mockery\CountValidator\Exception;
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

	private function getPostSubData($post){
		$post_data = $post->toArray();
		$post_data['tags_ids'] = $post->tags_ids;
		return $post_data;
	}

	private function setPostSubData(&$post, $data){
		if(isset($data['tags_ids'])){
			$post->tags_ids = $data['tags_ids'];
			$post->addAutoTags();
			$post->save();
			$post = Post::find($post->id);
		}

		try {
			$attachments = [];
			foreach($data['images_urls'] as $image){
				$path_to_file = FileHelper::savePostFile($post, $image['url'], $image['index']);
				$attachments[$image['index']] = ['type' => 'image', 'src' => $path_to_file];
			}
			ksort($attachments);
			$post->attachments = $attachments;
		} catch(\ErrorException $e){
			$post->is_published = false;
			$post->save();
			return Response::json(
				$this->getPostSubData($post),
				400
			);
		}

		if($post->is_published)
			$post->published_at = new \DateTime();

		return true;
	}
	public function show($id)
	{
		return $this->getPostSubData(Post::find($id));
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

		$result = $this->setPostSubData($post, $data);
		if($result instanceof \Illuminate\Http\JsonResponse)
			return $result;

		$post->save();

		UserActionLog::saveAction($post, "create");

		return $this->getPostSubData($post);
	}
	public function update(Request $request)
	{
		$data = $request->all();
		$post = Post::find($data['id']);
		$is_saved = $post->update($data);

		$post_content = $post->contents()->where('context_id', Context::first()->id)->first();
		$post_content->title = isset($data['title']) ? $data['title'] : '';
		$post_content->content = isset($data['content']) ? $data['content'] : '';
		$post_content->save();

		$result = $this->setPostSubData($post, $data);
		if($result instanceof \Illuminate\Http\JsonResponse)
			return $result;

		$post->save();

		if ($is_saved)
			UserActionLog::saveAction($post,"update");

		return $this->getPostSubData($post);
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

		try {
			$path_to_file = FileHelper::savePostFile($post, $request->file('file'), $file_index);
			$attachments = $post->attachments;
			$attachments[$file_index] = ['type' => 'image', 'src' => $path_to_file];
			ksort($attachments);
			$post->attachments = $attachments;
		} catch(\ErrorException $e){
			$post->is_published = false;
			$post->save();
			return Response::json(
				$this->getPostSubData($post),
				400
			);
		}

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
