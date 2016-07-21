<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubscriberGroup extends Model
{
    protected $table = 'subscriber_groups';
    //
    protected $fillable = [
        'key',
        'name'
    ];

    /**
     * @Relation
     */
    public function subscribers()
    {
        return $this->belongsToMany(Subscriber::class, 'sbcrbrs_sbcrbr_groups', 'subscriber_group_id', 'subscriber_id');
    }

    public function setSubscribersIdsAttribute($value)
    {
        $this->subscribers()->sync($value);
    }
    public function getSubscribersIdsAttribute()
    {
        $ids = [];
        foreach($this->subscribers as $subscriber)
            $ids[] = $subscriber->id;
        return $ids;
    }
    public function getSubscribersMailsAttribute()
    {
        $mails = [];
        foreach($this->subscribers as $subscriber)
            $mails[] = $subscriber->mail;
        return $mails;
    }

    /**
     * @Relation
     */
    public function sent_mails()
    {
        return $this->belongsToMany(SentMail::class, 'mails_subscriber_groups', 'subscriber_group_id', 'sent_mail_id');
    }
}
