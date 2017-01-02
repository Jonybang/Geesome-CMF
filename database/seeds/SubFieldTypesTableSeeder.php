<?php

use Illuminate\Database\Seeder;

use App\Models\SubFieldType;

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
            'text', 'textarea', 'image', 'date', 'json', 'multiselect'
        ];
        foreach($seeds as $seed){
            DB::table('sub_field_types')->insert([
                'key' => $seed,
                'directive' => 'sf-' . $seed
            ]);
        }
    }
}
