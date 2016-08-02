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
use Marcelgwerder\ApiHandler\Facades\ApiHandler;

class PageController extends ApiController
{
    public function index(Request $request)
    {
        if($request->input('tree_mode'))
            return Page::whereNull('parent_page_id')->with('child_pages_by_index')->get();
        else
            $pages = Page::query();

        return ApiHandler::parseMultiple($pages, ['title', 'alias', 'menu_title', 'sub_title', 'description'])->getResponse();
    }

    private function getPageSubData($page){
        $page_data = $page->toArray();
        $page_data['page_uri'] = $page->page_uri;
        $page_data['content'] = $page->content_text;
        $page_data['seo'] = $page->seo;
        return $page_data;
    }

    private function setPageSubData($page, $data){
        if(isset($data['content']))
            $page->content_text = $data['content'];

        if(isset($data['controller_actions_ids']))
            $page->template->controller_actions_ids = $data['controller_actions_ids'];
    }

    public function show($id)
    {
        $obj = Page::find($id);

        return $this->getPageSubData($obj);
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $data['context_id'] = Context::first()->id;
        $obj = Page::create($data);
        $obj->save();

        $this->setPageSubData($obj, $data);

        UserActionLog::saveAction($obj, "create");

        return $this->getPageSubData($obj);
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $obj = Page::find($data['id']);
        $is_saved = $obj->update($data);

        $this->setPageSubData($obj, $data);

        if($is_saved)
            UserActionLog::saveAction($obj, "update");

        return $this->getPageSubData($obj);
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
