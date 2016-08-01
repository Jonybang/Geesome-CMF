<?php

use Illuminate\Database\Seeder;

use App\Models\Context;
use App\Models\Page;
use App\Models\Template;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contexts = [
            ['default', 'Default'],
            ['cabinet', 'User cabinet']
        ];
        foreach ($contexts as $context) {
            Context::create([
                'key' => $context[0],
                'name' => $context[1]
            ]);
        }
        
        $seeds = [
            ['Main', '', false, 'index', 'Main page subtitle', 'Main page description', 'Main page content', false, 'default'],
            ['Blog', 'blog', false, 'blog', '', '', '', false, 'default'],
            ['Projects', 'projects', false, 'projects', '', '', '', false, 'default'],
            ['About', 'about', false, 'page', '', '', 'About page content', false, 'default'],
            ['Feedback', 'feedback', false, 'form', '', '', 'Feedback page content', false, 'default'],
            ['Thanks for feedback', 'thanks-for-feedback', true, 'page', '', '', 'Thanks for feedback content', true, 'default'],
            ['Thanks for subscribe', 'thanks-for-subscribe', true, 'page', '', '', 'Thanks for subscribe content', true, 'default'],
            ['Login', 'login', true, 'login', '', '', 'Please log in', true, 'default'],
            ['Cabinet', 'cabinet', true, 'cabinet', '', '', 'User cabinet', true, 'cabinet'],
        ];
        foreach($seeds as $seed){
            $page = Page::create([
                'title' => $seed[0],
                'alias' => $seed[1],
                'is_alias_blocked' => $seed[2],
                'is_published' => true,
                'template_id' => Template::where('key', $seed[3])->first()->id,
                'sub_title' => $seed[4],
                'description' => $seed[5],
                'is_menu_hide' => $seed[7],
                'context_id' => Context::where('key', $seed[8])->first()->id
            ]);
            $page->content_text = $seed[6];
        }
    }
}
