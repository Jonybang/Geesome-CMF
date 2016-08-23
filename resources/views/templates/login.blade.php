@extends('layouts.client')

@section('title', $page->title)


@section('content')
    <div id="page-wrapper">

        <div class="container">
            <h1>{{$page->title}}</h1>

            @include('share.login-form')
        </div>
        <!-- /.container-fluid -->

    </div>
@endsection