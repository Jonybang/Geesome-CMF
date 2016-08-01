@extends('layouts.client')

@section('title', $page->title)


@section('content')
    <div id="page-wrapper">

        <div class="container">
            <h1>{{$page->title}}</h1>

            @include('share.flash-message')

            {!! Form::open(array('url' => 'register', 'method'=>'post', 'class'=> "form-horizontal")) !!}
                <div class="form-group">
                    <label class="col-sm-2 control-label">Nickname</label>
                    <div class="col-sm-10">
                        <input type="text" name="name" class="form-control" placeholder="Nickname" value="{{ old('name') }}" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" name="email" class="form-control" placeholder="Email" value="{{ old('email') }}" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" name="password" class="form-control" placeholder="Password" value="{{ old('password') }}" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">Confirm password</label>
                    <div class="col-sm-10">
                        <input type="password" name="confirm_password" class="form-control" placeholder="Confirm password" value="{{ old('confirm_password') }}" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">Register</button>
                    </div>
                </div>
            {!! Form::close() !!}
        </div>
        <!-- /.container-fluid -->

    </div>
@endsection