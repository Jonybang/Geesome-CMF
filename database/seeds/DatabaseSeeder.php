<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);

        $this->call(TemplatesTableSeeder::class);
        $this->call(PagesTableSeeder::class);

        $this->call(SettingsTableSeeder::class);

        $this->call(SubFieldTypesTableSeeder::class);

        $this->call(TagsTableSeeder::class);

        $this->call(BlogPagesTableSeeder::class);
        $this->call(ProjectPagesTableSeeder::class);

        $this->call(TagPageTableSeeder::class);

        $this->call(DictionaryTableSeeder::class);

        $this->call(TestSubFieldsTableSeeder::class);

        $this->call(MainPageSeeder::class);
    }
}

       