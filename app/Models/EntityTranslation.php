<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EntityTranslation extends Model
{
    protected $table = 'entity_translations';

    protected $fillable = [
        'entity_id',
        'entity_type',
        'hash_key',
        'locale'
    ];

    public function entity()
    {
        return $this->morphTo();
    }
}
