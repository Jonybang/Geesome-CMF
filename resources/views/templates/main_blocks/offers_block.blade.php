<section id="services">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading">{{$block->title}}</h2>
                <hr class="primary">
            </div>
        </div>
    </div>

    @if(isset($block->sub_fields_values['offers']) && is_array(json_decode($block->sub_fields_values['offers'], true)))
    <div class="container">
        <div class="row">
            @foreach(json_decode($block->sub_fields_values['offers'], true) as $offer)
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-{{$offer['icon']}} text-primary sr-icons"></i>
                        <h3>{{$offer['title']}}</h3>
                        <p class="text-muted">{{$offer['description']}}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
    @endif

</section>