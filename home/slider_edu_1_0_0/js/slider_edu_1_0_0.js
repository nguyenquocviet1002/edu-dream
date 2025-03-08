var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});