@extends('layouts.client')

@section('title', $page->title)


@section('client-content')
    @foreach($posts as $post)
        <div>
            <h1><a href="{{$post->alias}}">{{$post->title}}</a></h1>
            <p>{{$post->content}}</p>
            <div class="row">
                <div class="col col-sm-8">
                    {{$post->attachments}}

                </div>
                <div class="col col-sm-4">
                    @foreach($post->tags as $tag)
                        <h4>
                            <a href="/tag/{{$tag->name}}">#{{$tag->name}}</a>
                        </h4>
                    @endforeach
                </div>
            </div>
        </div>
        <hr>
    @endforeach
@endsection