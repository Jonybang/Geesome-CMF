<?php

use Illuminate\Database\Seeder;

class PostStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            ['Стоит ли публиковать?', 'not_resolved_published'],
            ['Проставлены не все теги', 'not_resolved_tags'],
            ['NSFW или нет?', 'not_resolved_nsfw'],
            ['В секретный раздел или нет?', 'not_resolved_secret'],
        ];
        foreach($seeds as $seed){
            DB::table('post_statuses')->insert([
                'name' => $seed[0],
                'key' => $seed[1]
            ]);
        }
    }
}
