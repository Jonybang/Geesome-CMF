<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    protected $table = 'subscribers';
    //
    protected $fillable = [
        'mail',
        'name',
        'provider',
        'user_agent'
    ];

    /**
     * @Relation
     */
    public function groups()
    {
        return $this->belongsToMany(SubscriberGroup::class, 'subscribers_subscriber_groups', 'subscriber_id', 'subscriber_group_id');
    }

    public function setGroupsIdsAttribute($value)
    {
        $this->groups()->sync($value);
    }
    public function getGroupsIdsAttribute()
    {
        $ids = [];
        foreach($this->groups as $group)
            $ids[] = $group->id;
        return $ids;
    }

    public function getNameAttribute()
    {
        return isset($this->attributes['name']) ? $this->attributes['name'] : $this->email;
    }
}
