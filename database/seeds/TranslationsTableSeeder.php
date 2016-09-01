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
            //group
            'general' => [
                //key               //en value                  //ru value
                ['email',           env('SITE_ADMIN_EMAIL'),    env('SITE_ADMIN_EMAIL')],
                ['phone',           '123-456-6789',             '9876-654-321'],
                ['view-project',    'View Project',             'Подробнее о проекте']
            ],
            'feedback' => [
                ['fullname',        'Fullname:',                'Ваше имя:'],
                ['email',           'Email:',                   'Email:'],
                ['message',         'Message:',                 'Ваше сообщение:'],
                ['submit',          'Submit',                   'Отправить']
            ],
            'subscribe' => [
                ['title',           'Subscribe for news',       'Подписаться на новости'],
                ['email',           'Email',                    'Email'],
                ['submit',          'Subscribe!',               'Подписаться!']
            ]
        ];

        foreach($translations_by_groups as $group_name => $translations){
            foreach($translations as $seed){
                //create for en locale
                Translation::create([
                    'key' => $seed[0],
                    'value' => $seed[1],
                    'group' => $group_name,
                    'locale' => 'en'
                ]);
                //create for ru locale
                Translation::create([
                    'key' => $seed[0],
                    'value' => $seed[2],
                    'group' => $group_name,
                    'locale' => 'ru'
                ]);
            }
            \App::call('Barryvdh\\TranslationManager\\Controller@postPublish', ['group' => $group_name]);
        }

    }
}
