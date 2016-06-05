<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    public function logs()
    {
        return $this->morphMany('App\UserActionLog', 'logable');
    }
}
