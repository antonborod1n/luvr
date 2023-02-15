//filter
const filter = document.querySelector('.filter__inner');
const filterOpen = document.querySelector('.catalog__filter-btn');
const filterReset = document.querySelector('.catalog__filter-btn-reset');
const filterBtnBox = document.querySelector('.filter__btn-box');
/* const menuOverlay = document.querySelector(".overlay"); */

filterOpen.addEventListener('click', function (e) {
    e.preventDefault();

    filter.classList.toggle('active');
    /* menuOverlay.classList.toggle("active"); */

    if (filter.classList.contains('active')) {
        filterReset.classList.add('active');
        /* menuOverlay.classList.add("active"); */
        filterBtnBox.classList.add('active');
    } else {
        filterReset.classList.remove('active');
        /*  menuOverlay.classList.remove("active"); */
        filterBtnBox.classList.remove('active');
    }
});

