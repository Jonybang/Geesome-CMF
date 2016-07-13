<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    protected $table = 'templates';

    protected $fillable = [
        'name',
        'key',
        'description'
    ];

    public function pages()
    {
        return $this->hasMany('App\Page', 'template_id');
    }

    public function sub_fields()
    {
        return $this->belongsToMany('App\SubField', 'templates_sub_fields')->with('sub_field_type');
    }

    public function controller_actions()
    {
        return $this->belongsToMany('App\ControllerAction', 'templates_controller_actions');
    }

    public function setControllerActionsIdsAttribute($value)
    {
        $this->controller_actions()->detach();
        foreach($value as $controller_action_id)
            $this->controller_actions()->attach($controller_action_id);
    }
    public function getControllerActionsIdsAttribute()
    {
        $ids = [];
        foreach($this->controller_actions as $action)
            $ids[] = $action->id;
        return $ids;
    }

    public function setSubFieldsIdsAttribute($value)
    {
        $this->sub_fields()->detach();
        foreach($value as $sub_field_id)
            $this->sub_fields()->attach($sub_field_id);
    }
    public function getSubFieldsIdsAttribute()
    {
        $ids = [];
        foreach($this->sub_fields as $sub_field)
            $ids[] = $sub_field->id;
        return $ids;
    }

    public function setPagesIdsAttribute($value)
    {
        $this->pages()->detach();
        foreach($value as $page_id)
            $this->pages()->attach($page_id);
    }
    public function getPagesIdsAttribute()
    {
        $ids = [];
        foreach($this->pages as $page)
            $ids[] = $page->id;
        return $ids;
    }
}
