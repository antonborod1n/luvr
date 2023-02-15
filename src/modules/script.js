import $ from "jquery";
import "slick-carousel";

$(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: true,
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
                breakpoint: 1512,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
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

    $('.goods-content__slide-thumb').slick({
        asNavFor: '.goods-content__slide-big',
        focusOnSelect: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    });

    $('.goods-content__slide-big').slick({
        asNavFor: '.goods-content__slide-thumb',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    //search
    const mediaSize = 640;
    const serchLink = document.querySelector('.search-link');
    const serchPopup = document.querySelector('.search-popup');
    const menu = document.querySelector('.menu');

    serchLink.addEventListener('click', function () {
        serchPopup.classList.toggle('active');
    })

    //location
    let modalLocation = document.querySelector('.modal-location');
    let locationBtn = document.querySelector('.app-location');

    locationBtn.addEventListener('click', function () {
        modalLocation.classList.toggle('active');
    })

    //header
    let headerBottom = document.querySelector('.header__bottom');
    let header = document.querySelector('.header');

    /* header.addEventListener('mouseover', function () {
        menu.classList.toggle('menu--hidden');
        headerBottom.classList.toggle('header__bottom--hidden');
    }); */

    window.addEventListener('scroll', function () {
        if (window.scrollY > 1) {
            menu.classList.add('menu--hidden');
            headerBottom.classList.add('header__bottom--hidden');
        } else if (window.scrollY < 10 || window.innerWidth <= mediaSize) {
            console.log(window.scrollY)
            menu.classList.remove('menu--hidden');
            headerBottom.classList.remove('header__bottom--hidden');
        }
    });

    //menu mob
    const burger = document.querySelector('.burger');
    const mobMenu = document.querySelector('.header__bottom');
    const menuOverlay = document.querySelector(".menu-overlay");

    burger.addEventListener("click", toggleNav);
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
        mobMenu.classList.toggle('active');
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }


});

