/*------------------------------Slider 0*/
var pos = 0;
var totalSlides = $('.slider-container > ul > li').length;
var sliderWidth = $('.slider-container').width();

function playSlider() {
    $('.slider-container > ul').width(sliderWidth * totalSlides);
    var autoSlider = setInterval(slideRight, 4000);
    $.each($('.slider-container > ul > li'), function() {
        var li = document.createElement('li');
        $('.pagination-wrap ul').append(li);
    });
    pagination();
}

$(document).ready(function() {
    playSlider();
    /*---------------------------------*/
    setInterval(function() {
        moveLeft();
    }, 5000);

    var slideCount = $('.slider-one > ul > li').length;
    var slideWidth = $('.slider-one > ul > li').width();
    var slideHeight = $('.slider-one > ul > li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('.slider-one').css({ width: slideWidth, height: slideHeight });

    $('.slider-one > ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });

    $('.slider-one > ul > li:last-child').prependTo('.slider-one > ul');

    function moveLeft() {
        $('.slider-one > ul').animate({
            left: +slideWidth
        }, 200, function() {
            $('.slider-one > ul > li:last-child').prependTo('.slider-one > ul');
            $('.slider-one > ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider-one > ul').animate({
            left: -slideWidth
        }, 200, function() {
            $('.slider-one > ul > li:first-child').appendTo('.slider-one > ul');
            $('.slider-one > ul').css('left', '');
        });
    };

    $('a.control_prev').click(function() {
        moveLeft();
    });

    $('a.control_next').click(function() {
        moveRight();
    });

    /*---------------------------------*/
});

function slideLeft() {
    pos--;
    if (pos == -1) { pos = totalSlides - 1; }
    $('.slider-container > ul').css('left', -(sliderWidth * pos));
    pagination();
}

function slideRight() {
    pos++;
    if (pos == totalSlides) { pos = 0; }
    $('.slider-container > ul').css('left', -(sliderWidth * pos));
    pagination();
}

function pagination() {
    $('.pagination-wrap ul li').removeClass('active');
    $('.pagination-wrap ul li:eq(' + pos + ')').addClass('active');
}

/* -------------------------menu mobile 1*/
$('.menu-toggle').click(function() {

    $('ul').toggleClass('opening');
    $(this).toggleClass('open');

})