<?php

use Illuminate\Database\Seeder;

use App\Models\Context;
use App\Models\Page;
use App\Models\Template;
use App\Models\User;

class ProjectPagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            'en' => [
                ['Project 1', 'Project 1 sub title', 'Project 1 description', 'Project 1 content'],
                ['Project 2', 'Project 2 sub title', 'Project 2 description', 'Project 2 content'],
                ['Project 3', 'Project 3 sub title', 'Project 3 description', 'Project 3 content']
            ],
            'ru' => [
                ['Проект 1', 'Подзаголовок проекта 1', 'Описание проекта 1', 'Содержимое проекта 1'],
                ['Проект 2', 'Подзаголовок проекта 2', 'Описание проекта 2', 'Содержимое проекта 2'],
                ['Проект 3', 'Подзаголовок проекта 3', 'Описание проекта 3', 'Содержимое проекта 3']
            ]
        ];

        $template_id = Template::where('key', 'page')->first()->id;
        $author_id = User::first()->id;

        $hash_keys = [];

        foreach($seeds as $context_key => $pages_seeds){
            $context_id = Context::where('key', $context_key)->first()->id;
            $parent_page_id = Page::where('alias', 'projects')->where('context_id', $context_id)->first()->id;

            foreach($pages_seeds as $index => $seed){
                $page = Page::create([
                    'title' => $seed[0],
                    'sub_title' => $seed[1],
                    'description' => $seed[2],
                    'is_published' => true,
                    'template_id' => $template_id,
                    'parent_page_id' => $parent_page_id,
                    'author_id' => $author_id,
                    'context_id' => $context_id
                ]);
                $page->content_text = $seed[3];

                if(!isset($hash_keys[$index]))
                    $hash_keys[$index] = uniqid();

                $page->page_translation()->create([
                    'hash_key' => $hash_keys[$index],
                    'locale' => $context_key
                ]);
            }
        }
    }
}
