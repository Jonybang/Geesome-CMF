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
        $user_page_template = Template::where('key', 'user')->first();
        $user_page_template->pages()->create([
            'title' => 'User collection',
            'alias' => 'user',
            'is_published' => true,
            'context_id' => Context::first()->id
        ]);

        $user_page_template->controller_actions()->create([
            'key' => 'ClientController@user_by_alias'
        ]);
    }
}
