<section class="no-padding">
    <div class="container-fluid">
        <div class="row no-gutter popup-gallery">

            @foreach($projects as $project)
                <div class="col-lg-4 col-sm-6">
                    <a href="{{$project->sub_fields_values['imageLink']}}" class="portfolio-box">
                        <img src="{{$project->sub_fields_values['imageLink']}}" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    {{$project->parent_page->title}}
                                </div>
                                <div class="project-name">
                                    {{$project->title}}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            @endforeach

        </div>
    </div>
</section>

<aside class="bg-dark">
    <div class="container text-center">
        <div class="call-to-action">
            <h2>{{$block->title}}</h2>
            <a href="{{$block->sub_fields_values['button_link']}}" class="btn btn-default btn-xl sr-button">{{$block->sub_fields_values['button_text']}}</a>
        </div>
    </div>
</aside>