<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostContent extends Model
{
	protected $table = 'post_contents';

	protected $fillable = [
		'title',
		'content',

		'context_id'
	];
}
