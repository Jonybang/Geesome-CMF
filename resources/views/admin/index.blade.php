@extends('layouts.admin')

@section('title')
    Admin Panel
@endsection

@section('styles')
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">

    <link href="/dist/vendor.css" rel="stylesheet">
    <link href="/dist/app.css" rel="stylesheet">
@endsection

@section('content')
    @if(Auth::user() && Auth::user()->hasRole('admin'))
        <ui-view layout="row" class="md-body-1"></ui-view>
    @else
        <div style="margin-top: 100px;">
            <h1 class="text-center">Login to admin panel</h1>
            @include('share.login-form')
        </div>
    @endif
@endsection

@section('scripts')
    <script src="/js/lodash.min.js"></script>
    <script src="/js/moment.min.js"></script>
    <script src="/js/moment-ru.js"></script>

    <!--<script src="//cdn.ckeditor.com/4.5.10/basic/ckeditor.js"></script>-->
    <!--<script src="//cdn.ckeditor.com/4.5.10/standard/ckeditor.js"></script>-->
    <script src="/ckeditor/ckeditor.js"></script>

    <script src="/dist/vendor.js"></script>
    <script src="/dist/app.js"></script>
@endsection