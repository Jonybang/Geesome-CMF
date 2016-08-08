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
        // create ru and en contexts
        $this->call(LangContextsSeeder::class);

        // create admin from .env data and test user
        $this->call(UsersTableSeeder::class);

        // create example templates
        $this->call(TemplatesTableSeeder::class);

        // create general settings
        $this->call(SettingsTableSeeder::class);

        // create general sub fields types
        $this->call(SubFieldTypesTableSeeder::class);

        // create example tags
        $this->call(TagsTableSeeder::class);

        // create general example pages(for eng and rus contexts)
        $this->call(PagesTableSeeder::class);
        // create example main page blocks(for eng and rus contexts)
        $this->call(MainPageSeeder::class);
        // create example blog pages(for eng and rus contexts)
        $this->call(BlogPagesTableSeeder::class);
        // create example projects pages(for eng and rus contexts)
        $this->call(ProjectPagesTableSeeder::class);
        // create page for get pages by tag(for eng and rus contexts)
        $this->call(TagPageTableSeeder::class);
        // create translations(for ru and eng) and export to resource/lang folder
        $this->call(TranslationsTableSeeder::class);
        // create slider sub field for projects pages
        $this->call(SliderSubFieldsTableSeeder::class);

        // create mail templates and subscribers groups for example
        $this->call(MailingSeeder::class);
    }
}

       