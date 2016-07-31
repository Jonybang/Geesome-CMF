<div>
    <h4>
        <a href="/tag/{{$tag->name}}">#{{$tag->name}}</a>
        @if(count($tag->children_tags))
            <a class="tag-toggle" href="#tag-container-{{$tag->id}}"><span href="#tag-container-{{$tag->id}}" class="caret"></span></a>
        @endif
    </h4>

    @if(count($tag->children_tags))
        <div class="collapse" id="tag-container-{{$tag->id}}" style="margin-left:10px;">
            @foreach($tag->children_tags as $child_tag)
                @include('share.menu-tag-item', ['tag' => $child_tag])
            @endforeach
        </div>
    @endif
</div>