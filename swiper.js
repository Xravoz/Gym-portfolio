const swiper = new Swiper(".swiper", {
  inverse: true,
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
