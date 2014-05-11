
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



$(document).ready(function() {
    var stickyNavTop = $('header').offset().top;
  
    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
           
        if (scrollTop > stickyNavTop) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    };
  
    stickyNav();
      
    $(window).scroll(function() {
        stickyNav();
    });
});
