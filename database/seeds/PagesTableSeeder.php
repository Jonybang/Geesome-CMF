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
            ['Main', '', 'index', 'Main page subtitle', 'Main page description', 'Main page content', false, 'default'],
            ['About', 'about', 'page', '', '', 'About page content', false, 'default'],
            ['Feedback', 'feedback', 'form', '', '', 'Feedback page content', false, 'default'],
            ['Thanks for feedback', 'thanks-for-feedback', 'page', '', '', 'Thanks for feedback content', true, 'default'],
            ['Thanks for subscribe', 'thanks-for-subscribe', 'page', '', '', 'Thanks for subscribe content', true, 'default'],
            ['Create you collection', 'register', 'register', '', '', 'Register and create girls collection!', true, 'default'],
            ['Login', 'login', 'login', '', '', 'Please log in', true, 'default'],
            ['Cabinet', 'cabinet', 'cabinet', '', '', 'User cabinet', true, 'cabinet'],
        ];
        foreach($seeds as $seed){
            $page = Page::create([
                'title' => $seed[0],
                'alias' => $seed[1],
                'is_published' => true,
                'template_id' => Template::where('key', $seed[2])->first()->id,
                'sub_title' => $seed[3],
                'description' => $seed[4],
                'is_menu_hide' => $seed[6],
                'context_id' => Context::where('key', $seed[7])->first()->id
            ]);
            $page->content_text = $seed[5];
        }
    }
}
