<?php

use Illuminate\Database\Seeder;
use App\Page;
use App\Template;
use App\ControllerAction;
use App\SubField;
use App\SubFieldType;
use App\SubFieldValue;

class MainPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $main_template = Template::where('path', 'index')->first();
        $main_page = $main_template->pages()->first();

        $controller_actions = [
            'ClientController@get_projects'
        ];
        foreach($controller_actions as $name){
            $controller_action = new ControllerAction([
                'name' => $name
            ]);
            $main_template->controller_actions()->save($controller_action);
        }

        $main_blocks = [
            ['First block title', 'First block content', 'main_blocks.text_and_button_block', 'Text and button block'],
            ['Second block title', '', 'main_blocks.offers_block', 'Offers block'],
            ['Projects block title', '', 'main_blocks.projects_block', 'Projects block'],
            ['Fourth block title', 'Fourth block content', 'main_blocks.contact_block', 'Contact block']
        ];
        foreach($main_blocks as $block){
            $page = Page::create([
                'title' => $block[0],
                'template_id' => Template::create(['path' => $block[2], 'name' => $block[3]])->id,
                'context_id' => \App\Context::first()->id,
                'parent_page_id' => $main_page->id,
                'is_published' => 1
            ]);
            $page->content_text = $block[1];
            $page->save();
        }

        $main_blocks_sub_fields = [
            'main_blocks.text_and_button_block' => [
                ['button_text', 'text', 'Button text'],
                ['button_link', 'text', 'http://button-link.com']
            ],
            'main_blocks.offers_block' => [
                [
                    'offers', 'json', json_encode([
                        ['icon' => 'diamond', 'title' => 'First icon title', 'description' => 'First icon description'],
                        ['icon' => 'paper-plane', 'title' => 'Second icon title', 'description' => 'Second icon description'],
                        ['icon' => 'newspaper-o', 'title' => 'Third icon title', 'description' => 'Third icon description'],
                        ['icon' => 'heart', 'title' => 'Fourth icon title', 'description' => 'Fourth icon description'],
                    ])
                ]
            ],
            'main_blocks.projects_block' => [
                ['button_text', 'text', 'Button text'],
                ['button_link', 'text', 'http://button-link.com']
            ]
        ];

        $offers_config = json_encode([
            'caption' => 'Add, edit and delete images links',
            'search' => false,
            'create' => false,
            'fields' => [
                [
                    'name' => 'icon',
                    'label' => 'FontAwesome icon name'
                ],
                [
                    'name' => 'title',
                    'label' => 'Title'
                ],
                [
                    'name' => 'description',
                    'label' => 'Description'
                ]
            ]
        ]);

        foreach($main_blocks_sub_fields as $template_path => $sub_fields){
            $template = Template::where('path', $template_path)->first();
            $page = $template->pages->first();

            foreach($sub_fields as $sub_field){
                $exist_sub_field = SubField::where('name', $sub_field[0])->first();

                if($exist_sub_field)
                    $template->sub_fields()->attach($exist_sub_field->id);
                else
                    $exist_sub_field = $template->sub_fields()->save(new SubField([
                            'name' => $sub_field[0],
                            'sub_field_type_id' => SubFieldType::where('name', $sub_field[1])->first()->id,
                            'config' => $sub_field[0] == 'offers' ? $offers_config : null
                        ])
                    );

                SubFieldValue::create([
                    'page_id' => $page->id,
                    'sub_field_id' => $exist_sub_field->id,
                    'value' => $sub_field[2]
                ]);
            }
        }
    }
}
