<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
	protected $table = 'posts';

	protected $fillable = [
		'title',
		'content',
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
		return $this->belongsTo(Auth::class, 'parent_post_id');
	}

	public function getAliasAttribute()
	{
		return isset($this->attributes['alias']) ? $this->attributes['alias'] : $this->id;
	}
}
