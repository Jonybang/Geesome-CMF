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
        $sub_field = \App\SubField::create(['name' => 'testSF', 'sub_field_type_id' => \App\SubFieldType::where('name', 'text')->first()->id]);
        //TODO: доделать тестирование дополнительных полей
//        $seeds = [
//            ['testSF', 'text'],
//            ['I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.', '', 'Содержимое cтатьи 2'],
//            ['Science has not yet mastered prophecy', 'We predict too much for the next year and yet far too little for the next ten.', 'Содержимое cтатьи 3'],
//        ];
//        foreach($seeds as $seed){
//            $page = \App\Page::create([
//                'title' => $seed[0],
//                'sub_title' => $seed[1],
//                'template_id' => \App\Template::where('path', 'page')->first()->id,
//                'parent_page_id' => \App\Page::where('alias', 'blog')->first()->id,
//                'author_id' => \App\User::first()->id
//            ]);
//            $page->content = $seed[2];
//        }
    }
}
