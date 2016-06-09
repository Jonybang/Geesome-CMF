<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ControllerAction extends Model
{
    protected $table = 'controller_actions';

    protected $fillable = [
        'name'
    ];

    public function templates()
    {
        return $this->belongsToMany('App\Template', 'templates_controller_actions');
    }
}
