@extends('layouts.master')

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
        <div class="container-fluid">
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
<nav class="navbar navbar-static">
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
    <header class="masthead">
        <div class="container">
            <div class="row">
                <div class="col col-sm-6">
                    <h1>
                        <a href="#" title="scroll down for your viewing pleasure">Создай свою коллекцию няшек!</a>
                        <p class="lead">2-column Layout + Theme for Bootstrap 3</p></h1>
                </div>
                <div class="col col-sm-6">
                    <div class="well pull-right">
                        <img src="//placehold.it/280x100/E7E7E7">
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col col-sm-12">

                    <div class="panel">
                        <div class="panel-body">
                            You may want to put some news here  <span class="glyphicon glyphicon-heart-empty"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col col-sm-3">
                <div id="sidebar">
                    <ul class="nav nav-stacked">
                        <li><h3 class="highlight">Channels <i class="glyphicon glyphicon-dashboard pull-right"></i></h3></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                    <div class="accordion" id="accordion2">
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
                                    Accordion
                                </a>
                            </div>
                            <div id="collapseOne" class="accordion-body collapse in">
                                <div class="accordion-inner">
                                    <p>There is a lot to be said about RWD.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                                    Accordion
                                </a>
                            </div>
                            <div id="collapseTwo" class="accordion-body collapse">
                                <div class="accordion-inner">
                                    <p>Use @media queries or utility classes to customize responsiveness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-sm-9">
                <div class="panel">
                    @yield('client-content')
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