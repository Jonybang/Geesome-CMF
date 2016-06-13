@extends('layouts.client')

@section('title', $tag->title)

@section('header')
    <!-- Page Header -->
    <!-- Set your background image for this header on the line below. -->
    <header class="intro-header" style="background-image: url('assets/img/home-bg.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="site-heading">
                        <h1>{{$tag->name}}</h1>
                        <hr class="small">
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
                @foreach($tag->pages as $page)
                    <div class="post-preview">
                        <a href="/{{$page->alias}}">
                            <h2 class="post-title">
                                {{$page->title}}
                            </h2>
                            <h3 class="post-subtitle">
                                {{$page->sub_title}}
                            </h3>
                        </a>
                        @if($page->author)
                            <p class="post-meta">Posted by <a href="/users/{{$page->author->id}}">{{$page->author->name}}</a> on {{$page->created_at}}</p>
                        @endif
                        @if(count($page->tags))
                            <p class="post-tags">
                                @foreach($page->tags as $tag)
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