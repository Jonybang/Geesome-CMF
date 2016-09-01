<div class="post-preview">
    <a href="{{Helper::localeUrl($page)}}">
        <h2 class="post-title">
            {{$page->title}}
        </h2>
        <h3 class="post-subtitle">
            {{$page->sub_title}}
        </h3>
    </a>
    @if($page->author)
        <p class="post-meta">Posted by <a href="/user/{{$page->author->id}}">{{$page->author->name}}</a> on {{$page->created_at}}</p>
    @endif
    @if(count($page->tags))
        <p class="post-tags">
            @foreach($page->tags as $tag)
                <a href="/tag/{{$tag->name}}">{{$tag->name}}</a>
            @endforeach
        </p>
    @endif
</div>
<hr>