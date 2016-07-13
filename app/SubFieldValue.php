<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubFieldValue extends Model
{
    protected $table = 'sub_fields_values';

    protected $fillable = [
        'sub_field_id',
        'page_id',
        'value'
    ];

    public function page()
    {
        return $this->belongsTo('App\Page', 'page_id', 'id');
    }
    public function sub_field()
    {
        return $this->belongsTo('App\SubField', 'sub_field_id', 'id');
    }
    public function getNameAttribute(){
        return '"' . $this->sub_field->title . '" value on "' . $this->page->title . '" page';
    }
}
