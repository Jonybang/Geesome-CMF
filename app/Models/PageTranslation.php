<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageTranslation extends Model
{
    protected $table = 'page_translations';

    protected $fillable = [
        'page_id',
        'sub_title',
        'hash_key',
        'locale'
    ];

    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}
