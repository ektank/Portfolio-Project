
    //$('.nav').waypoint('sticky');


    // Custom JavaScript for the Side Menu and Smooth Scrolling


    // Contact display
    $(".what").click(function(){
        $(".overlay").fadeIn(1200);
    });
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    
        $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /** Sticky test **/
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});

//$(window).load(function(){
   // $("#top").
//})
//$(window).load(function(){
    //$(".is-sticky").sticky({ topSpacing: 0 });
//});