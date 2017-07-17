// SlideShow
$('div.awSlider .carousel').carousel({
    pause: "hover",
    interval: 8000
});


//Якорь
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
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
    $('.icon-close,.top-slider-menu__li, .top-slider-menu__li-ico').click(function() { //выбираем класс icon-close и метод click
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


// Parallax
$(document).ready(function(){
    $window = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // Назначаем объект
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });

});
document.createElement("article");
document.createElement("section");

/* accordion*/
$( function() {
    $( "#accordion" ).accordion({
        heightStyle: "fill"
    });

    $( "#accordion-resizer" ).resizable({
        minHeight: 600,
        minWidth: 200,
        resize: function() {
            $( "#accordion" ).accordion( "refresh" );
        }
    });
} );
/* accordion*/

/* carouseller */
//carousel-works

$(function() {
    $('#third2').carouseller({
        // scrollSpeed: 3000,
        // autoScrollDelay: 1600,
        easing: 'linear'
    });
});

$(function() {
    $('#third3').carouseller({
        // scrollSpeed: 3000,
        // autoScrollDelay: 1600,
        easing: 'linear'
    });
});

/* carouseller */

