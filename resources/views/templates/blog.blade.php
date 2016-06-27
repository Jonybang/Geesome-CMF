@extends('layouts.client')

@section('title', $page->title)

@section('header')
    <!-- Page Header -->
    <!-- Set your background image for this header on the line below. -->
    <header class="intro-header" style="background-image: url('assets/img/home-bg.jpg')">
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
    <!-- Main Content -->
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                @foreach($page->child_pages as $child_page)
                    <div class="post-preview">
                        <a href="/{{$child_page->alias}}">
                            <h2 class="post-title">
                                {{$child_page->title}}
                            </h2>
                            <h3 class="post-subtitle">
                                {{$child_page->sub_title}}
                            </h3>
                        </a>
                        @if($child_page->author)
                            <p class="post-meta">Posted by <a href="/authors/{{$child_page->author->id}}">{{$child_page->author->name}}</a> on {{$child_page->created_at}}</p>
                        @endif
                        @if(count($child_page->tags))
                            <p class="post-tags">
                                @foreach($child_page->tags as $tag)
                                    <a href="/tag/{{$tag->name}}">{{$tag->name}}</a>
                                @endforeach
                            </p>
                        @endif
                    </div>
                    <hr>
                @endforeach
                <!-- Pager -->
                <ul class="pager">
                    <li class="next">
                        <a href="#">Older Posts &rarr;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
@endsection