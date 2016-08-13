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
        return $this->belongsToMany(Page::class, 'pages_tags');
    }
    /**
     * @Relation
     */
    public function published_pages()
    {
        return $this->belongsToMany(Page::class, 'pages_tags')->where(['is_deleted' => false, 'is_published' => true])->with('published_child_pages');
    }
    /**
     * @Relation
     */
    public function published_pages_by_index()
    {
        return $this->belongsToMany(Page::class, 'pages_tags')->orderBy('menu_index', 'ASC')->where(['is_deleted' => false, 'is_published' => true])->with('published_child_pages_by_index');
    }
    /**
     * @Relation
     */
    public function published_pages_by_date()
    {
        return $this->belongsToMany(Page::class, 'pages_tags')->orderBy('created_at', 'DESC')->where(['is_deleted' => false, 'is_published' => true])->with('published_child_pages_by_date');
    }
}
