<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';

    protected $fillable = [
        'name'
    ];

    public function pages()
    {
        return $this->belongsToMany('App\Page', 'pages_tags');
    }
}
