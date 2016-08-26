@extends('layouts.client')

@section('title', $page->title)

@section('content')
    <!-- Main Content -->
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                @foreach($paginate_children as $child_page)
                    @include('chunks.blogPagePreview', ['page' => $child_page])
                @endforeach
            </div>
        </div>

        <!-- Pagination -->
        <div class="row text-center">
            {!! $paginate_links !!}
        </div>
        <!-- /.row -->
    </div>
@endsection