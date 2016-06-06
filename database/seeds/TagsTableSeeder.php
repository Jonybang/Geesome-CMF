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
            'Laravel', 'PHP', 'How to'
        ];
        foreach($seeds as $seed){
            DB::table('tags')->insert([
                'name' => $seed
            ]);
        }

    }
}
