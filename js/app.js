window.addEventListener('DOMContentLoaded', function () {

});


const menuBtn = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.close-btn_js');
const menuMobile = document.querySelector('.menu-mobile_js');


menuBtn.addEventListener('click', () => {
        menuMobile.classList.remove('hidden')
        menuBtn.classList.add('hidden')
        menuClose.classList.remove('hidden')
})

menuClose.addEventListener ('click', () => {
    menuClose.classList.add('hidden')
    menuBtn.classList.remove('hidden')
    menuMobile.classList.add('hidden')
})



