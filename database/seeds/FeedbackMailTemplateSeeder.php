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
            'title' => 'Feedback from {{$site_url}} by {{$email}}',
            'content' => "<h1>New feedback message from site {{\$site_url}}!</h1>\n<p>\n<b>Name:</b>{{\$fullname}}<br>\n<b>Email:</b>{{\$email}}<br>\n<b>Message:</b><br>\n<pre>{{\$message}}</pre>\n</p>"
        ]);
    }
}
