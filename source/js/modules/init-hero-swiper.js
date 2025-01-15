import Swiper from 'swiper';
import { Pagination } from "swiper/modules";
import {isMobileDevice} from '../utils/is-mobile-device';



Swiper.use([Pagination]);

const initSliderHero = () => {
  const mySwiper = new Swiper('[data-hero-slider]', {
    loop: true,
    allowTouchMove: isMobileDevice(),
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,

    pagination: {
      el: '[data-hero-pagination]',
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
          el: '[data-hero-pagination]',
          clickable: true,
        },
      },
    },
  });
};

export { initSliderHero };
