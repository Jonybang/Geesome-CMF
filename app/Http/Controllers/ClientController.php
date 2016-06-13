<?php

namespace App\Http\Controllers;

use   Illuminate\Http\Request;

use App\Http\Requests;

class ClientController extends Controller
{
    public function tag_by_alias($sub_alias = null){
        //dd($sub_alias);
        $none_tag_data = ['render_template' => '404'];
        if(!$sub_alias)
            return $none_tag_data;

        $tag = \App\Tag::where('name', 'like', $sub_alias)->first();

        if($tag)
            return ['tag' => $tag];
        else
            return $none_tag_data;
    }
}
