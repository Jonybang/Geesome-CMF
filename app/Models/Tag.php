<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';

    protected $fillable = [
        'name'
    ];

<<<<<<< HEAD
    /**
     * @Relation
     */
    public function pages()
=======
    public function posts()
>>>>>>> 7c9e308... posts
    {
        return $this->belongsToMany(Post::class, 'posts_tags')->orderBy('created_at', 'DESC');
    }
}
