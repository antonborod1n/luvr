//filter
const filterMain = document.querySelector('.filter');
const filterInner = document.querySelector('.filter__inner');
const filterOpen = document.querySelector('.catalog__filter-btn');
const filterBtnBox = document.querySelector('.filter__btn-box');
const filterReset = document.querySelector('.catalog__filter-btn-box');
const menuOverlay = document.querySelector(".overlay");

filterOpen.addEventListener("click", toggleFilter);
menuOverlay.addEventListener("click", toggleFilter);

function toggleFilter() {
    filterInner.classList.toggle('active');
    menuOverlay.classList.toggle("active");

    if (filterInner.classList.contains('active')) {
        filterMain.classList.add('active');
        filterBtnBox.classList.add('active');
        filterReset.classList.add('active');
    } else {
        filterMain.classList.remove('active');
        filterReset.classList.remove('active');
        filterBtnBox.classList.remove('active');
        menuOverlay.classList.remove("active");
    }
}

