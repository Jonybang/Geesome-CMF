<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    protected $table = 'templates';

    public function pages()
    {
        return $this->hasMany('App\Page', 'template_id');
    }

    public function sub_fields()
    {
        return $this->belongsToMany('App\SubField', 'templates_sub_fields');
    }

    public function controller_actions()
    {
        return $this->belongsToMany('App\ControllerAction', 'templates_controller_actions');
    }
}
