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