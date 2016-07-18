<?php

namespace App\Http\Controllers\Api;

use App\Models\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\Models\User;
use \App\Models\Page;
use \App\Models\Context;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    public function index(Request $request)
    {
        if($request->input('tree_mode'))
            $pages = Page::where('parent_page_id', 0)->with('child_pages_by_index')->get();
        else
            $pages = Page::all();

        return $pages->toArray();
    }

    private function getPageDataWithContent($page){
        $page_data = $page->toArray();
        $page_data['page_uri'] = $page->page_uri;
        $page_data['tags_ids'] = $page->tags_ids;
        $page_data['content'] = $page->content_text;
        return $page_data;
    }

    public function show($id)
    {
        $obj = Page::with('tags')->find($id);

        return $this->getPageDataWithContent($obj);
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $data['context_id'] = Context::first()->id;
        $obj = Page::create($data);
        $obj->save();

        if(isset($data['content']))
            $obj->content_text = $data['content'];

        if(isset($data['tags_ids']))
            $obj->tags_ids = $data['tags_ids'];

        if(isset($data['controller_actions_ids']))
            $obj->template->controller_actions_ids = $data['controller_actions_ids'];

        UserActionLog::saveAction($obj, "create");

        return $this->getPageDataWithContent($obj);
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = Page::find($data['id']);
        $is_saved = $obj->update($data);

        if(isset($data['content']))
            $obj->content_text = $data['content'];

        if(isset($data['tags_ids']))
            $obj->tags_ids = $data['tags_ids'];

        if(isset($data['controller_actions_ids']))
            $obj->template->controller_actions_ids = $data['controller_actions_ids'];

        if($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $this->getPageDataWithContent($obj);
    }
    public function destroy($id)
    {
        $obj = Page::find($id);
        $is_destroyed = Page::destroy($id);

        if ($is_destroyed)
            UserActionLog::saveAction($obj, "destroy");

        return $is_destroyed;
    }
}
