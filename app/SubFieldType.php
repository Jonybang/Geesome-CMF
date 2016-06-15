<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubFieldType extends Model
{
    protected $table = 'sub_field_types';
    //
    protected $fillable = [
        'name'
    ];
}
