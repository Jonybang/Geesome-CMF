<?php

namespace App\Http\Controllers\Api;

use App\UserActionLog;
use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\Page;

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

        return Response::json(
            $pages->toArray(),
            200
        );
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
        $page = Page::with('tags')->find($id);

        return Response::json(
            $this->getPageDataWithContent($page),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $data['context_id'] = \App\Context::first()->id;
        $page = Page::create($data);
        $page->save();

        if(isset($data['content']))
            $page->content_text = $data['content'];

        if(isset($data['tags_ids'])){
            $page->tags_ids = $data['tags_ids'];
        }

        if(isset($data['controller_actions_ids'])){
            $page->template->controller_actions_ids = $data['controller_actions_ids'];
        }
        UserActionLog::saveAction($page,"create");
        return Response::json(
            $this->getPageDataWithContent($page),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $page = Page::find($data['id']);
        $is_saved = $page->update($data);

        if(isset($data['content']))
            $page->content_text = $data['content'];

        if(isset($data['tags_ids'])){
            $page->tags_ids = $data['tags_ids'];
            $page->save();
        }

        if(isset($data['controller_actions_ids'])){
            $page->template->controller_actions_ids = $data['controller_actions_ids'];
        }
        UserActionLog::saveAction($page,"update");
        return Response::json(
            $this->getPageDataWithContent($page),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $page = Page::find($id);
        $is_destroyed = Page::destroy($id);
        if ($is_destroyed)
            UserActionLog::saveAction($page,"destroy");
        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
