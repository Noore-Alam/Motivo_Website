$('#logo_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    items: 4,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

$('.counter').counterUp({
    delay: 10,
    time: 2000
});


$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("header_bg");
        } else {
            $("header").removeClass("header_bg");
        }
    })
})