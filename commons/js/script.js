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

/* Count-block */
$(document).ready(function(){
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа

        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 4000
            });

            show = false;
        }
    });
});
/* Count-block */