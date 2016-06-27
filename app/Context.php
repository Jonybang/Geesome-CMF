<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Context extends Model
{
    protected $table = 'contexts';

    protected $fillable = [
        'name', 'key'
    ];
}
