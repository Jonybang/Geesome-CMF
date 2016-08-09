<?php

use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\Template;
use App\Models\ControllerAction;
use App\Models\SubField;
use App\Models\SubFieldType;
use App\Models\SubFieldValue;
use App\Models\Context;

class MainPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $main_template = Template::where('key', 'index')->first();

        //==================================================================
        //template controller action
        //==================================================================
        $main_template->controller_actions()->create([
            'key' => 'ClientController@get_projects'
        ]);

        //==================================================================
        // sub fields for main blocks
        //==================================================================
        $sub_fields = [
            //key           //type      //config
            ['button_text', 'text', null],
            ['button_link', 'text', null],
            ['offers', 'json', json_encode([
                'caption' => 'Icons taked from http://fontawesome.io/icons/ by names',
                'search' => false,
                'paginate' => false,
                'create' => false,
                'delete' => false,
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
            ], JSON_PRETTY_PRINT)]
        ];

        foreach ($sub_fields as $sub_field) {
            SubField::create([
                'key' => $sub_field[0],
                'sub_field_type_id' => SubFieldType::where('key', $sub_field[1])->first()->id,
                'config' => $sub_field[2]
            ]);
        }

        //==================================================================
        // templates for main blocks
        //==================================================================
        $templates = [
            //key(path to template)                 //template name
            ['main_blocks.text_and_button_block',   'Text and button block'],
            ['main_blocks.offers_block',            'Offers block'],
            ['main_blocks.projects_block',          'Projects block'],
            ['main_blocks.contact_block',           'Contact block']
        ];

        foreach ($templates as $template) {
            Template::create([
                'key' => $template[0],
                'name' => $template[1]
            ]);
        }

        //==================================================================
        // main blocks for main page in each context
        //==================================================================
        $seeds = [
            'default' => [
                [
                    // block title
                    'First block title',
                    // block content
                    'First block content',
                    // block template key
                    'main_blocks.text_and_button_block',
                    //sub fields values
                    [   //sub field key     //sub field value for block
                        'button_text' => 'First button text',
                        'button_link' => 'http://first-button-link.com'
                    ]
                ],
                [
                    'Second block title',
                    '',
                    'main_blocks.offers_block',
                    [
                        'offers' => json_encode([
                            ['icon' => 'diamond', 'title' => 'First icon title', 'description' => 'First icon description'],
                            ['icon' => 'paper-plane', 'title' => 'Second icon title', 'description' => 'Second icon description'],
                            ['icon' => 'newspaper-o', 'title' => 'Third icon title', 'description' => 'Third icon description'],
                            ['icon' => 'heart', 'title' => 'Fourth icon title', 'description' => 'Fourth icon description'],
                        ])
                    ]
                ],
                [
                    'Projects block title',
                    '',
                    'main_blocks.projects_block',
                    [
                        'button_text' => 'Projects button text',
                        'button_link' => 'http://projects-button-link.com'
                    ]
                ],
                [
                    'Fourth block title',
                    'Fourth block content',
                    'main_blocks.contact_block',
                    []
                ]
            ],
            'russian' => [
                [
                    // block title
                    'Заголовок первого блока',
                    // block content
                    'Соедржимое первого блока',
                    // block template path
                    'main_blocks.text_and_button_block',
                    //sub fields values
                    [   //sub field key     //sub field value for block
                        'button_text' => 'Кнопка первого блока',
                        'button_link' => 'http://first-button-link.com'
                    ]
                ],
                [
                    'Заголовок второго блока',
                    '',
                    'main_blocks.offers_block',
                    [
                        'offers' => json_encode([
                            ['icon' => 'diamond', 'title' => 'Заголовок первой иконки', 'description' => 'Описание первой иконки'],
                            ['icon' => 'paper-plane', 'title' => 'Заголовок второй иконки', 'description' => 'Описание второй иконки'],
                            ['icon' => 'newspaper-o', 'title' => 'Заголовок третей иконки', 'description' => 'Описание третей иконки'],
                            ['icon' => 'heart', 'title' => 'Заголовок четвертой иконки', 'description' => 'Описание четвертой иконки'],
                        ])
                    ]
                ],
                [
                    'Заголовок блока проектов',
                    '',
                    'main_blocks.projects_block',
                    [
                        'button_text' => 'Кнопка блока проектов',
                        'button_link' => 'http://projects-button-link.com'
                    ]
                ],
                [
                    'Заголовок четвертового блока',
                    'Содержимое четвертового блока',
                    'main_blocks.contact_block',
                    []
                ]
            ]
        ];
        foreach ($seeds as $context_key => $blocks_seeds){
            $context = Context::where('key', $context_key)->first();
            $main_page = $main_template->pages()->where('context_id', $context->id)->first();

            foreach ($blocks_seeds as $block) {
                $page = Page::create([
                    'title' => $block[0],
                    'template_id' => Template::where('key', $block[2])->first()->id,
                    'context_id' => $context->id,
                    'parent_page_id' => $main_page->id,
                    'is_part' => true,
                    'is_published' => true
                ]);
                $page->content_text = $block[1];
                $page->save();

                foreach ($block[3] as $sub_field_key => $sub_field_value) {
                    $sub_field = SubField::where('key', $sub_field_key)->first();
                    //attach only on first iteration
                    if($context_key == 'default')
                        $page->template->sub_fields()->attach($sub_field->id);

                    SubFieldValue::create([
                        'page_id' => $page->id,
                        'sub_field_id' => $sub_field->id,
                        'value' => $sub_field_value
                    ]);
                }

            }
        }

    }
}
