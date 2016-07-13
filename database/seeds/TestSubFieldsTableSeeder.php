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
        \App\Template::where('key', 'page')->first()->sub_fields()->create([
            'key' => 'imagesArray',
            'name' => 'Images slider',
            'sub_field_type_id' => \App\SubFieldType::where('key', 'json')->first()->id,
            'config' => json_encode([
                'caption' => 'Add, edit and delete images links',
                'search' => false,
                'fields' => [
                    [
                        'name' => 'image',
                        'label' => 'Image Link',
                        'new_placeholder' => 'New Image'
                    ]
                ]
            ], JSON_PRETTY_PRINT)
        ]);

        $sub_field = \App\Template::where('key', 'page')->first()->sub_fields()->create([
                'key' => 'imageLink',
                'name' => 'Image Path',
                'sub_field_type_id' => \App\SubFieldType::where('key', 'image')->first()->id
            ]);
        $seeds = [
            '/assets/img/project-3.jpg',
            '/assets/img/project-2.png',
            '/assets/img/project-1.jpg',
        ];
        foreach(\App\Page::where('alias', 'projects')->first()->child_pages as $index => $page){
            $sub_field->sub_field_values()->save(new \App\SubFieldValue([
                'page_id' => $page->id,
                'value' => $seeds[$index]
            ]));
        }
    }
}
