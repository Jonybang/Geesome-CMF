@extends('layouts.client')

@section('seo_title')
    {{$site_title}} - Tag {{$tag->name}}
@endsection

@section('header')
    <header class="intro-header" style="background-image: url('{{isset($sf['imageLink']) && $sf['imageLink'] ? $sf['imageLink'] : 'assets/img/home-bg.jpg'}}')">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="site-heading">
                        <h1>{{$tag->name}}</h1>
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
                @foreach($tag->published_pages_by_date as $page)
                    @include('chunks.blogPagePreview', ['page' => $page])
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