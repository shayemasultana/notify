new WOW().init();

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 4
        },
        600: {
            items: 8
        },
        1000: {
            items: 21
        }
    }
})
