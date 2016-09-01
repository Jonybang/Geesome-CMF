<?php

use Illuminate\Database\Seeder;

use App\Models\Context;
use App\Models\Template;

class TagPageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tag_template = Template::where('key', 'tag')->first();
        $tag_template->controller_actions()->create([
            'key' => 'ClientController@tag_by_alias'
        ]);

        $seeds = [
            'en' => 'Pages by tag',
            'ru' => 'Страницы по тегу'
        ];

        $hash_key = uniqid();

        foreach($seeds as $context_key => $page_title){
            $page = $tag_template->pages()->create([
                'title' => $page_title,
                'alias' => 'tag',
                'is_published' => true,
                'is_allow_nested_alias' => true,
                'context_id' => Context::where('key', $context_key)->first()->id
            ]);

            $page->entity_translation()->create([
                'hash_key' => $hash_key,
                'locale' => $context_key
            ]);
        }

    }
}
