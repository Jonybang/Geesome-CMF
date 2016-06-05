@extends('layouts.master')

@section('styles')
    <!-- Custom CSS -->
    <link href="assets/css/clean-blog.css" rel="stylesheet">

    <!-- Magnific Popup CSS -->
    <link href="assets/css/plugins/magnific-popup.css" rel="stylesheet">
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
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
@endsection

@section('header')
    <!-- Page Header -->
    <!-- Set your background image for this header on the line below. -->
    <header class="intro-header" style="background-image: url('assets/img/home-bg.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="site-heading">
                        <h1>Lanit Dev</h1>
                        <hr class="small">
                        <span class="subheading">Developer team of Lanit Company.</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
@endsection

@section('footer')
    <hr>
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
    <script src="assets/js/plugins/jquery.bootstrap-autohidingnavbar.min.js"></script>

    <script src="assets/js/plugins/scrollreveal.min.js"></script>
    <script src="assets/js/plugins/jquery.easing.min.js"></script>
    <script src="assets/js/plugins/jquery.fittext.js"></script>
    <script src="assets/js/plugins/jquery.magnific-popup.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="assets/js/clean-blog.js"></script>
@endsection