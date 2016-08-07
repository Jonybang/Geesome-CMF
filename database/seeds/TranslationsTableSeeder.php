<?php

use Illuminate\Database\Seeder;

use Barryvdh\TranslationManager\Models\Translation;

class TranslationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $translations_by_groups = [
            'general' => [
                ['email', env('SITE_ADMIN_EMAIL')],
                ['phone', '123-456-6789'],
                ['view-project', 'View Project']
            ],
            'feedback' => [
                ['fullname', 'Fullname:'],
                ['email', 'Email:'],
                ['message', 'Message:'],
                ['submit', 'Submit']
            ],
            'subscribe' => [
                ['title', 'Subscribe for news'],
                ['email', 'Email'],
                ['submit', 'Subscribe!']
            ]
        ];

        foreach($translations_by_groups as $group_name => $translations){
            foreach($translations as $seed){
                Translation::create([
                    'key' => $seed[0],
                    'value' => $seed[1],
                    'group' => $group_name,
                    'locale' => 'en'
                ]);
            }
            \App::call('Barryvdh\\TranslationManager\\Controller@postPublish', ['group' => $group_name]);
        }

    }
}
