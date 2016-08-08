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
            ['default', 'ENG', 'en'],
            ['russian', 'RUS', 'ru']
        ];
        foreach ($contexts as $seed) {
            $context = Context::create([
                'key' => $seed[0],
                'name' => $seed[1],
                'role' => 'lang'
            ]);
            $context->settings()->create(['key' => 'locale', 'value' => $seed[2]]);
        }
        
        $seeds = [
            ['Main', '', false, 'index', 'Main page subtitle', 'Main page description', 'Main page content', false],
            ['Blog', 'blog', false, 'blog', '', '', '', false],
            ['Projects', 'projects', false, 'projects', '', '', '', false],
            ['About', 'about', false, 'page', '', '', 'About page content', false],
            ['Feedback', 'feedback', false, 'form', '', '', 'Feedback page content', false],
            ['Thanks for feedback', 'thanks-for-feedback', true, 'page', '', '', 'Thanks for feedback content', true],
            ['Thanks for subscribe', 'thanks-for-subscribe', true, 'page', '', '', 'Thanks for subscribe content', true],
            ['Login', 'login', true, 'login', '', '', 'Please log in', true],
            ['Cabinet', 'cabinet', true, 'cabinet', '', '', 'User cabinet', true],
        ];
        $context_id = Context::first()->id;
        foreach($seeds as $index => $seed){
            $page = Page::create([
                'title' => $seed[0],
                'alias' => $seed[1],
                'is_alias_blocked' => $seed[2],
                'is_published' => true,
                'template_id' => Template::where('key', $seed[3])->first()->id,
                'sub_title' => $seed[4],
                'description' => $seed[5],
                'is_menu_hide' => $seed[7],
                'context_id' => $context_id,
                'menu_index' => $index
            ]);
            $page->content_text = $seed[6];
        }
    }
}
