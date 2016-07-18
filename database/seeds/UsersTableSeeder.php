<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => env('SITE_ADMIN_NAME'),
            'email' => env('SITE_ADMIN_EMAIL'),
            'password' => bcrypt(env('SITE_ADMIN_PASSWORD')),
        ]);

        $admin_role = $admin->roles()->create([
            'name' => 'admin'
        ]);

        $admin_role->permissions()->create([
            'name' => 'admin-panel'
        ]);

        User::create([
            'name' => 'Test user',
            'email' => 'test@user.com',
            'password' => bcrypt('123')
        ]);
    }
}
