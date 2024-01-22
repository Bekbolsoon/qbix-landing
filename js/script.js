// Swiper
let mySwiper1;
let mySwiper2;
function initSwipers() {
  if (!mySwiper1) {
    mySwiper1 = new Swiper('.swiper1', {
      direction: 'horizontal',
      spaceBetween: 20,
      slidesPerView: 'auto',

      breakpoints: {
        992: {
          spaceBetween: 110,
          initialSlide: 1
        }
      },

      navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
      }
    });
  }
  if (!mySwiper2) {
    mySwiper1 = new Swiper('.swiper2', {
      direction: 'horizontal',
      spaceBetween: 20,
      slidesPerView: 'auto',

      breakpoints: {
        992: {
          spaceBetween: 110,
          initialSlide: 1
        }
      },

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

// Animated lines
document.addEventListener('DOMContentLoaded', function () {
  const lines = document.querySelectorAll('.line');

  const updateLines = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    lines.forEach((line, index) => {
      const speed = 0.1;
      const newPosition = scrollTop * speed;
      line.style.transform = `translateY(${newPosition}px)`;
    });
  };

  updateLines();

  window.addEventListener('scroll', updateLines);
});