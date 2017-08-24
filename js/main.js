$(function () {
    /*sticky header functionality*/
    $(window).on("scroll", function () {
        $(window).scrollTop() > 1 ? ($(".header.header-sticky").addClass("sticky"), $(".header.navbar-fixed-top").addClass("sticky")) : ($(".header.header-sticky").removeClass("sticky"), $(".header.navbar-fixed-top").removeClass("sticky"))
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('#scroll2top').fadeIn();
        } else {
            $('#scroll2top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#scroll2top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('a.arrow_drop[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top-86
                }, 1000);
                return false;
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            }
        }
    })

});