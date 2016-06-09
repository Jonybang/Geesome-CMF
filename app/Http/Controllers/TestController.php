<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class TestController extends Controller
{
    public function jsonTest($page)
    {
        return \Response::json(
            ['jsonTestAction' => 'jsonTestAction: ' . $page->title],
            200
        );
    }
    public function test($page)
    {
        return ['testAction' => 'testAction: ' . $page->title];
    }
}
