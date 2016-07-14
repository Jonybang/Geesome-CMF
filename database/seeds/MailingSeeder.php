<?php

use Illuminate\Database\Seeder;

class MailingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mail_templates')->insert([
            'key' => 'feedback_to_admin',
            'name' => 'Feedback to administrator',
            'title' => 'Feedback from {{$site_url}} by {{$email}}',
            'content' => "<h1>New feedback message from site {{\$site_url}}!</h1>\n<p>\n<b>Name:</b>{{\$fullname}}<br>\n<b>Email:</b>{{\$email}}<br>\n<b>Message:</b><br>\n<pre>{{\$message}}</pre>\n</p>"
        ]);

        \App\SubscriberGroup::create([
            'key' => 'general',
            'name' => 'General'
        ]);

        $admin_group = \App\SubscriberGroup::create([
            'key' => 'admin',
            'name' => 'Admin'
        ]);

        $admin_group->subscribers()->create([
            'mail' => \App\Setting::where('key', 'admin_email')->first()->value,
            'provider' => 'email'
        ]);
    }
}
