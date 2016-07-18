@extends('layouts.client')

@section('title', $page->title)


@section('content')
    <!-- Main Content -->
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                {!! Auth::user()->name !!}
            </div>
        </div>
    </div>

    @include('chunks.imagesArraySlider')
@endsection