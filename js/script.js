// Swiper
let mySwiper1;
let mySwiper2;
function initSwipers() {
  if (!mySwiper1) {
    mySwiper1 = new Swiper('.swiper1', {
      direction: 'horizontal',
      initialSlide: 1,
      spaceBetween: 110,

      navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
      }
    });
  }
  if (!mySwiper2) {
    mySwiper1 = new Swiper('.swiper2', {
      direction: 'horizontal',
      initialSlide: 1,
      spaceBetween: 110,

      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initSwipers();
});

window.addEventListener('resize', function() {
  initSwipers();
});