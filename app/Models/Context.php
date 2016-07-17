<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Context extends Model
{
    protected $table = 'contexts';

    protected $fillable = [
        'key',
        'name',
        'description'
    ];
}
