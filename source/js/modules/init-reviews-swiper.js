import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { isMobileDevice } from '../utils/is-mobile-device';

Swiper.use([Navigation]);


const initReviewsSlider = () => {
  const setSwyperReview = new Swiper('.reviews__slider', {
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
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },
  });
  return setSwyperReview;
};

export { initReviewsSlider };
