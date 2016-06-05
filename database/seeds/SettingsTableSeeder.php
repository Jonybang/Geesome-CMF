<?php

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            ['Заголовок сайта', 'site_title', env('SITE_TITLE')],
            ['Главная страница', 'main_page', \App\Page::first()->id]
        ];
        foreach($seeds as $seed){
            DB::table('settings')->insert([
                'title' => $seed[0],
                'name' => $seed[1],
                'value' => $seed[2]
            ]);
        }
    }
}
