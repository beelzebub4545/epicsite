$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        var height = $(window).height();
        if(scroll_pos >= 2.5*height) {
            $("body").css('background-color', 'rgb(58, 0, 58)');
            $(".text-div").css('visibility', 'hidden');
            $("#purple").css('visibility', 'visible');
        } else if(scroll_pos >= 2*height) {
            $("body").css('background-color', 'rgb(0, 0, 70');
            $(".text-div").css('visibility', 'hidden');
            $("#blue").css('visibility', 'visible');
        } else if(scroll_pos >= 1.5*height) {
            $("body").css('background-color', 'rgb(0, 58, 0)');
            $(".text-div").css('visibility', 'hidden');
            $("#green").css('visibility', 'visible');
        } else if(scroll_pos >= height) {
            $("body").css('background-color', 'rgb(122, 122, 0)');
            $(".text-div").css('visibility', 'hidden');
            $("#yellow").css('visibility', 'visible');
        } else if(scroll_pos >= 0.5*height) {
            $("body").css('background-color', ' rgb(124, 81, 0)');
            $(".text-div").css('visibility', 'hidden');
            $("#orange").css('visibility', 'visible');
        } else {
            $("body").css('background-color', 'rgb(102, 0, 0)');
            $(".text-div").css('visibility', 'hidden');
            $("#red").css('visibility', 'visible');
        }
    });
});