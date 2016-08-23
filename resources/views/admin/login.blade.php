@extends('layouts.admin')

@section('title')
    Admin Panel
@endsection

@section('styles')
    <!-- Bootstrap Core CSS -->
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
@endsection

@section('content')
    <div style="padding: 100px 0; background: #64B5F6;">
        <h1 class="text-center">Login to admin panel</h1>

        @include('share.login-form')
    </div>
@endsection