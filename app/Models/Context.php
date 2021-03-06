<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Context extends Model
{
    protected $table = 'contexts';

    protected $fillable = [
        'key',
        'name',
        'description',
        'role',
        'index',
        'is_hide'
    ];

    protected $casts = [
        'is_hide' => 'boolean',
        'index' => 'integer'
    ];

    /**
     * @Relation
     */
    public function settings() {
        return $this->hasMany(Setting::class, 'context_id');
    }
    public function getSettingsValuesAttribute() {
        return $this->settings->pluck('value', 'key')->toArray();
    }
    /**
     * @Relation
     */
    public function pages() {
        return $this->hasMany(Page::class, 'context_id');
    }

    /**
     * @Relation
     */
    public function published_pages()
    {
        return $this->hasMany(Page::class, 'context_id')->where(['is_deleted' => false, 'is_published' => true])->with('published_child_pages');
    }
    /**
     * @Relation
     */
    public function published_pages_by_index()
    {
        return $this->hasMany(Page::class, 'context_id')->orderBy('menu_index', 'ASC')->where(['is_deleted' => false, 'is_published' => true])->with('published_child_pages_by_index');
    }
    /**
     * @Relation
     */
    public function published_pages_by_date()
    {
        return $this->hasMany(Page::class, 'context_id')->orderBy('created_at', 'DESC')->where(['is_deleted' => false, 'is_published' => true])->with('published_child_pages_by_date');
    }
    /**
     * @Relation
     */
    public function pages_tree() {
        return $this->hasMany(Page::class, 'context_id')->whereNull('parent_page_id')->with('child_pages_by_index');
    }

    //Get current context by id from session(if actual) or by current locale
    public static function getByLocale($locale){
        if(session('current_context_id') && session('current_locale') == $locale)//
            return Context::find(session('current_context_id'));

        $context = Context::whereHas('settings', function($query) use($locale){
            //get context, where setting has current locale
            $query->where([
                'key' => 'locale',
                'value' => $locale
            ]);
        })->first();

        if(!$context){
            $context = Context::find(Setting::where('key', 'default_context_id')->first()->value);
        }

        return $context ? $context : Context::first();
    }
}
