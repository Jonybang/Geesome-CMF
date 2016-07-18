<?php

use Illuminate\Database\Seeder;

class CabinetContextSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cabinet_context = \App\Models\Context::where('key', 'cabinet')->first();
        $cabinet_context->settings()->create([
            'key' => 'need_auth',
            'value' => 1
        ]);
    }
}
