<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $table = 'settings';

    protected $fillable = [
        'title', 'description', 'name', 'value'
    ];

    public function logs()
    {
        return $this->morphMany('App\UserActionLog', 'logable');
    }
}
