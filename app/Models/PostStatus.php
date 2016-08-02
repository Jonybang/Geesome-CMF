<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostStatus extends Model
{
	protected $table = 'post_statuses';

	protected $fillable = [
		'name',
		'key'
	];

	/**
	 * @Relation
	 */
	public function posts()
	{
		return $this->hasMany(Post::class, 'post_status_id');
	}
}
