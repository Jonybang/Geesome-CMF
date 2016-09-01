<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubFieldValue extends Model
{
    protected $table = 'sub_fields_values';

    protected $fillable = [
        'sub_field_id',
        'page_id',
        'value'
    ];

    /**
     * @Relation
     */
    public function page()
    {
        return $this->belongsTo(Page::class, 'page_id', 'id');
    }
    /**
     * @Relation
     */
    public function sub_field()
    {
        return $this->belongsTo(SubField::class, 'sub_field_id', 'id');
    }
    public function getNameAttribute(){
        return '"' . $this->sub_field->title . '" value on "' . $this->page->title . '" page';
    }
}
