<?php

use Illuminate\Database\Seeder;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $context = \App\Context::create([
            'name' => 'Default',
            'key' => 'default'
        ]);

        $seeds = [
            ['Main', '', 'index', 'Main page subtitle', 'Main page description', 'Main page content'],
            ['Blog', 'blog', 'blog', '', '', ''],
            ['Projects', 'projects', 'projects', '', '', ''],
            ['About', 'about', 'page', '', '', 'About page content'],
            ['Feedback', 'feedback', 'form', '', '', 'Feedback page content'],
        ];
        foreach($seeds as $seed){
            $page = \App\Page::create([
                'title' => $seed[0],
                'alias' => $seed[1],
                'is_published' => true,
                'template_id' => \App\Template::where('path', $seed[2])->first()->id,
                'sub_title' => $seed[3],
                'description' => $seed[4],
                'is_menu_hide' => false,
                'context_id' => $context->id
            ]);
            $page->content_text = $seed[5];
        }
    }
}
