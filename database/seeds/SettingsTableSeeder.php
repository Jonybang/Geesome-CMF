<?php

use Illuminate\Database\Seeder;

use App\Models\Page;
use App\Models\Template;
use App\Models\Context;
use App\Models\Setting;

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
            ['Yandex translate api key', 'yandex_translate_api_key', env('SITE_YANDEX_TRANSLATE_API_KEY')],
            ['Default template id at create page form', 'default_template_id', Template::where('key', 'page')->first()->id],
            ['Default context id at create page form', 'default_context_id', Context::where('key', 'default')->first()->id],
            ['Admin email', 'admin_email', env('SITE_ADMIN_EMAIL')],
            ['Markdown instead markup editor', 'markdown_mode', env('SITE_MARKDOWN_MODE')]
        ];

        foreach($seeds as $seed){
            Setting::create([
                'name' => $seed[0],
                'key' => $seed[1],
                'value' => $seed[2]
            ]);
        }
    }
}
