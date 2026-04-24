var swiper = new Swiper(".auto-gallery", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".review__list", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
       0:{
           slidesPerView: 1,
       },
        640: {
            slidesPerView: 2,

        },
        // When window width is >= 1024px
        1024: {
            slidesPerView: 3,

        },
    },
});


document.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.querySelector('header .nav');
    const menu_btn = document.querySelector('.btn__menu');
    menu_btn.addEventListener('click', function (){
        menu.classList.toggle('active');
    })
    const modal__btn = document.querySelector('.banner .btn__red');
    const modal = document.querySelector('.modal');
    const modal__close = document.querySelector('.modal__close');
    const body = document.querySelector('body');
    modal__btn.addEventListener('click', function (e){
        e.preventDefault();
        modal.classList.toggle('open');
        body.classList.toggle('no-scroll');
    })
    modal__close.addEventListener('click', function (){
        modal.classList.toggle('open');
        body.classList.toggle('no-scroll');

    })

    const diagnostic__btn = document.querySelectorAll('.diagnostics__item .btn__plus');

    diagnostic__btn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diagnostics__item').forEach(item => {
                item.classList.remove('active');
            });
            btn.closest('.diagnostics__item').classList.add('active');
        });
    });
});