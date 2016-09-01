<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole
{
    protected $table = 'roles';

    protected $fillable = [
        'name',
        'display_name',
        'description'
    ];

    /**
     * @Relation
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'role_user');
    }
    /**
     * @Relation
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'permission_role');
    }
}
