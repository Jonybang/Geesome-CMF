<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission
{
    protected $table = 'permissions';

    protected $fillable = [
        'name',
        'display_name',
        'description',
        'permission_category_id'
    ];

    /**
     * @Relation
     */
    public function permission_category()
    {
        return $this->belongsTo(PermissionCategory::class, 'permission_category_id', 'id');
    }
    /**
     * @Relation
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'permission_role');
    }
}
