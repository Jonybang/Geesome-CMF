@extends('layouts.client')

@section('title', $page->title)


@section('content')
    @foreach($page->published_child_pages_by_index as $block)
        @include('templates.' . $block->template->key)
    @endforeach
@endsection