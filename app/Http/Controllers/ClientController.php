<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Helpers\Helper;
use Mail;

class ClientController extends Controller
{
    public function get_projects(){

        $projects = \App\Template::where('path', 'projects')->first()->pages->first()->child_pages;
        return ['projects' => $projects];
    }

    public function tag_by_alias($sub_alias = null){
        $none_tag_data = ['render_template' => '404'];
        if(!$sub_alias)
            return $none_tag_data;

        $tag = \App\Tag::where('name', 'like', $sub_alias)->first();

        if($tag)
            return ['tag' => $tag];
        else
            return $none_tag_data;
    }

    public function sendFeedbackMessage(Request $request){
        $mail_template = \App\MailTemplate::where('key', 'feedback_to_admin')->first();

        $request_data = $request->all();
        $site = substr(env('APP_URL'), 7);
        $request_data['site'] = $site;

        $data = [
            'admin_email' => \App\Setting::where('name', 'feedback_email')->first()->value,
            'site_url' => $site,
            'request' => $request_data,
            'mail_title' => $mail_template->renderTitle($request_data),
            'mail_content' => $mail_template->renderContent($request_data),
        ];

        Mail::send('layouts.email', ['body' => $data['mail_content']], function($message) use ($data)
        {
            $message->from($data['request']['email'], '[' . $data['site_url'] . '] feedback form');

            $message->to($data['admin_email'])->subject($data['mail_title']);
        });
    }
}
