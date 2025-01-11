import Swiper from 'swiper';
import { Pagination } from "swiper/modules";


Swiper.use([Pagination]);

const initSliderHero = () => {
  const mySwiper = new Swiper('.hero__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,

    pagination: {
      el: '.swiper-pagination',
      clickable: false,

    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 1,
        allowTouchMove: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    },
  });
};

export { initSliderHero };
