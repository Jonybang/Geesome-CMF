<?php

use App\Models\Page;
use App\Models\Context;

//========================================================================================================
// CMS CORE - RENDER PAGE AND SET DATA FOR TEMPLATE
//========================================================================================================

Route::post('/change_locale', function(Request $request){
    Session::put('current_locale', $request->input('locale'));
    Session::put('current_context_id', null);
    return redirect($request->input('page_url'));
});

Route::group(['prefix' => LaravelLocalization::setLocale()], function(){
    Route::any('{all?}', function ($url_query = null) {

        $current_context = Context::getByLocale(LaravelLocalization::getCurrentLocale());

        $page = null;
        //find page by url or get main page from current context
        if($url_query && $url_query != '/'){
            $page = $current_context->pages()->where('alias', $url_query)->first();

            // uri_1/uri_2/uri_3/.../uri_n => ['uri_1','uri_2','uri_3', ... , 'uri_n']
            $url_query_array = explode('/', $url_query);

            if(!$page && count($url_query_array) > 1){

                function whereParent(&$pages_query, $url_query_array, $index)
                {
                    if ($index < 0)
                        return null;
                    //where page.parent.alias == 'uri_(n-1)'
                    return $pages_query->whereHas('parent_page', function ($query) use ($url_query_array, $index) {
                        $url_part = $url_query_array[$index];
                        $query->where('alias', '=', $url_part);
                        whereParent($query, $url_query_array, $index - 1);
                    })->first();
                }

                $index = count($url_query_array) - 1;
                //where page.alias == 'uri_n'
                $pages_query = $current_context->pages()->where('alias', '=', $url_query_array[$index]);
                //if not exist try to get 'uri_(n-1)'
                if($pages_query->count() == 0){
                    $index -= 1;
                    $pages_query = $current_context->pages()->where('alias', '=', $url_query_array[$index])->where('is_allow_nested_alias', true);
                }
                //if no parent uri - just get page
                if($index == 0)
                    $page = $pages_query->first();
                //if still not exist - page not found
                else if($pages_query->count())
                    $page = whereParent($pages_query, $url_query_array, $index - 1);
            }
        } else {
            $main_page_id = $current_context->settings()->where('key', 'main_page')->first()->value;
            $page = Page::find($main_page_id);
        }

        $current_locale = session('current_locale') ? session('current_locale') : LaravelLocalization::getCurrentLocale();
        if($page && session('current_locale') && ($page->context_id != $current_context->id || $current_context->settings_values['locale'] != session('current_locale'))){
            //$page = $page->getPageByTranslation($current_locale);
            Session::put('current_context_id', null);
            return redirect(\LaravelLocalization::getLocalizedURL($current_locale,$url_query));
        }
        Session::put('current_context_id', $current_context->id);

        //if page exist and published get all page data, else return 404 template
        $sub_fields = [];
        $settings = [];
        $page_data = [];
        if($page && $page->is_published && !$page->is_deleted){
            //Get path to laravel template from resources/views/templates folder
            $path = $page->template->key;
            //Get name/value dictionary sub fieds of current page
            $sub_fields = $page->sub_fields_values;

            //execute controller actions on page template and get data from they
            foreach($page->template->controller_actions as $controller_action){
                $result = \App::call('App\\Http\\Controllers\\' . $controller_action->key, [
                    'page' => $page,
                    'url_query' => $url_query,
                    'last_alias' => isset($url_query_array) ? $url_query_array[count($url_query_array) - 1] : null,
                    'params' => $this->app->request->all()
                ]);

                if($result instanceof \Illuminate\Http\JsonResponse)
                    $result_data = (array)$result->getData();
                else
                    $result_data = $result;

                //if action return data for render another template - set this template
                if(isset($result_data['render_template']))
                    $path = $result_data['render_template'];

                $page_data = array_merge($page_data, $result_data);
            }
        } else {
            $path = '404';
        }


        //get menu items
        $page_data['menu_items'] = $current_context->pages()->where([
            'is_menu_hide' => false,
            'is_published' => true,
            'is_deleted' => false,
            'parent_page_id' => null
        ])->orderBy('menu_index', 'ASC')->with('child_pages')->get();

        //get general settings and add or rewrite by settings in current context
        $general_settings = \DB::table('settings')->whereNull('context_id')->pluck('value', 'key')->toArray();
        $context_settings = $current_context->settings_values;
        $settings = $context_settings ? array_merge($general_settings, $context_settings) : $general_settings;

        //get language contexts
        $lang_contexts = Context::where('role', 'lang')->get();

        //sf - sub fields and st - settings dictionaries for alternative to take sub_fields in page if a conflict of variables naming
        $page_data = array_merge($page_data, ['page' => $page, 'sf' => $sub_fields, 'st' => $settings, 'lang_contexts' => $lang_contexts], $sub_fields, $settings);

        //render view by template->key or custom view name from some controller action returned data['render_template']
        return view('templates.' . $path, $page_data);
    })->where('all', '(?!laravel-filemanager|robots.txt|sitemap|css|js|dist|angular|fonts|images|img|vendor).*');
});
