<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    protected $table = 'subscribers';
    //
    protected $fillable = [
        'email',
        'user_agent',
        'subscriber_group_id'
    ];

    public function group()
    {
        return $this->belongsTo('App\SubFieldType', 'id', 'subscriber_group_id');
    }
}
