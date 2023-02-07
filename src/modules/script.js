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

//tabs
/* const tabsBtn = document.querySelectorAll('.goods__tabs-control-btn');
const tabsContent = document.querySelectorAll('.goods__tabs-content-block');
const tabsControl = document.querySelector('.goods__tabs-control');
const active = 'goods__tabs-control-btn--active';

function hideTabContent() {
    tabsContent.forEach(item => {
        item.style.display = 'none';
    });

    tabsBtn.forEach(item => {
        item.classList.remove(active);
    });
}

function showTabsContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabsBtn[i].classList.add(active);
}

hideTabContent();
showTabsContent();

tabsControl.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('goods__tabs-control-btn')) {
        tabsBtn.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabsContent(i);
            }
        });
    }
}); */

let shoppingMoreBtn = document.querySelector('.shopping__link-more');
let shoppinDrop = document.querySelector('.shopping__drop-box');


shoppingMoreBtn.addEventListener('click', function () {
    shoppinDrop.classList.toggle('active');
});

let shoppinAddBtn = document.querySelector('.shopping__btn-info');
let shoppinPopup = document.querySelector('.shopping__popup');

shoppinAddBtn.addEventListener('click', function () {
    shoppinPopup.classList.toggle('active');
});