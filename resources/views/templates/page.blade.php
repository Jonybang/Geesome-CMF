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
                        {{$testSF}}<br>
                        {{$jsonTestAction}}<br>
                        {{$testAction}}<br>
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
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                {!! $page->content_text !!}
            </div>
        </div>
    </div>
@endsection