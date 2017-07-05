// SlideShow
$('div.awSlider .carousel').carousel({
    pause: "hover",
    interval: 8000
});




// Mobile menu
/* Open menu */
var main = function() {
    $('.icon-menu').click(function() {
        $('.menu').animate({left: '0px'}, 200);
        $('.icon-menu').css({'display' : 'none!important'});
        $('body').animate({left: '100%'}, 200);
    });


    /* Close menu */
    $('.icon-close,.top-slider-close, .services-close, .shop-close, .portfolio-close, .cooperation-close, .reviews-close, .contacts-close').click(function() { //выбираем класс icon-close и метод click
        $('.menu').animate({left: '-100%'}, 200);
        $('body').animate({left: '0px'}, 200);
    });
};
$(document).ready(main);