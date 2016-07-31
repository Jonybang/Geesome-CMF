<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Page;
use App\Models\Setting;
use App\Models\Tag;

class SiteServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('*', function($view) {
            if(\Auth::user())
                $filter_items = ['user'];
            else
                $filter_items = ['register', 'login'];

            \View::share(
                'auth_items',
                Page::whereIn('alias', $filter_items)->get()
            );
        });

        $tags_menu = Tag::where('is_main', true)->with('children_tags')->get();
        \View::share(
            'tags_menu',
            $tags_menu
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
