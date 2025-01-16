import Swiper from 'swiper';
import { Navigation } from "swiper/modules";
import { isMobileDevice } from '../utils/is-mobile-device';

Swiper.use([Navigation]);


const initReviewsSlider = () => {
  const mySwyper = new Swiper('[data-reviews-slider]', {
    direction: 'horizontal',
    allowTouchMove: isMobileDevice(),
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 300,

    breakpoints: {
      1440: {
        spaceBetween: 120,
      },
    },

    navigation: {
      nextEl: '[data-reviews-next]',
      prevEl: '[data-reviews-prev]',
    },
  });
}

export { initReviewsSlider };
