//filter
const filter = document.querySelector('.filter__inner');
const filterOpen = document.querySelector('.catalog__filter-btn');

filterOpen.addEventListener('click', function (e) {
    e.preventDefault();
    filter.classList.toggle('active');
});