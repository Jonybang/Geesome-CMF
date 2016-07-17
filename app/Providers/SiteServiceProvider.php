<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Page;
use App\Models\Setting;

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
                Page::where('is_menu_hide', false)
                    ->where('is_published', true)
                    ->where('is_deleted', false)
                    ->where('parent_page_id', 0)
                    ->with('child_pages')->get()
            );

        if(\Schema::hasTable('pages')){
            $settings = Setting::get();
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
