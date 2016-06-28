<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    protected $table = 'templates';

    protected $fillable = [
        'name', 'path', 'description'
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
}
