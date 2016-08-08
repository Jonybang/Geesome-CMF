<?php

use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\Template;
use App\Models\User;
use App\Models\Context;
use App\Models\Tag;

class BlogPagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            'default' => [
                ['Blog page 1', 'Blog page subtitle 1', 'Blog page content 1'],
                ['Blog page 2', 'Blog page subtitle 2', 'Blog page content 2'],
                ['Blog page 3', 'Blog page subtitle 3', 'Blog page content 3'],
            ],
            'russian' => [
                ['1-я Запись блога', 'Подзаголовок 1-й запси блога', 'Содержимое 1-й запси блога'],
                ['2-я Запись блога', 'Подзаголовок 2-й запси блога', 'Содержимое 2-й запси блога'],
                ['3-я Запись блога', 'Подзаголовок 3-й запси блога', 'Содержимое 3-й запси блога'],
            ]
        ];

        $template_id = Template::where('key', 'page')->first()->id;
        $author_id = User::first()->id;

        foreach($seeds as $context_key => $pages_seeds) {
            $context_id = Context::where('key', $context_key)->first()->id;
            $parent_page_id = Page::where('alias', 'projects')->where('context_id', $context_id)->first()->id;

            foreach ($pages_seeds as $seed) {
                $page = Page::create([
                    'title' => $seed[0],
                    'sub_title' => $seed[1],
                    'is_published' => true,
                    'template_id' => $template_id,
                    'parent_page_id' => $parent_page_id,
                    'author_id' => $author_id,
                    'context_id' => $context_id
                ]);
                $page->content_text = $seed[2];

                $tags_ids = [];
                for ($i = 0; $i < 3; $i++) {
                    $id = Tag::orderByRaw(env('DB_CONNECTION') == 'sqlite' ? "random()" : 'RAND()')->first()->id;
                    if (!in_array($id, $tags_ids))
                        $page->tags()->attach($id);
                    $tags_ids[] = $id;
                }
            }
        }
    }
}
