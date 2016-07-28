@extends('layouts.client')

@section('seo_title')
    {{$site_title}} - Tag {{$tag->name}}
@endsection

@section('tags-content')
    <h1>#{{$tag->name}}</h1>
    <p>{{$tag->copyrigths}}</p>
    @foreach($tag->posts as $post)
        @include('share.post-block')
    @endforeach
@endsection