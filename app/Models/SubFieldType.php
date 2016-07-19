<?php

namespace App\Models;

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

    /**
     * @Relation
     */
    public function sub_fields()
    {
        return $this->hasMany(SubField::class, 'sub_field_type_id');
    }
}
