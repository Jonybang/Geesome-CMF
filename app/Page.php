<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Mockery\CountValidator\Exception;

class Page extends Model
{
    protected $table = 'pages';

    protected $fillable = [
        'title', 'sub_title', 'alias', 'description', 'content', 'menu_index', 'is_published', 'is_main_page', 'parent_page_id', 'author_id', 'template_id'
    ];

    protected $casts = [
        'id' => 'integer',
        'menu_index' => 'integer',
        'is_published' => 'boolean',
        'is_main_page' => 'boolean',
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
        return $this->hasMany('App\Page', 'parent_page_id');
    }

    public function logs()
    {
        return $this->morphMany('App\UserActionLog', 'logable');
    }

    public function getSubFieldsValuesAttribute()
    {
        return \DB::table('sub_fields_values')->where('page_id', $this->id)
            ->join('sub_fields', 'sub_fields_values.sub_field_id', '=', 'sub_fields.id')
            ->lists('sub_fields.name', 'sub_fields_values.value');
    }

    public function getAliasAttribute()
    {
        return isset($this->attributes['alias']) ? $this->attributes['alias'] : $this->id;
    }

    public function getMenuTitleAttribute()
    {
        try {
            return $this->menu_title ? $this->menu_title : $this->title;
        } catch(\ErrorException $e){
            return $this->title;
        }
    }

    private function contentRow(){
        return \DB::table('pages_contents')->where('page_id', $this->id)->first();
    }
    public function getContentAttribute()
    {
        $content_row = $this->contentRow();
        if($content_row)
            return $content_row->content;
        else
            return '';
    }

    public function setContentAttribute($value)
    {
        $content_row = $this->contentRow();
        if($content_row)
            \DB::table('pages_contents')->where('page_id', $this->id)->update(['content' => $value, 'updated_at' => new \DateTime()]);
        else if($value)
            \DB::table('pages_contents')->insert(
                ['page_id' => $this->id, 'content' => $value, 'created_at' => new \DateTime()]
            );
    }
}
