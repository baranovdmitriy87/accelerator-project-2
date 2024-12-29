// https://swiperjs.com/get-started#installation

// import 'swiper/css/pagination';


import { initBurgerMenu } from './modules/burger-menu';
// import { sliderThumbs, sliderImages } from './modules/swiper-slider';
import { initSliderHero } from './modules/swiper-hero';
// import { getSlider } from './modules/swiper-hero';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initBurgerMenu();
    // getSlider();
    initSliderHero();
  });
});
