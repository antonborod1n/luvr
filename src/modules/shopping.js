document.addEventListener('DOMContentLoaded', function () {
    //menu
    let shoppingInner = document.querySelector('.shopping__inner');
    let shoppingPopups = document.querySelectorAll('.shopping__popup');

    shoppingInner.addEventListener('click', function (e) {
        let event = e.target;

        shoppingPopups.forEach(item => {
            item.classList.remove('active')
        });

        if (event.classList.contains('shopping__btn-info')) {
            let parent = event.closest('.shopping__item');
            parent.querySelector('.shopping__popup').classList.add('active');
        }
    })
})


