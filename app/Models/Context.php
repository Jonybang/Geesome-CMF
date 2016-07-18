<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Context extends Model
{
    protected $table = 'contexts';

    protected $fillable = [
        'key',
        'name',
        'description'
    ];

    public function settings() {
        return $this->hasMany(Setting::class, 'context_id');
    }
    public function getSettingsValuesAttribute() {
        return $this->settings->lists('value', 'key');
    }
}
