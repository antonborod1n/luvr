import Swiper from 'swiper/bundle';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-stock', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            290: {
                slidesPerView: 1,
                spaceBetween: 24
            },
        }
    });

    const hitProduct = new Swiper('.swiper-hit', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 24
            },
            440: {
                slidesPerView: 2,
                spaceBetween: 24
            },

            760: {
                slidesPerView: 3,
                spaceBetween: 24
            },

            940: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        }
    });


    const slider = document.querySelector('.slider-main');
    const sliderNav = document.querySelector('.slider-nav');

    let mySwiperNav = new Swiper(sliderNav, {
        slidesPerView: 5,
        spaceBetween: 10,
        loopedSlides: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    })

    let mySwiper = new Swiper(slider, {
        spaceBetween: 10,
        loopedSlides: 5,
        thumbs: {
            swiper: mySwiperNav,
        }
    })

    const sliderMains = new Swiper('.main-slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });


    /* color hearts */
    let favorLinks = document.querySelectorAll('.favor-link');

    favorLinks.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            item.classList.toggle('active');
        })
    })

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

    window.addEventListener('scroll', function () {
        if (window.scrollY > 1) {
            menu.classList.add('menu--hidden');
            headerBottom.classList.add('header__bottom--hidden');
        } else if (window.scrollY < 10 || window.innerWidth <= mediaSize) {
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

