@include('share.flash-message')

{!! Form::open(array('url' => 'login', 'method'=>'post', 'class'=> "form-horizontal")) !!}
    <div class="form-group">
        <label class="col-sm-2 control-label">Email</label>
        <div class="col-sm-8">
            <input type="email" name="email" class="form-control" placeholder="Email" value="{{ old('email') }}">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">Password</label>
        <div class="col-sm-8">
            <input type="password" name="password" class="form-control" placeholder="Password">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-8">
            <div class="checkbox">
                <label>
                    <input name="remember_me" type="checkbox"> Remember me
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-8">
            <button type="submit" class="btn btn-default">Sign in</button>
        </div>
    </div>
{!! Form::close() !!}