<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class SiteServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if(\Schema::hasTable('pages'))
            \View::share(
                'menu_items',
                \App\Page
                    ::where('is_menu_hide', false)
                    ->where('is_published', true)
                    ->where('is_deleted', false)
                    ->where('parent_page_id', 0)
                    ->with('child_pages')->get()
            );

        if(\Schema::hasTable('pages')){
            $settings = \App\Setting::get();
            foreach($settings as $setting)
                \View::share($setting->key, $setting->value);
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
