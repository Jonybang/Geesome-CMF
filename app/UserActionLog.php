<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserActionLog extends Model
{
    protected $table = 'user_action_logs';

    protected $fillable = [
        'action', 'description', 'user_id'
    ];

    public function logable()
    {
        return $this->morphTo();
    }

    public static function saveAction($logable,$action,$description = '')
    {
        $obj = UserActionLog::create([
            'action'=>$action,
            'description'=>$description,
            'user_id'=> \Auth::user()->id
        ]);
        $obj->logable()->associate($logable);
        $obj->save();
    }
}
