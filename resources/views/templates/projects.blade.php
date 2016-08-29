@extends('layouts.client')

@section('title', $page->title)


@section('content')
    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading -->
        {{--<div class="row">--}}
            {{--<div class="col-lg-12">--}}
                {{--<h1 class="page-header">Page Heading--}}
                    {{--<small>Secondary Text</small>--}}
                {{--</h1>--}}
            {{--</div>--}}
        {{--</div>--}}
        <!-- /.row -->

        <br><br>

        @foreach($paginate_children as $child_page)
            <div class="row">
                <div class="col-md-7">
                    <a href="{{Helper::localeUrl($child_page)}}">
                        <img class="img-responsive" src="{{$child_page->sub_fields_values['imageLink']}}" alt="">
                    </a>
                </div>
                <div class="col-md-5">
                    <h3>{{$child_page->title}}</h3>
                    <h4>{{$child_page->sub_title}}</h4>
                    <p>{{$child_page->description}}</p>
                    <a class="btn btn-primary" href={{Helper::localeUrl($child_page)}}">{{trans('general.view-project')}} <span class="glyphicon glyphicon-chevron-right"></span></a>
                </div>
            </div>
            <!-- /.row -->

            <hr>
        @endforeach

        <!-- Pagination -->
        <div class="row text-center">
            {!! $paginate_links !!}
        </div>
        <!-- /.row -->
    </div>
@endsection