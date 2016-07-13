<?php

use Illuminate\Database\Seeder;

class SubFieldTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            'text', 'textarea', 'image', 'date', 'json'
        ];
        foreach($seeds as $seed){
            DB::table('sub_field_types')->insert([
                'key' => $seed,
                'directive' => 'sf-' . $seed
            ]);
        }
    }
}
