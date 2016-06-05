<!DOCTYPE html>
<html lang="ru">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Lanit Dev - @yield('title')</title>

    <!-- Bootstrap Core CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/magnific-popup.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="assets/css/clean-blog.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

@yield('navbar')

@yield('header')

@yield('content')

<hr>

@yield('footer')

<!-- jQuery -->
<script src="assets/js/jquery.js"></script>
<script src="assets/js/jquery.bootstrap-autohidingnavbar.min.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="assets/js/bootstrap.min.js"></script>

<script src="assets/js/scrollreveal.min.js"></script>
<script src="assets/js/jquery.easing.min.js"></script>
<script src="assets/js/jquery.fittext.js"></script>
<script src="assets/js/jquery.magnific-popup.min.js"></script>

<!-- Custom Theme JavaScript -->
<script src="assets/js/clean-blog.js"></script>

</body>

</html>