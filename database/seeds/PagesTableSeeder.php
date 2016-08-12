<?php

use App\Models\PageTranslation;
use Illuminate\Database\Seeder;

use App\Models\Context;
use App\Models\Page;
use App\Models\Template;
use App\Models\Setting;

class PagesTableSeeder extends Seeder
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
                ['Main', '', false, 'index', 'Main page subtitle', 'Main page description', 'Main page content', false],
                ['Blog', 'blog', false, 'blog', '', '', '', false],
                ['Projects', 'projects', false, 'projects', '', '', '', false],
                ['About', 'about', false, 'page', '', '', 'About page content', false],
                ['Feedback', 'feedback', false, 'form', '', '', 'Feedback page content', false],
                ['Thanks for feedback', 'thanks-for-feedback', true, 'page', '', '', 'Thanks for feedback content', true],
                ['Thanks for subscribe', 'thanks-for-subscribe', true, 'page', '', '', 'Thanks for subscribe content', true],
                ['Login', 'login', true, 'login', '', '', 'Please log in', true],
                ['Cabinet', 'cabinet', true, 'cabinet', '', '', 'User cabinet', true],
            ],
            'ru' => [
                ['Главная', '', false, 'index', 'Подзаголовок главной страницы', 'Описание главной страницы', 'Содержимое главной страницы', false],
                ['Блог', 'blog', false, 'blog', '', '', '', false],
                ['Проекты', 'projects', false, 'projects', '', '', '', false],
                ['О нас', 'about', false, 'page', '', '', 'Содержимое страницы О нас', false],
                ['Обратная связь', 'feedback', false, 'form', '', '', 'Содержимоек страницы Обратной связи', false],
                ['Спасибо за обратную связь', 'thanks-for-feedback', true, 'page', '', '', 'Содержимое страницы Спасибо за обратную связь', true],
                ['Спасибо за подписку', 'thanks-for-subscribe', true, 'page', '', '', 'Содержимое страницы спасибо за подписку', true],
                ['Авторизация', 'login', true, 'login', '', '', 'Пожалуйста авторизируйтесь', true],
                ['Кабинет', 'cabinet', true, 'cabinet', '', '', 'Кабинет пользователя', true],
            ]
        ];

        $hash_keys = [];

        foreach($seeds as $context_key => $page_seeds){
            $context = Context::where('key', $context_key)->first();
            foreach($page_seeds as $index => $seed){
                $page = Page::create([
                    'title' => $seed[0],
                    'alias' => $seed[1],
                    'is_alias_blocked' => $seed[2],
                    'is_published' => true,
                    'template_id' => Template::where('key', $seed[3])->first()->id,
                    'sub_title' => $seed[4],
                    'description' => $seed[5],
                    'is_menu_hide' => $seed[7],
                    'context_id' => $context->id,
                    'menu_index' => $index
                ]);
                $page->content_text = $seed[6];

                if(!isset($hash_keys[$index]))
                    $hash_keys[$index] = uniqid();

                $page->page_translation()->create([
                    'hash_key' => $hash_keys[$index],
                    'locale' => $context_key
                ]);

                if($index == 0){
                    Setting::create([
                        'name' => 'Main page id',
                        'key' => 'main_page',
                        'value' => $page->id,
                        'context_id' => $context->id
                    ]);
                }
            }
        }
    }
}
