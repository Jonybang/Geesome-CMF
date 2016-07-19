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
