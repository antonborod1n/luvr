import $ from "jquery";
import "slick-carousel";

$(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 500
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 500
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500
                }
            }
        ],
    });

    $('.app-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 500,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 500
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 500
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500
                }
            }
        ],
    });

    $('.stock__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 500,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 500
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 500
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500
                }
            }
        ],
    });
});


//search
const serchLink = document.querySelector('.searh-link');
const serchPopup = document.querySelector('.serch-popup');
const menu = document.querySelector('.menu');

serchLink.addEventListener('click', function () {
    serchPopup.classList.toggle('serch-popup--active');
})

//header
window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        menu.classList.add('menu--hidden')
    } else if (window.scrollY < 10) {
        console.log(window.scrollY)
        menu.classList.remove('menu--hidden');
    }
});

