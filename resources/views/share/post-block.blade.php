<div>
    <h1><a href="{{$post->alias}}">{{$post->contents()->first()->title}}</a></h1>
    <p>{{$post->contents()->first()->content}}</p>
    <div class="row">
        <div class="col col-sm-8">
            @foreach($post->attachments as $attach)
                <img src="{{$attach['src']}}" class="img-responsive margin-top">
            @endforeach
        </div>
        <div class="col col-sm-4">
            @foreach($post->tags as $tag)
                <h4>
                    <a href="/tag/{{$tag->name}}">#{{$tag->name}}</a>
                </h4>
            @endforeach
        </div>
    </div>
</div>
<hr>