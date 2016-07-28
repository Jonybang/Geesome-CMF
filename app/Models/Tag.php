<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';

    protected $fillable = [
        'name',
        'copyrights',
        'parent_tag_id'
    ];

    /**
     * @Relation
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class, 'posts_tags')->orderBy('created_at', 'DESC');
    }
    /**
     * @Relation
     */
    public function auto_tags()
    {
        return $this->belongsToMany(Post::class, 'auto_tags', 'tag_id', 'auto_tag_id');
    }
    /**
     * @Relation
     */
    public function parent_tag()
    {
        return $this->belongsTo(Tag::class, 'parent_tag_id');
    }
    /**
     * @Relation
     */
    public function children_tags()
    {
        return $this->hasMany(Tag::class, 'parent_tag_id');
    }

    public static function getAutoTags($tags_ids){
        $result_tags_ids = $tags_ids;
        foreach($result_tags_ids as &$tag_id){
            $tag = Tag::find($tag_id);

            $parent_id = intval($tag->parent_tag_id);
            if($parent_id && !in_array($parent_id, $result_tags_ids))
                $result_tags_ids[] = $parent_id;
        }
        return $result_tags_ids;
    }
}
