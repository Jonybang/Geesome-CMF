<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubFieldType extends Model
{
    protected $table = 'sub_field_types';
    //
    protected $fillable = [
        'key',
        'name',
        'directive'
    ];

    public function sub_fields()
    {
        return $this->hasMany('App\SubField', 'sub_field_type_id');
    }
}
