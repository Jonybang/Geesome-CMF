<?php

use Illuminate\Database\Seeder;

class TagPageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tag_template = \App\Template::where('key', 'tag')->first();
        $tag_template->pages()->create([
            'title' => 'Pages by tag',
            'alias' => 'tag',
            'is_published' => true,
            'context_id' => \App\Context::first()->id
        ]);

        $tag_template->controller_actions()->create([
            'key' => 'ClientController@tag_by_alias'
        ]);
    }
}
