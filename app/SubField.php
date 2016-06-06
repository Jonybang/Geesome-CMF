<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubField extends Model
{
    protected $table = 'sub_fields';
    protected $casts = [
        'config' => 'array',
    ];

    public function templates()
    {
        return $this->belongsToMany('App\Template', 'templates_sub_fields');
    }
    public function type()
    {
        return $this->belongsTo('App\SubFieldType', 'id', 'sub_field_type_id');
    }
}
