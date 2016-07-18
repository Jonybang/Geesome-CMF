<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
	protected $table = 'posts';

	protected $fillable = [
		'content',
		'main_attachments',
		'other_attachments',
		'published_on',
		'published',
		'from_cabinet',
		'secret',
		'parent_post_id',
		'author_id'
	];

	public function tags()
	{
		return $this->belongsToMany(Tag::class, 'posts_tags');
	}
	public function parent_post()
	{
		return $this->belongsTo(Tag::class, 'parent_post_id');
	}
	public function author()
	{
		return $this->belongsTo(Auth::class, 'parent_post_id');
	}
}
