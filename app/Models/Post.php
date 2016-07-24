<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
	protected $table = 'posts';

	protected $fillable = [
		'alias',
		'attachments',

		'published_on',
		'published_at',

		'is_published',
		'is_from_cabinet',
		'is_secret',
		'is_resolved_nsfw',
		'is_resolved_tags',

		'parent_post_id',
		'author_id',
		'context_id'
	];

	protected $casts = [
		'id' => 'integer',
		'attachments' => 'array'
	];

	/**
	 * @Relation
	 */
	public function tags()
	{
		return $this->belongsToMany(Tag::class, 'posts_tags');
	}
	/**
	 * @Relation
	 */
	public function parent_post()
	{
		return $this->belongsTo(Tag::class, 'parent_post_id');
	}
	/**
	 * @Relation
	 */
	public function author()
	{
		return $this->belongsTo(User::class, 'parent_post_id');
	}
	/**
	 * @Relation
	 */
	public function contents()
	{
		return $this->hasMany(PostContent::class, 'post_id');
	}

	public function getTagsIdsAttribute()
	{
		return $this->tags->lists('id')->toArray();
	}
	public function setTagsIdsAttribute($value)
	{
		$this->tags()->sync($value);
	}
	public function getTagsNamesAttribute()
	{
		return $this->tags->lists('name')->toArray();
	}
	public function getTagsNamesStrAttribute()
	{
		$tags = $this->tags->lists('name')->toArray();
		foreach($tags as $index => $tag){
			$tags[$index] = str_replace(' ', '-', $tag['name']);
		}
		return implode('_', $tags);
	}

	public function getAliasAttribute()
	{
		return isset($this->attributes['alias']) ? $this->attributes['alias'] : $this->id;
	}

	public function addAutoTags(){
		$result_tags_ids = $this->tags_ids;

		foreach($result_tags_ids as &$tag_id){
			$tag = Tag::find($tag_id);

			$parent_id = intval($tag->parent_tag_id);
			if($parent_id && !in_array($parent_id, $result_tags_ids))
				$result_tags_ids[] = $parent_id;
		}

		$this->tags_ids = $result_tags_ids;
		return $result_tags_ids;
	}

	public function generatePathArray(){
		$root_tag = $this->tags()->orderBy('id', 'ASC')->where('is_main', true)->limit(1)->get()->toArray();
		$second_tag = $this->tags()->where('parent_tag_id', $root_tag[0]['id'])->limit(1)->get()->toArray();
		$rest_tags = $this->tags()->orderBy('id', 'ASC')->where('is_main', false)->whereNotIn('id', [$root_tag[0]['id'], $second_tag[0]['id']])->limit(2)->get()->toArray();

		$result = $root_tag;
		if($second_tag)
			$result = array_merge($result, $second_tag);

		if($rest_tags)
			$result = array_merge($result, $rest_tags);

		$output = '';
		foreach($result as $tag){
			$output .= str_replace(' ', '-', $tag['name']) . '/';
		}
		return $output;
	}
}
