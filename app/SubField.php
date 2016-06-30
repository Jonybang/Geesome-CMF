<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubField extends Model
{
    protected $table = 'sub_fields';
    protected $casts = [
        'config' => 'array',
    ];

    protected $fillable = [
        'title', 'name', 'description', 'config', 'default_value', 'sub_field_type_id'
    ];

    public function templates()
    {
        return $this->belongsToMany('App\Template', 'templates_sub_fields');
    }

    public function setTemplatesIdsAttribute($value)
    {
        $this->templates()->detach();
        foreach($value as $template_id)
            $this->templates()->attach($template_id);
    }
    public function getTemplatesIdsAttribute()
    {
        $ids = [];
        foreach($this->templates as $template)
            $ids[] = $template->id;
        return $ids;
    }

    public function type()
    {
        return $this->belongsTo('App\SubFieldType', 'id', 'sub_field_type_id');
    }
    public function sub_field_type()
    {
        return $this->belongsTo('App\SubFieldType');
    }
    public function sub_field_values()
    {
        return $this->hasMany('App\SubFieldValue', 'sub_field_id');
    }
}
