@extends('layouts.master')

@section('seo_title')
    {{$site_title}} - {{$page->title}}
@endsection

@section('styles')
    <!-- Custom CSS -->
    <link href="assets/css/app.css" rel="stylesheet">

    <!-- Slick Slider CSS -->
    <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
    <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"/>
@endsection

@section('navbar')
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">{{$site_title}}</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    @foreach($menu_items as $menu_item)
                        <li>
                            <a href="\{{$menu_item->alias}}">{{$menu_item->menu_title}}</a>
                        </li>
                    @endforeach

                     @if(Auth::user() && Auth::user()->hasRole('admin'))
                        <li class="active">
                            <a href="\admin">Admin panel</a>
                        </li>
                     @endif
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
<nav class="navbar navbar-static" style="margin-bottom: 0px;">
    <div class="container">
        <a class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
            <span class="glyphicon glyphicon-chevron-down"></span>
        </a>

        <a class="navbar-brand" href="/">{{$site_title}}</a>

        <div class="nav-collapse collase">
            <ul class="nav navbar-nav">
                @foreach($menu_items as $menu_item)
                    <li>
                        <a href="\{{$menu_item->alias}}">{{$menu_item->menu_title}}</a>
                    </li>
                @endforeach
            </ul>
            <ul class="nav navbar-right navbar-nav">
                @if(Auth::user() && Auth::user()->hasRole('admin'))
                    <li class="active">
                        <a href="\admin">Admin panel</a>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</nav>
@endsection

@section('header')
    <header class="masthead" style="height: 300px; border-bottom: 2px solid #1695A3; margin-bottom:0px; background-size:cover; background-image: url('http://image02.worldcosplay.net/uploads//cv/22523/ueboxojnyvqwkmfvehzcitvlwuilsomgerimowtk-store.jpg');">
        <div style="padding-top: 10px; padding-left: 50px;">
            <div class="">
                <div class="row">
                    <div class="col col-sm-6 col-sm-offset-6">
                        <h1>
                            <a href="#" title="scroll down for your viewing pleasure">Создай свою коллекцию няшек!</a>
                            <p class="lead">2-column Layout + Theme for Bootstrap 3</p></h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
@endsection

@section('content')
    <div style="padding-left: 50px;" class="container">
        <div class="row">
            <div class="col col-md-3">
                <div id="sidebar">
                    <ul class="nav nav-stacked">
                        <li><h3 class="highlight">Main tags <i class="glyphicon glyphicon-dashboard pull-right"></i></h3></li>
                        <li><a href="/tag/anime">Anime</a></li>
                        <li><a href="/tag/art">Art</a></li>
                        <li><a href="/tag/cosplay">Cosplay</a></li>
                    </ul>
                </div>
            </div>
            <div class="col col-md-9">
                <div class="panel ">
                    @yield('tags-content')
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer')
    <hr>
    @if(!session('subscribed'))
        <div class="container">
            {!! Form::open(array('url' => 'subscribe', 'class'=> "form-horizontal")) !!}
                <div class="center-block text-center col-md-3">
                    <label>{{Helper::dict('subscribe.title')}}</label>
                    <input type="email" class="form-control" placeholder="{{Helper::dict('subscribe.email')}}" name="email"><br>
                    <button type="submit" class="btn btn-primary">{{Helper::dict('subscribe.submit')}}</button>
                </div>
            {!! Form::close() !!}
        </div>
    @endif
    <!-- Footer -->
    <footer class="margin-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <ul class="list-inline text-center">
                        <li>
                            <a href="#">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
@endsection

@section('scripts')
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <script type="text/javascript" src="http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="assets/js/client-scripts.js"></script>
@endsection