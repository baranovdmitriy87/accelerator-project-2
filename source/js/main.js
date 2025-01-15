// https://swiperjs.com/get-started#installation

// import 'swiper/css/pagination';


import { initBurgerMenu } from './modules/burger-menu';
// import { sliderThumbs, sliderImages } from './modules/swiper-slider';
import { initSliderHero } from './modules/init-hero-swiper';
import { initReviewsSlider } from './modules/init-reviews-swiper';
// import { getSlider } from './modules/swiper-hero';
// import { getHeroSlider } from './modules/swiper-hero';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initSliderHero();
    initReviewsSlider();
    initBurgerMenu();
    // getHeroSlider()
  });
});
