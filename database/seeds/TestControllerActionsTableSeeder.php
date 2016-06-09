<?php

use Illuminate\Database\Seeder;
use App\ControllerAction;
use App\Template;

class TestControllerActionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            'TestController@test',
            'TestController@jsonTest'
        ];

        $template = Template::where('path', 'page')->first();
        foreach($seeds as $seed){
            $controller_action = new ControllerAction([
                'name' => $seed
            ]);
            $template->controller_actions()->save($controller_action);
        }
    }
}
