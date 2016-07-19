<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Mockery\CountValidator\Exception;
use GrahamCampbell\Markdown\Facades\Markdown;

class Page extends Model
{
    protected $table = 'pages';

    protected $fillable = [
        'title',
        'sub_title',
        'alias',
        'description',
        'menu_index',

        'is_published',
        'is_menu_hide',
        'is_published',

        'is_abstract',
        'is_part',

        'parent_page_id',
        'author_id',
        'template_id',
        'context_id'
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
        return $this->belongsTo(User::class);
    }

    public function template()
    {
        return $this->belongsTo(Template::class);
    }

    public function context()
    {
        return $this->belongsTo(Context::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'pages_tags');
    }

    public function parent_page()
    {
        return $this->belongsTo(Page::class);
    }
    public function child_pages()
    {
        return $this->hasMany(Page::class, 'parent_page_id')->orderBy('created_at', 'DESC')->with('child_pages');
    }
    public function child_pages_by_index()
    {
        return $this->hasMany(Page::class, 'parent_page_id')->orderBy('menu_index', 'ASC')->with('child_pages_by_index');
    }

    public function logs()
    {
        return $this->morphMany(UserActionLog::class, 'logable');
    }

    public function getSubFieldsValuesAttribute()
    {
        $dictionary = \DB::table('sub_fields_values')->where('page_id', $this->id)
            ->join('sub_fields', 'sub_fields_values.sub_field_id', '=', 'sub_fields.id')
            ->lists('sub_fields_values.value', 'sub_fields.key');

        //make undefined sub_fields as empty strings
        foreach($this->template->sub_fields as $sub_field)
            if(!isset($dictionary[$sub_field->key]))
                $dictionary[$sub_field->key] = '';

        return $dictionary;
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
        return isset($this->attributes['menu_title']) ? $this->attributes['menu_title'] : $this->title;
    }

    public function setTagsIdsAttribute($value)
    {
        $this->tags()->sync($value);
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

    public function getPageUriAttribute(){
        if($this->is_abstract && count($this->child_pages))
            return $this->child_pages[0]->page_uri;
        else if($this->is_part && $this->parent_page_id)
            return $this->parent_page->page_uri . '#' . $this->alias;
        else
            return $this->alias;
    }
}
