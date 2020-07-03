$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 1500) {
            $("body").css('background-color', 'purple');
        } else if(scroll_pos > 2400) {
            $("body").css('background-color', 'blue');
        } else if(scroll_pos > 1800) {
            $("body").css('background-color', 'green');
        } else if(scroll_pos > 1200) {
            $("body").css('background-color', 'yellow');
        } else if(scroll_pos > 600) {
            $("body").css('background-color', 'orange');
        } else {
            $("body").css('background-color', 'red');
        }
    });
});