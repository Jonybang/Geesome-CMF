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
        //TODO: Разобраться с получением данных: числа получаю как строки
        return Response::json(
            \DB::table('pages')
                ->leftJoin('pages_contents', 'pages_contents.page_id', '=', 'pages.id')
                ->select(
                    'pages.id as id', 'title', 'alias', 'menu_title', 'sub_title', 'description',
                    'menu_index', 'is_abstract', 'is_menu_hide', 'is_published',
                    'parent_page_id', 'author_id', 'template_id',
                    'pages_contents.content as content'
                )
                ->orderBy('id', 'desc')
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
        $page = Page::with('tags')->find($id);

        return Response::json(
            $this->getPageArrayWithContent($page),
            200
        );
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $page = Page::create($data);

        if(isset($data['content']))
            $page->content = $data['content'];

        if(isset($data['tags_ids'])){
            foreach($data['tags_ids'] as $tag_id)
                $page->tags()->attach($tag_id);
        }

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

        if(isset($data['content']))
            $page->content = $data['content'];

        if(isset($data['tags_ids'])){
            $page->tags()->detach();
            foreach($data['tags_ids'] as $tag_id)
                $page->tags()->attach($tag_id);
        }

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
