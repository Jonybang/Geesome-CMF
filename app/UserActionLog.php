<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserActionLog extends Model
{
    protected $table = 'user_action_logs';

    public function logable()
    {
        return $this->morphTo();
    }
}
