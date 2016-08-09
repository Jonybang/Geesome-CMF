@extends('layouts.client')

@section('title', $page->title)


@section('content')
    @foreach($page->child_pages_by_index as $block)
        @include('templates.' . $block->template->key)
    @endforeach
@endsection