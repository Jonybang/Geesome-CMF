<section id="contact" class="no-padding-bottom">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 text-center">
                <h2 class="section-heading">{{$block->title}}</h2>
                <hr class="primary">
                {!! $block->content_text !!}
            </div>
            <div class="row-centered">
                <div class="col-lg-4 text-center col-centered-lg">
                    <i class="fa fa-phone fa-3x sr-contact"></i>
                    <p>{{trans('general.phone')}}</p>
                </div>
                <div class="col-lg-4 text-center col-centered-lg">
                    <i class="fa fa-envelope-o fa-3x sr-contact"></i>
                    <p><a href="mailto:{{trans('general.email')}}">{{trans('general.email')}}</a></p>
                </div>
            </div>
        </div>
    </div>
</section>