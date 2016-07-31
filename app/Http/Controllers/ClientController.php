<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Helpers\Helper;
use App\Models\Template;
use App\Models\Tag;
use App\Models\MailTemplate;
use App\Models\Setting;
use App\Models\SentMail;
use App\Models\SubscriberGroup;
use App\Models\Subscriber;
use App\Models\Post;
use Mail;
use App\Models\User;

class ClientController extends Controller
{
    public function check_auth(){
        if(!\Auth::user())
            redirect('login');
    }

    public function get_posts($page){

        $posts = Post::where([
            'is_published' => true
        ])->orderBy('published_at', 'DESC')->get();
        return ['posts' => $posts];
    }

    public function get_file($filepath){
        return response()->download(base_path('archive/' . $filepath), null, [], null);
    }

    public function tag_by_alias($sub_alias = null){
        $none_tag_data = ['render_template' => '404'];
        if(!$sub_alias)
            return $none_tag_data;

        $tag = Tag::where('name', 'like', $sub_alias)->first();

        if($tag)
            return ['tag' => $tag];
        else
            return $none_tag_data;
    }

    public function user_by_alias($sub_alias = null){
        $none_user_data = ['render_template' => '404'];
        if(!$sub_alias)
            return ['user' => \Auth::user()];

        $user = User::where('name', 'like', $sub_alias)->first();

        if($user)
            return ['user' => $user];
        else
            return $none_user_data;
    }

    public function sendFeedbackMessage(Request $request){
        $mail_template = MailTemplate::where('key', 'feedback_to_admin')->first();

        $request_data = $request->all();
        $site = Setting::where('key', 'site_url')->first()->value;

        $mail = new SentMail([
            'mail_template_id' => $mail_template->id
        ]);

        $mail->sub_data = array_merge(
            [
                'from_email' => $request_data['email'],
                'from_title' => '[' . $site . '] feedback form'
            ],
            $request_data
        );

        $subscribers_groups_ids = [ SubscriberGroup::where('key', 'admin')->first()->id ];
        $mail->sendMailsToSubscribersGroups($subscribers_groups_ids);

        $mail->save();

        $mail->subscribers_groups_ids = $subscribers_groups_ids;

        return redirect('thanks-for-feedback')->withInput();
    }

    public function subscribe(Request $request){
        $subscriber = Subscriber::create([
            'mail' => $request->input('email'),
            'provider' => 'email',
            'user_agent' => $request->header('User-Agent')
        ]);

        $subscriber_group = SubscriberGroup::where('key', 'general')->first();
        if($subscriber_group){
            $subscriber_group->subscribers()->attach($subscriber->id);
        }

        \Session::put('subscribed', true);

        return redirect('thanks-for-subscribe')->withInput();
    }

    public function addInFavorite(Request $request){
        return \Auth::user()->favorites_posts()->attach($request->input('post_id'));
    }
    public function removeFromFavorite(Request $request){
        return \Auth::user()->favorites_posts()->detach($request->input('post_id'));
    }
}
