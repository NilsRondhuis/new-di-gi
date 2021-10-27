import Swiper from 'swiper';

new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    simulateTouch: true,
    grabCursor: true,
    loop: true,
});