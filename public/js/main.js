$(document).ready(function(){

    // Owl carousel for blog
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: false,
        responsiveClass:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1,
            },
            // breakpoint from 480 up
            480 : {
                items : 2,
            },
            // breakpoint from 768 up
            768 : {
                items : 3,
            }
        }
    });

  });