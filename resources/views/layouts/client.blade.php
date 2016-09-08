@extends('layouts.master')

@section('analytics')
    {!! Analytics::render() !!}
@endsection

@section('seo_title')
    {{$site_title}} - {{$page->seo_title}}
@endsection

@section('meta')
    <meta name="description" content="{{$page->seo_description}}">
    <meta name="keywords" content="{{$page->seo_keywords}}">
@endsection

@section('styles')
    <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <!-- Magnific Popup CSS -->
    <link href="css/plugins/magnific-popup.css" rel="stylesheet">

    <!-- Slick Slider CSS -->
    <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
    <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"/>

    <!-- Custom CSS -->
    <link href="css/clean-blog.css" rel="stylesheet">
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
                @foreach($lang_contexts as $context)
                    <a  href="{{ LaravelLocalization::getLocalizedURL($context->settings_values['locale']) }}"
                        class="btn {{$context->id == session('current_context_id') ? 'btn-primary' : 'btn-default'}}">

                        {{$context->name}}
                    </a>
                @endforeach
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    @foreach($menu_items as $menu_item)
                        <li>
                            <a href="{{Helper::localeUrl($menu_item)}}">{{$menu_item->menu_title}}</a>
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
@endsection

@section('header')
    <header class="intro-header" style="background-image: url('{{isset($sf['imageLink']) && $sf['imageLink'] ? $sf['imageLink'] : 'img/home-bg.jpg'}}')">
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

@section('footer')
    <hr>
    @if(!session('subscribed'))
        <div class="container">
            {!! Form::open(array('url' => 'subscribe', 'class'=> "form-horizontal")) !!}
            <div class="center-block text-center col-md-3">
                <label>{{trans('subscribe.title')}}</label>
                <input type="email" class="form-control" placeholder="{{trans('subscribe.email')}}" name="email" required><br>
                <button type="submit" class="btn btn-primary">{{trans('subscribe.submit')}}</button>
            </div>
            {!! Form::close() !!}
    </div>
    @endif

    <!-- Footer -->
    <footer>
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
                    <p class="copyright text-muted">Copyright &copy; Lanit Dev Site 2016</p>
                </div>
            </div>
        </div>
    </footer>
@endsection

@section('scripts')
    <script src="js/jquery.min.js"></script>
    <script src="js/plugins/jquery.bootstrap-autohidingnavbar.min.js"></script>

    <script src="js/plugins/scrollreveal.min.js"></script>
    <script src="js/plugins/jquery.easing.min.js"></script>
    <script src="js/plugins/jquery.fittext.js"></script>
    <script src="js/plugins/jquery.magnific-popup.min.js"></script>

    <script type="text/javascript" src="http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/clean-blog.js"></script>
@endsection

@section('body')
    <body>
        @yield('analytics')

        @yield('navbar')

        @yield('header')
        @yield('content')
        @yield('footer')

        @yield('scripts')
    </body>
@endsection