<?php

use Illuminate\Database\Seeder;

class FeedbackMailTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mail_templates')->insert([
            'name' => 'Feedback to administrator',
            'key' => 'feedback_to_admin',
            'title' => 'Feedback from {{$site}} by {{$email}}',
            'content' => '<h1>New feedback message from site {{$site}}!</h1><p><b>Name:</b>{{$fullname}}<br><b>Email:</b>{{$email}}<br><b>Message:</b><br><pre>{{$message}}</pre></p>'
        ]);
    }
}
