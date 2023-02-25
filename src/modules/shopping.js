document.addEventListener('DOMContentLoaded', function () {
    //menu
    let shopping = document.querySelector('.shopping');
    let shoppingPopups = document.querySelectorAll('.shopping__popup');

    function delegete(box, eventname, selector, btn) {
        box.addEventListener(eventname, function (e) {
            let event = e.target;

            shoppingPopups.forEach(item => {
                item.classList.remove('active')
            });

            if (event.classList.contains(btn)) {
                let parent = event.closest(selector);
                console.log(parent)
                if (parent != null && box.contains(parent)) {
                    parent.querySelector('.shopping__popup').classList.add('active');
                }
            }
        })
    }

    delegete(shopping, 'click', '.shopping__item', 'shopping__btn-info');
})


