<section class="bg-primary">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 text-center">
                <h2 class="section-heading">{{$block->title}}</h2>
                <hr class="light">
                <p class="text-faded">{!! $block->content_text !!}</p>
                <a href="{{$block->sub_fields_values['button_link']}}" class="page-scroll btn btn-default btn-xl sr-button">{{$block->sub_fields_values['button_text']}}</a>
            </div>
        </div>
    </div>
</section>