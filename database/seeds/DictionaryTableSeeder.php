<?php

use Illuminate\Database\Seeder;

class DictionaryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dictionary = \App\Dictionary::create([
            'name' => 'General'
        ]);

        $seeds = [
            ['email', 'your-email@your-domain.com'],
            ['phone', '123-456-6789'],
            ['view-project', 'View Project']
        ];

        $context_id = \App\Context::first()->id;
        $dictionary_id = $dictionary->id;
        foreach($seeds as $seed){
            \DB::table('dictionary_words')->insert([
                'name' => $seed[0],
                'value' => $seed[1],
                'context_id' => $context_id,
                'dictionary_id' => $dictionary_id
            ]);
        }
    }
}
