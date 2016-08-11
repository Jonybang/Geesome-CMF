<?php

use Illuminate\Database\Seeder;

use App\Models\Context;
use App\Models\Template;

class UserPageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_template = Template::where('key', 'user')->first();
        $user_template->controller_actions()->create([
            'key' => 'ClientController@user_by_alias'
        ]);

        $seeds = [
            'default' => 'Pages by user',
            'russian' => 'Страницы по пользователю'
        ];
        foreach($seeds as $context_key => $page_title){
            $user_template->pages()->create([
                'title' => $page_title,
                'alias' => 'user',
                'is_published' => true,
                'context_id' => Context::where('key', $context_key)->first()->id
            ]);
        }

    }
}
