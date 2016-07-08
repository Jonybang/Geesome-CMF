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
            ['Main', '', 'index', 'Main page subtitle', 'Main page description', 'Main page content', false],
            ['Blog', 'blog', 'blog', '', '', '', false],
            ['Projects', 'projects', 'projects', '', '', '', false],
            ['About', 'about', 'page', '', '', 'About page content', false],
            ['Feedback', 'feedback', 'form', '', '', 'Feedback page content', false],
            ['Thanks for feedback', 'thanks-for-feedback', 'page', '', '', 'Thanks for feedback content', true],
            ['Thanks for subscribe', 'thanks-for-subscribe', 'page', '', '', 'Thanks for subscribe content', true],
        ];
        foreach($seeds as $seed){
            $page = \App\Page::create([
                'title' => $seed[0],
                'alias' => $seed[1],
                'is_published' => true,
                'template_id' => \App\Template::where('path', $seed[2])->first()->id,
                'sub_title' => $seed[3],
                'description' => $seed[4],
                'is_menu_hide' => $seed[6],
                'context_id' => $context->id
            ]);
            $page->content_text = $seed[5];
        }
    }
}
