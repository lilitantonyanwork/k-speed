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


});