@extends('layouts.admin')

@section('title')
    Admin Panel
@endsection

@section('styles')
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Bootstrap Core CSS -->
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="/assets/css/angular/select.min.css" rel="stylesheet">
    <link href="/assets/css/angular/angular-ui-notification.min.css" rel="stylesheet">
    <link href="/assets/css/angular/angular-material.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="/assets/dist/app.css" rel="stylesheet">
@endsection

@section('content')
    @if(Auth::user() && Auth::user()->hasRole('admin'))
        <ui-view layout="row"></ui-view>
    @else
        <div style="margin-top: 100px;">
            <h1 class="text-center">Login to admin panel</h1>
            @include('share.login-form')
        </div>
    @endif
@endsection

@section('scripts')
    <script src="/assets/js/lodash.min.js"></script>
    <script src="/assets/js/moment.min.js"></script>
    <script src="/assets/js/moment-ru.js"></script>

    <!--<script src="//cdn.ckeditor.com/4.5.10/basic/ckeditor.js"></script>-->
    <!--<script src="//cdn.ckeditor.com/4.5.10/standard/ckeditor.js"></script>-->
    <script src="//cdn.ckeditor.com/4.5.10/full/ckeditor.js"></script>

    <script src="/assets/dist/vendor.js"></script>
    <script src="/assets/dist/app.js"></script>
@endsection