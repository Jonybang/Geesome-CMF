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

        $mail = new \App\SendedMail([
            'mail_template_id' => $mail_template->id
        ]);

        $mail_data = array_merge(
            [
                'from_email' => $request_data['email'],
                'from_title' => '[' . $site . '] feedback form'
            ],
            $request_data
        );

        $mail->sendMailsToAddresses(
            [ \App\Setting::where('name', 'admin_email')->first()->value ],
            $mail_data
        );

        $mail->save();
        return redirect('thanks-for-feedback')->withInput();
    }

    public function subscribe(Request $request){
        \App\Subscriber::create([
            'mail' => $request->input('email'),
            'provider' => 'email',
            'user_agent' => $request->header('User-Agent')
        ]);
        return redirect('thanks-for-subscribe')->withInput();
    }
}
