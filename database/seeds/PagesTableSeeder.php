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
        $seeds = [
            ['Главная', 'index', 'Содержимое главной страницы'],
            ['Блог', 'blog', ''],
            ['О нас', 'page', 'Содержимое страницы о нас'],
        ];
        foreach($seeds as $seed){
            $page = \App\Page::create([
                'title' => $seed[0],
                'template_id' => \App\Template::where('path', $seed[1])->first()->id
            ]);
            $page->content = $seed[2];
        }
    }
}
