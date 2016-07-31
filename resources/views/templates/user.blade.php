@extends('layouts.client')

@section('seo_title')
    {{$site_title}} - User collection {{$user->name}}
@endsection

@section('tags-content')
    <h1>{{$user->name}} collection</h1>
    <p>{{$user->copyrigths}}</p>
    @foreach($user->favorites_posts as $post)
        @include('share.post-block')
    @endforeach
@endsection