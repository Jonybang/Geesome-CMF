<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            'geek', 'cosplay', 'photo', 'sexy', 'cute', 'anime', 'asian'
        ];
        foreach($seeds as $seed){
            DB::table('tags')->insert([
                'name' => $seed
            ]);
        }

    }
}
