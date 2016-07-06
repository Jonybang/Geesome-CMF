@extends('layouts.client')

@section('title', $page->title)

@section('header')
    <header class="intro-header" style="background-image: url('{{$sf['imageLink'] or 'assets/img/home-bg.jpg'}}')">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="site-heading">
                        <h1>{{$page->title}}</h1>
                        <hr class="small">
                        <span class="subheading">{{$page->sub_title}}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
@endsection

@section('content')
    @foreach($page->child_pages_by_index as $block)
        @include('templates.' . $block->template->path)
    @endforeach
@endsection