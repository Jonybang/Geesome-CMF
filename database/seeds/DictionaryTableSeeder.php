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
        $context_id = \App\Context::first()->id;

        $dictionaries = [
            'General' => [
                ['email', env('SITE_ADMIN_EMAIL')],
                ['phone', '123-456-6789'],
                ['view-project', 'View Project']
            ],
            'Feedback Form' => [
                ['feedback.fullname', 'Fullname:'],
                ['feedback.email', 'Email:'],
                ['feedback.message', 'Message:'],
                ['feedback.submit', 'Submit']
            ]
        ];

        foreach($dictionaries as $dictionary_name => $words){
            $dictionary = \App\Dictionary::create([
                'name' => $dictionary_name
            ]);

            foreach($words as $seed){
                \DB::table('dictionary_words')->insert([
                    'name' => $seed[0],
                    'value' => $seed[1],
                    'context_id' => $context_id,
                    'dictionary_id' => $dictionary->id
                ]);
            }
        }
    }
}
