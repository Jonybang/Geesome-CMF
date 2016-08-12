<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Authenticatable
{
    use EntrustUserTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'users';

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * @Relation
     */
    public function logs() {
        return $this->morphMany(UserActionLog::class, 'logable');
    }
    /**
     * @Relation
     */
    public function roles() {
        return $this->belongsToMany(Role::class, 'role_user');
    }
    /**
     * @Relation
     */
    public function pages() {
        return $this->hasMany(Page::class, 'author_id');
    }

    public function setRolesIdsAttribute($value)
    {
        $this->roles()->sync($value);
    }
    public function getRolesIdsAttribute()
    {
        $ids = [];
        foreach($this->roles as $role)
            $ids[] = $role->id;
        return $ids;
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getNameAttribute(){
        return $this->attributes['name'] ? $this->attributes['name'] : $this->email;
    }
}
