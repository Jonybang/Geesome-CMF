<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $table = 'settings';

    protected $fillable = [
        'key',
        'value',
        'name',
        'description',
        'context_id'
    ];

    /**
     * @Relation
     */
    public function logs()
    {
        return $this->morphMany(UserActionLog::class, 'logable');
    }
}
