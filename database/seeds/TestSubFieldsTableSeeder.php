<?php

use Illuminate\Database\Seeder;

use App\Models\Page;
use App\Models\Template;
use App\Models\SubFieldType;
use App\Models\SubFieldValue;

class TestSubFieldsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Template::where('key', 'page')->first()->sub_fields()->create([
            'key' => 'imagesArray',
            'name' => 'Images slider',
            'sub_field_type_id' => SubFieldType::where('key', 'json')->first()->id,
            'config' => json_encode([
                'caption' => 'Add, edit and delete images links',
                'search' => false,
                'paginate' => false,
                'fields' => [
                    [
                        'name' => 'image',
                        'label' => 'Image Link',
                        'new_placeholder' => 'New Image'
                    ]
                ]
            ], JSON_PRETTY_PRINT)
        ]);

        $sub_field = Template::where('key', 'page')->first()->sub_fields()->create([
                'key' => 'imageLink',
                'name' => 'Image Path',
                'sub_field_type_id' => SubFieldType::where('key', 'image')->first()->id
            ]);
        $seeds = [
            '/assets/img/project-3.jpg',
            '/assets/img/project-2.png',
            '/assets/img/project-1.jpg',
        ];
        foreach(Page::where('alias', 'projects')->first()->child_pages as $index => $page){
            $sub_field->values()->save(new SubFieldValue([
                'page_id' => $page->id,
                'value' => $seeds[$index]
            ]));
        }
    }
}
