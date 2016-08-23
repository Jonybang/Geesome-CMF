@extends('layouts.master')

@section('styles')
    <!-- Bootstrap Core CSS -->
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link rel="stylesheet" href="/assets/font-awesome/css/font-awesome.min.css" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="/assets/css/angular/select.min.css" rel="stylesheet">
    <link href="/assets/css/angular/angular-ui-notification.min.css" rel="stylesheet">
    <link href="/assets/css/angular/angular-material.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="/assets/dist/app.css" rel="stylesheet">
@endsection

@section('body')
    <body ng-app="admin_app" ng-strict-di="" ng-cloak>

        @yield('content')

        @yield('scripts')
    </body>
@endsection