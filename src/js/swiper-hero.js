import Swiper, { Pagination, Mousewheel, Autoplay } from 'swiper';

Swiper.use([Pagination, Mousewheel, Autoplay]);

new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    simulateTouch: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    speed: 1500,
});