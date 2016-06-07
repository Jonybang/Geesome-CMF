<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Response;
use \Auth;
use \App\User;
use \App\Page;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    public function index()
    {
        return Response::json(
            \DB::table('pages')
                ->leftJoin('pages_contents', 'pages_contents.page_id', '=', 'pages.id')
                ->select(
                    'pages.id as id', 'title', 'alias', 'menu_title', 'sub_title', 'description',
                    'menu_index', 'is_abstract', 'is_menu_hide',
                    'parent_page_id', 'author_id', 'template_id',
                    'pages_contents.content as content'
                )
                ->get(),
            200
        );
    }

    private function getPageArrayWithContent($page){
        $page_data = $page->toArray();
        $page_data['content'] = $page->content;
        return $page_data;
    }

    public function show($id)
    {
        $page = Page::find($id);

        return Response::json(
            $this->getPageArrayWithContent(Page::find($id)),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $page = Page::create($data);
        $page->content = $data['content'];

        return Response::json(
            $this->getPageArrayWithContent($page),
            200
        );
    }
    public function update(Request $request)
    {
        $data = $request->all();
        $page = Page::find($data['id']);
        $is_saved = $page->update($data);
        $page->content = $data['content'];

        return Response::json(
            $this->getPageArrayWithContent($page),
            $is_saved ? 200 : 400
        );
    }
    public function destroy($id)
    {
        $is_destroyed = Page::destroy($id);

        return Response::json(
            $is_destroyed ? 200 : 400
        );
    }
}
