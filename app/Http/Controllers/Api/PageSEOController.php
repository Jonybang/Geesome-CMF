<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\PageSEO;

class PageSEOController extends Controller
{
    public function index($page_id)
    {
        return Page::find($page_id)->seo;
    }
    public function show($page_id, $id)
    {
        return Page::find($page_id)->seo;
    }
    public function store($page_id, Request $request)
    {
        $data = $request->all();
        $page = Page::find($page_id);

        if(!$page->content)
            $page->seo()->create($data);
        else
            $page->seo->update($data);

        return $page->seo;
    }
    public function update($page_id,Request $request)
    {
        $data = $request->all();
        $page = Page::find($page_id);

        $page->seo->update($data);

        return $page->seo;
    }
}
