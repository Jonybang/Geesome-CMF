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
            ['About', 'about', false, 'page', '', '', 'About page content', false, 'default'],
            ['Feedback', 'feedback', false, 'form', '', '', 'Feedback page content', false, 'default'],
            ['Thanks for feedback', 'thanks-for-feedback', true, 'page', '', '', 'Thanks for feedback content', true, 'default'],
            ['Thanks for subscribe', 'thanks-for-subscribe', true, 'page', '', '', 'Thanks for subscribe content', true, 'default'],
            ['Create you collection', 'register', true, 'register', '', '', 'Register and create girls collection!', true, 'default'],
            ['Login', 'login', true, 'login', '', '', 'Please log in', true, 'default'],
            ['Logout', 'logout', true, '', '', '', 'Please log in', true, 'default']
        ];
        foreach($seeds as $index => $seed){
            $page = Page::create([
                'title' => $seed[0],
                'alias' => $seed[1],
                'is_alias_blocked' => $seed[2],
                'is_published' => true,
                'template_id' => $seed[3] ? Template::where('key', $seed[3])->first()->id : Template::where('key', 'empty')->first()->id,
                'sub_title' => $seed[4],
                'description' => $seed[5],
                'is_menu_hide' => $seed[7],
                'context_id' => Context::where('key', $seed[8])->first()->id,
                'menu_index' => $index
            ]);
            $page->content_text = $seed[6];
        }
    }
}
