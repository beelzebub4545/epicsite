$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 5*screen.height) {
            $("body").css('background-color', 'purple');
        } else if(scroll_pos > 4*screen.height) {
            $("body").css('background-color', 'blue');
        } else if(scroll_pos > 3*screen.height) {
            $("body").css('background-color', 'green');
        } else if(scroll_pos > 2*screen.height) {
            $("body").css('background-color', 'yellow');
        } else if(scroll_pos > screen.height) {
            $("body").css('background-color', 'orange');
        } else {
            $("body").css('background-color', 'red');
        }
    });
});