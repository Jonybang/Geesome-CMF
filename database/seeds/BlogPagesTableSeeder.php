<?php

use Illuminate\Database\Seeder;

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
            ['Man must explore, and this is exploration at its greatest', 'Problems look mighty small from 150 miles up', 'Содержимое cтатьи 1'],
            ['I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.', '', 'Содержимое cтатьи 2'],
            ['Science has not yet mastered prophecy', 'We predict too much for the next year and yet far too little for the next ten.', 'Содержимое cтатьи 3'],
        ];

        $template_id = \App\Template::where('path', 'page')->first()->id;
        $page_id = \App\Page::where('alias', 'blog')->first()->id;
        $author_id = \App\User::first()->id;
        $context_id = \App\Context::first()->id;

        foreach($seeds as $seed){
            $page = \App\Page::create([
                'title' => $seed[0],
                'sub_title' => $seed[1],
                'is_published' => true,
                'template_id' => $template_id,
                'parent_page_id' => $page_id,
                'author_id' => $author_id,
                'context_id' => $context_id
            ]);
            $page->content_text = $seed[2];

            $tags_ids = [];
            for($i=0; $i<3; $i++){
                $id = \App\Tag::orderByRaw("random()")->first()->id;
                if(!in_array($id, $tags_ids))
                    $page->tags()->attach($id);
                $tags_ids[] = $id;
            }
            $page->save();
        }
    }
}
