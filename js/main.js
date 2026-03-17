var swiper = new Swiper(".auto-gallery", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
});