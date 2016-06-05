<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => env('SITE_ADMIN_NAME'),
            'email' => env('SITE_ADMIN_EMAIL'),
            'password' => bcrypt(env('SITE_ADMIN_PASSWORD')),
        ]);
    }
}
