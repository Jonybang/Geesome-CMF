<?php

use Illuminate\Database\Seeder;

use App\Models\Context;
use App\Models\Template;

class UserPageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_template = Template::where('key', 'user')->first();
        $user_template->controller_actions()->create([
            'key' => 'ClientController@user_by_alias'
        ]);

        $seeds = [
            'en' => 'Pages by user',
            'ru' => 'Страницы по пользователю'
        ];

        $hash_key = uniqid();
        foreach($seeds as $context_key => $page_title){
            $page = $user_template->pages()->create([
                'title' => $page_title,
                'alias' => 'user',
                'is_published' => true,
                'context_id' => Context::where('key', $context_key)->first()->id
            ]);

            $page->page_translation()->create([
                'hash_key' => $hash_key,
                'locale' => $context_key
            ]);
        }

    }
}
