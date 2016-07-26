<?php

use Illuminate\Database\Seeder;

use App\Models\Page;
use App\Models\Template;

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
            ['Site url', 'site_url', env('APP_URL')],
            ['Main page id', 'main_page', Page::first()->id],
            ['Yandex translate api key', 'yandex_translate_api_key', env('SITE_YANDEX_TRANSLATE_API_KEY')],
            ['Default template id at create page form', 'default_template_id', Template::where('key', 'page')->first()->id],
            ['Admin email', 'admin_email', env('SITE_ADMIN_EMAIL')],
            ['Markdown instead markup editor', 'markdown_mode', env('SITE_MARKDOWN_MODE')],
            ['Default queue post mode', 'default_post_queue', 0]
        ];
        foreach($seeds as $seed){
            DB::table('settings')->insert([
                'name' => $seed[0],
                'key' => $seed[1],
                'value' => $seed[2]
            ]);
        }
    }
}
