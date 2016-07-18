@extends('layouts.client')

@section('title', $page->title)


@section('content')
    <div id="page-wrapper">

        <div class="container-fluid">
            <h1>{{$page->title}}</h1>

            @include('share.flash-message')

            {!! Form::open(array('url' => 'login', 'method'=>'post', 'class'=> "form-horizontal")) !!}
                <div class="form-group">
                    <label class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" name="email" class="form-control" placeholder="Email" value="{{ old('email') }}">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" name="password" class="form-control" placeholder="Password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                            <label>
                                <input name="remember_me" type="checkbox"> Remember me
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">Sign in</button>
                    </div>
                </div>
            {!! Form::close() !!}
        </div>
        <!-- /.container-fluid -->

    </div>
@endsection