const menu = document.querySelector('.menu__burger')

if (menu) {
    const menuBody = document.querySelector('.nav')
    menu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock')
        menu.classList.toggle('active')
        menuBody.classList.toggle('active')
    })
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});