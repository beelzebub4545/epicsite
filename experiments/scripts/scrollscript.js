$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 300) {
            $("body").css('background-color', 'orange');
        } else if(scroll_pos > 600) {
            $("body").css('background-color', 'yellow');
        } else {
            $("body").css('background-color', 'red');
        }
    });
});