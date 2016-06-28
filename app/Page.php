<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Mockery\CountValidator\Exception;
use GrahamCampbell\Markdown\Facades\Markdown;

class Page extends Model
{
    protected $table = 'pages';

    protected $fillable = [
        'title', 'sub_title', 'alias', 'description', 'menu_index', 'is_published', 'is_menu_hide', 'is_published', 'parent_page_id', 'author_id', 'template_id', 'context_id'
    ];

    protected $casts = [
        'id' => 'integer',
        'menu_index' => 'integer',
        'parent_page_id' => 'integer',
        'author_id' => 'integer',
        'template_id' => 'integer'
    ];

    public function author()
    {
        return $this->belongsTo('App\User');
    }

    public function template()
    {
        return $this->belongsTo('App\Template');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag', 'pages_tags');
    }

    public function parent_page()
    {
        return $this->belongsTo('App\Page');
    }
    public function child_pages()
    {
        return $this->hasMany('App\Page', 'parent_page_id')->orderBy('created_at', 'DESC')->with('child_pages');
    }

    public function logs()
    {
        return $this->morphMany('App\UserActionLog', 'logable');
    }

    public function getSubFieldsValuesAttribute()
    {
        return \DB::table('sub_fields_values')->where('page_id', $this->id)
            ->join('sub_fields', 'sub_fields_values.sub_field_id', '=', 'sub_fields.id')
            ->lists('sub_fields_values.value', 'sub_fields.name');
    }

    public function getAliasAttribute()
    {
        return isset($this->attributes['alias']) ? $this->attributes['alias'] : $this->id;
    }

    public function getNameAttribute()
    {
        return $this->title;
    }

    public function getMenuTitleAttribute()
    {
        try {
            return $this->menu_title ? $this->menu_title : $this->title;
        } catch(\ErrorException $e){
            return $this->title;
        }
    }

    public function setTagsIdsAttribute($value)
    {
        $this->tags()->detach();
        foreach($value as $tag_id)
            $this->tags()->attach($tag_id);
    }
    public function getTagsIdsAttribute()
    {
        $ids = [];
        foreach($this->tags as $tag)
            $ids[] = $tag->id;
        return $ids;
    }

    private function contentRow(){
        return \DB::table('pages_contents')->where('page_id', $this->id)->first();
    }
    public function getContentTextAttribute()
    {
        $content_row = $this->contentRow();
        if($content_row)
            return $content_row->value;
        else
            return '';
    }
    public function getContentHtmlAttribute()
    {
        return Markdown::convertToHtml($this->content_text);
    }

    public function setContentTextAttribute($value)
    {
        $content_row = $this->contentRow();
        if($content_row)
            \DB::table('pages_contents')->where('page_id', $this->id)->update(['value' => $value, 'updated_at' => new \DateTime()]);
        else if($value)
            \DB::table('pages_contents')->insert(
                ['page_id' => $this->id, 'value' => $value, 'created_at' => new \DateTime()]
            );
    }
}
