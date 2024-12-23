// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { initBurgerMenu } from './modules/burger-menu';
// import { sliderThumbs, sliderImages } from './modules/swiper-slider';
// import { getSlider } from './modules/swiper-slider';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initBurgerMenu();
    // getSlider();
  });
});

Swiper.use([Navigation, Pagination]);


// init Swiper:
const mySwiper = new Swiper('.hero__slider', {
  direction: 'horizontal',
  // loop: true,
  centeredSlides: true,
  slidesPerView: 0,
  spaceBetween: 0,
  slidesPerGroup: 1,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      // centeredSlides: true
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
