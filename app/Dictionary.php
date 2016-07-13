<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dictionary extends Model
{
    protected $table = 'dictionaries';

    protected $fillable = [
        'key',
        'name',
        'description'
    ];
}
