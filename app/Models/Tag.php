<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';

    protected $fillable = [
        'name'
    ];

    /**
     * @Relation
     */
    public function pages() {
        return $this->belongsToMany(Page::class, 'pages_tags')->orderBy('created_at', 'DESC');
    }
}
