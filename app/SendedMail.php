<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Mail;

class SendedMail extends Model
{
    protected $table = 'sended_mails';

    protected $fillable = [
        'result_title',
        'result_content',
        'sub_data',
        'result_addresses',
        'mail_template_id',
        'page_id'
    ];

    protected $casts = [
        'result_addresses' => 'array',
        'sub_data' => 'array'
    ];

    public function mail_template()
    {
        return $this->belongsTo('App\MailTemplate');
    }

    public function page()
    {
        return $this->belongsTo('App\Page');
    }

    public function subscribers_groups()
    {
        return $this->belongsToMany('App\SubscriberGroup', 'mails_subscriber_groups', 'sended_mail_id', 'subscriber_group_id');
    }

    public function setSubscribersGroupsIdsAttribute($value)
    {
        $this->subscribers_groups()->detach();
        foreach($value as $group_id)
            $this->subscribers_groups()->attach($group_id);
    }
    public function getSubscribersGroupsIdsAttribute()
    {
        $ids = [];
        foreach($this->subscribers_groups as $subscribers_group)
            $ids[] = $subscribers_group->id;
        return $ids;
    }

    public function sendMailsToSubscribersGroups($subscribers_groups_ids){
        $addresses = [];
        foreach($subscribers_groups_ids as $subscriber_groups_id){
            $subscriber_group = SubscriberGroup::find($subscriber_groups_id);
            if($subscriber_group){
                $addresses = array_merge($addresses, $subscriber_group->subscribers_mails);
            }
        }
        $this->sendMailsToAddresses($addresses);
    }

    public function sendMailsToAddresses($addresses){
        $data = $this->prepareMailData($this->sub_data);

        Mail::later(5, 'layouts.email', ['body' => $data['mail_content']], function($message) use ($addresses, $data)
        {
            $from_email = isset($data['from_email']) ? $data['from_email'] : $data['admin_email'];
            $from_title = isset($data['from_title']) ? $data['from_title'] : $data['site_url'];

            $message->from($from_email, $from_title);
            $message->subject($data['mail_title']);
            $message->to($addresses[0]);

            if(count($addresses) > 1){
                foreach($addresses as $index => $address)
                    if($index != 0)
                        $message->bcc($address);
            }
        });

        $this->result_title = $data['mail_title'];
        $this->result_content = $data['mail_content'];
        $this->result_addresses = $addresses;
    }

    public function prepareMailData(){
        $settings = \DB::table('settings')->lists('value', 'key');
        $render_data = array_merge($this->sub_data ? $this->sub_data : [], $settings);

        if($this->page){
            $page_data = $this->page->toArray();
            $render_data = array_merge($render_data, $page_data);
            $render_data['page_url'] = $settings['site_url'] . $page_data['alias'];
        }

        $data = array_merge($render_data,[
            'mail_title' => $this->mail_template->renderTitle($render_data),
            'mail_content' => $this->mail_template->renderContent($render_data),
        ]);

        return $data;
    }
}
