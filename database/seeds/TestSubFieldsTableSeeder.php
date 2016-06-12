<?php

use Illuminate\Database\Seeder;

class TestSubFieldsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sub_field = \App\Template::where('path', 'page')->first()->sub_fields()->create([
                'name' => 'testSF',
                'sub_field_type_id' => \App\SubFieldType::where('name', 'text')->first()->id
            ]);
        $seeds = [
            'test sub field text 1',
            'test sub field text 2',
            'test sub field text 3',
        ];
        foreach(\App\Page::where('alias', 'blog')->first()->child_pages as $index => $page){
            $sub_field->sub_field_values()->save(new \App\SubFieldValue([
                'page_id' => $page->id,
                'value' => $seeds[$index]
            ]));
        }
    }
}
