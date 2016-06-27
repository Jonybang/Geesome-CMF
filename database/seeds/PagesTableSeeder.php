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
            ['Главная', '', 'index', 'Содержимое главной страницы'],
            ['Блог', 'blog', 'blog', ''],
            ['О нас', 'about', 'page', 'Содержимое страницы о нас'],
        ];
        foreach($seeds as $seed){
            $page = \App\Page::create([
                'title' => $seed[0],
                'alias' => $seed[1],
                'is_published' => true,
                'template_id' => \App\Template::where('path', $seed[2])->first()->id,
                'is_menu_hide' => false,
                'context_id' => $context->id
            ]);
            $page->content_text = $seed[3];
        }
    }
}
