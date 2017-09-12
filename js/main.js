$(function () {
    /*sticky header functionality*/
    $(window).on("scroll", function () {
        if($(window).width() > 768){
            ($(window).scrollTop() > 1 ? ($(".header.header-sticky").addClass("sticky"), $(".header.navbar-fixed-top").addClass("sticky")) : ($(".header.header-sticky").removeClass("sticky"), $(".header.navbar-fixed-top").removeClass("sticky")))
            if($(window).scrollTop() > 700)
                $(".header.header-sticky").addClass("full-white")
            else
                $(".header.header-sticky").removeClass("full-white")
        }

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
                    scrollTop: target.offset().top-84
                }, 1000);
                return false;
            }
        }
    });
    $('.testimonals .owl-carousel').owlCarousel({
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

    $('.navbar-collapse').on('show.bs.collapse', function() {
      $('.header .nav-logo').addClass('menu_visible'), $('html').addClass('_hidden'), $('header#menu').addClass('menu_visible')
    }).on('hidden.bs.collapse', function() {
      $('.header .nav-logo').removeClass('menu_visible'), $('html').removeClass('_hidden'), $('header#menu').removeClass('menu_visible')

    });

    gridpostsElChange()

    $(window).on('resize', function(){
        gridpostsElChange()        
    })
});

function gridpostsElChange(){
    var _a = $('.grid-posts ._first'), _b = $('.grid-posts ._second'), _c = _b.find('.grid-post');
    var _owl = $('.grid-posts ._carousel ._first'), _owlEl = _owl.data('owlCarousel');
    if($(window).width() < 767){
        _c.addClass('_moved_').appendTo(_a);
        _owl.owlCarousel({
            loop: true,
            items: 1
        })
    }
    else{
        _owl.trigger('destroy.owl.carousel');
        var _d = _a.find('._moved_');
        _d.appendTo(_b)
    }
    
/*Jquery End*/ 
}