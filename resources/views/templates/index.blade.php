@extends('layouts.client')

@section('title', $page->title)

@section('tags-content')
    @foreach($posts as $post)
        @include('share.post-block')
    @endforeach
@endsection