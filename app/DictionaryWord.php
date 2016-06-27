<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DictionaryWord extends Model
{
    protected $table = 'dictionary_words';

    protected $fillable = [
        'name', 'value', 'dictionary_id', 'context_id'
    ];
}
