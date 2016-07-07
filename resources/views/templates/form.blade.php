@extends('layouts.client')

@section('title', $page->title)

@section('content')
    <!-- Main Content -->
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                {!! $page->content_text !!}
                <div class="well bs-component">
                    {!! Form::open(array('url' => 'send-message', 'class'=> "form-horizontal")) !!}
                        <fieldset>
                            <legend>{!! $page->content_description !!}</legend>
                            <div class="form-group col-md-12">
                                <div class="col-md-4 col-lg-3 text-right">
                                    <label for="fullname">Как к вам обращаться:</label>
                                </div>
                                <div class="col-md-8 col-lg-9">
                                    <input type="text" id="fullname" name="fullname" placeholder="" class="form-control">
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <div class="col-md-4 col-lg-3 text-right">
                                    <label for="email">Email для связи:</label>
                                </div>
                                <div class="col-md-8 col-lg-9">
                                    <input type="email" name="email" id="email" placeholder="" class="form-control" required="">
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <div class="col-md-4 col-lg-3 text-right">
                                    <label for="message">Текст сообщения:</label>
                                </div>
                                <div class="col-md-8 col-lg-9">
                                    <textarea name="message" id="message" placeholder="" class="form-control" rows="5" required></textarea>
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <div class="col-md-6 col-lg-7 col-md-offset-4 col-lg-offset-3">
                                    <button type="submit" class="btn btn-primary">Отправить</button>
                                </div>
                            </div>
                        </fieldset>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection