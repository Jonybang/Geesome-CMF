<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubscriberGroup extends Model
{
    protected $table = 'subscriber_groups';
    //
    protected $fillable = [
        'name'
    ];

    public function subscribers()
    {
        return $this->hasMany('App\Subscriber', 'subscriber_group_id');
    }
}
