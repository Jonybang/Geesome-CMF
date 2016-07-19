<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ControllerAction extends Model
{
    protected $table = 'controller_actions';

    protected $fillable = [
        'name'
    ];

    /**
     * @Relation
     */
    public function templates()
    {
        return $this->belongsToMany(Template::class, 'templates_controller_actions');
    }
}
