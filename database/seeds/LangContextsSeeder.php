<?php

use Illuminate\Database\Seeder;

use App\Models\Context;

class LangContextsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contexts = [
            ['en', 'ENG', 'en'],
            ['ru', 'RUS', 'ru']
        ];
        foreach ($contexts as $seed) {
            $context = Context::create([
                'key' => $seed[0],
                'name' => $seed[1],
                'role' => 'lang'
            ]);
            $context->settings()->create(['key' => 'locale', 'value' => $seed[2]]);
        }
    }
}
