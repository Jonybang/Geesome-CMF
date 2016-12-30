<?php

use App\Helpers\Helper;
use App\Models\Context;

//========================================================================================================
// ROBOTS.TXT
//========================================================================================================

Route::get('robots.txt', function ()
{
    if (App::environment() == 'production') {
        // If on the live server, serve a nice, welcoming robots.txt.
        Robots::addUserAgent('*');
        Robots::addSitemap('sitemap.xml');
    } else {
        // If you're on any other server, tell everyone to go away.
        Robots::addDisallow('*');
    }

    return Response::make(Robots::generate(), 200, ['Content-Type' => 'text/plain']);
});

//========================================================================================================
// SITEMAP
//========================================================================================================

Route::get('sitemap.xml', function(){

    // create new sitemap object
    $sitemap = App::make("sitemap");

    // set cache key (string), duration in minutes (Carbon|Datetime|int), turn on/off (boolean)
    // by default cache is disabled
    $sitemap->setCache('laravel.sitemap', 60);

    // check if there is cached sitemap and build new only if is not
    if (!$sitemap->isCached())
    {
        $contexts = Context::where('is_hide', false)->get();
        foreach($contexts as $context){
            $locale = $context->settings_values['locale'];

            $pages = $context->pages()->where(['is_published' => true, 'is_deleted' => false, 'is_part' => false])->get();
            foreach ($pages as $page) {
                $sitemap->add( Helper::localeUrl($page, $locale), $page->updated_at, '1.0', 'daily');
            }
        }
    }
    // show your sitemap (options: 'xml' (default), 'html', 'txt', 'ror-rss', 'ror-rdf')
    return $sitemap->render('xml');

});