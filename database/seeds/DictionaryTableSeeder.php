<?php

use Illuminate\Database\Seeder;

use App\Models\Dictionary;
use App\Models\Context;

class DictionaryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $context_id = Context::first()->id;

        $dictionaries = [
            'general' => [
                ['email', env('SITE_ADMIN_EMAIL')],
                ['phone', '123-456-6789'],
                ['view-project', 'View Project']
            ],
            'feedback_form' => [
                ['feedback.fullname', 'Fullname:'],
                ['feedback.email', 'Email:'],
                ['feedback.message', 'Message:'],
                ['feedback.submit', 'Submit']
            ],
            'subscribe_form' => [
                ['subscribe.title', 'Subscribe for news'],
                ['subscribe.email', 'Email'],
                ['subscribe.submit', 'Subscribe!']
            ]
        ];

        foreach($dictionaries as $dictionary_name => $words){
            $dictionary = Dictionary::create([
                'key' => $dictionary_name
            ]);

            foreach($words as $seed){
                \DB::table('dictionary_words')->insert([
                    'key' => $seed[0],
                    'value' => $seed[1],
                    'context_id' => $context_id,
                    'dictionary_id' => $dictionary->id
                ]);
            }
        }
    }
}
