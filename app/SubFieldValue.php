<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubFieldValue extends Model
{
    protected $table = 'sub_fields_values';

    protected $fillable = [
        'sub_field_id', 'page_id', 'value'
    ];

    public function page()
    {
        return $this->belongsTo('App\Page', 'id', 'page_id');
    }
    public function sub_field()
    {
        return $this->belongsTo('App\SubField', 'id', 'sub_field_id');
    }
}
