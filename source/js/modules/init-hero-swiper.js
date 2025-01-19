import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import {isMobileDevice} from '../utils/is-mobile-device';


Swiper.use([Pagination]);

const initSliderHero = () => {
  const setSwiperHero = new Swiper('.hero__slider', {
    loop: true,
    allowTouchMove: isMobileDevice(),
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,

    pagination: {
      el: '.hero__swiper-pagination',
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
          el: '.hero__swiper-pagination',
          clickable: true,
        },
      },
    },
  });
  return setSwiperHero;
};

export { initSliderHero };
