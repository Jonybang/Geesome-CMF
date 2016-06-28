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
    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading -->
        {{--<div class="row">--}}
            {{--<div class="col-lg-12">--}}
                {{--<h1 class="page-header">Page Heading--}}
                    {{--<small>Secondary Text</small>--}}
                {{--</h1>--}}
            {{--</div>--}}
        {{--</div>--}}
        <!-- /.row -->

        <br><br>

        @foreach($page->child_pages as $child_page)
            <div class="row">
                <div class="col-md-7">
                    <a href="#">
                        <img class="img-responsive" src="http://placehold.it/700x300" alt="">
                    </a>
                </div>
                <div class="col-md-5">
                    <h3>{{$child_page->title}}</h3>
                    <h4>{{$child_page->sub_title}}</h4>
                    <p>{{$child_page->description}}</p>
                    <a class="btn btn-primary" href="/{{$child_page->alias}}">{{Helper::dict('view-project')}} <span class="glyphicon glyphicon-chevron-right"></span></a>
                </div>
            </div>
            <!-- /.row -->

            <hr>
        @endforeach

        <!-- Pagination -->
        <div class="row text-center">
            <div class="col-lg-12">
                <ul class="pagination">
                    <li>
                        <a href="#">&laquo;</a>
                    </li>
                    <li class="active">
                        <a href="#">1</a>
                    </li>
                    <li>
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">3</a>
                    </li>
                    <li>
                        <a href="#">4</a>
                    </li>
                    <li>
                        <a href="#">5</a>
                    </li>
                    <li>
                        <a href="#">&raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /.row -->
    </div>
@endsection