<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
	protected $table = 'posts';

	protected $fillable = [
		'content',
		'alias',
		'main_attachments',
		'other_attachments',

		'published_on',
		'published_at',

		'is_published',
		'is_from_cabinet',
		'is_secret',
		'is_resolved_nsfw',

		'parent_post_id',
		'author_id'
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
}
