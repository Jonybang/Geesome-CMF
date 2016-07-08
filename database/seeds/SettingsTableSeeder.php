<?php

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            ['Site title text', 'site_title', env('SITE_TITLE')],
            ['Main page id', 'main_page', \App\Page::first()->id],
            ['Yandex translate api key', 'yandex_translate_api_key', env('SITE_YANDEX_TRANSLATE_API_KEY')],
            ['Default template id at create page form', 'default_template_id', \App\Template::where('path', 'page')->first()->id],
            ['Feedback email', 'feedback_email', env('SITE_ADMIN_EMAIL')]
        ];
        foreach($seeds as $seed){
            DB::table('settings')->insert([
                'title' => $seed[0],
                'name' => $seed[1],
                'value' => $seed[2]
            ]);
        }
    }
}
