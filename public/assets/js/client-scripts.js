$(function () {
    $.ajaxSetup({
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
    });
});

$(document).on('click','.tag-toggle',function(e) {
    var container_id = $(e.target).attr('href');
    console.log(container_id);
    var container = $(container_id);
    if(container.hasClass('in'))
        container.collapse('hide').removeClass('in');
    else
        container.collapse('show').addClass('in');
    return false;
});

$(function(){
    $('.in-favorite').click(function(){
        var el = $(this);
        var post_id = el.data('post-id');
        var is_in_favorite = el.data('in-favorite');
        $.post('api/' + (is_in_favorite ? 'remove_from_favorite' : 'add_in_favorite'), {post_id: post_id}).then(function(){
            if(is_in_favorite)
                el.find('span.glyphicon').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
            else
                el.find('span.glyphicon').removeClass('glyphicon-star-empty').addClass('glyphicon-star');
        });
        return false;
    })
});