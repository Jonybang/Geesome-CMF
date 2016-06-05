<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ClientServiceProvider extends ServiceProvider
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
                \App\Page::where('is_menu_hide', false)->where('parent_page_id', 0)->with('child_pages')->get()
            );
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
