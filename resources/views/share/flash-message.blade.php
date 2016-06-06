@if(Session::has('message_type'))
    <div class="alert alert-{{ session('message_type') }} alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>{{ ucfirst(session('message_type')) }}!</strong> {{ session('message_text') }}
    </div>
@endif