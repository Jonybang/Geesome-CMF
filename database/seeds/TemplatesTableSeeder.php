<?php

use Illuminate\Database\Seeder;

class TemplatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            ['Empty', 'empty'],
            ['Main', 'index'],
            ['Blog', 'blog'],
            ['Page', 'page'],
            ['Projects', 'projects'],
            ['Tag', 'tag'],
            ['Form', 'form'],
            ['Login', 'login'],
            ['Register', 'register'],
            ['Cabinet', 'cabinet'],
            ['User', 'user'],
        ];
        foreach($seeds as $seed){
            DB::table('templates')->insert([
                'name' => $seed[0],
                'key' => $seed[1]
            ]);
        }
    }
}
