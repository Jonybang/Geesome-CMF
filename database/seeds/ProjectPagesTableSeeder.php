<?php

use Illuminate\Database\Seeder;

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
            ['Project 1', 'Project 1 sub title', 'Project 1 description', 'Project 1 content'],
            ['Project 2', 'Project 2 sub title', 'Project 2 description', 'Project 2 content'],
            ['Project 3', 'Project 3 sub title', 'Project 3 description', 'Project 3 content'],
        ];

        $template_id = \App\Template::where('path', 'page')->first()->id;
        $page_id = \App\Page::where('alias', 'projects')->first()->id;
        $author_id = \App\User::first()->id;
        $context_id = \App\Context::first()->id;

        foreach($seeds as $seed){
            $page = \App\Page::create([
                'title' => $seed[0],
                'sub_title' => $seed[1],
                'description' => $seed[2],
                'is_published' => true,
                'template_id' => $template_id,
                'parent_page_id' => $page_id,
                'author_id' => $author_id,
                'context_id' => $context_id
            ]);
            $page->content_text = $seed[3];
            $page->save();
        }
    }
}
