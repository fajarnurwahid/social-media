// start: Social Swiper
(function () {
    const swiper = new Swiper("#social-swiper", {
        direction: "vertical",
    });
    document.querySelectorAll('[data-social-navigation="prev"]').forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            swiper.slidePrev();
        });
    });
    document.querySelectorAll('[data-social-navigation="next"]').forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            swiper.slideNext();
        });
    });
})();
// end: Social Swiper
