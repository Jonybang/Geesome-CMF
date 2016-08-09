@extends('layouts.client')

@section('title', $page->title)


@section('content')
    lala
    @foreach($page->child_pages_by_index as $block)
        lala
        @include('templates.' . $block->template->key)
    @endforeach
@endsection