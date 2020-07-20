jQuery(document).ready(function () {

    jQuery(".section-nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            jQuery('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    jQuery('.section-nav-link').on('click', function () {
        jQuery('.section-nav-link.active').removeClass('active');
        jQuery(this).addClass('active');
    });

    jQuery('.hero-slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 300,
        dots: true,
        arrows: false,
        fade: false,
    });

    jQuery('.testimonial-list').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

})