import { initBurgerMenu } from './modules/burger-menu';
// import {Form} from './modules/form-validate';
// import {startValidation} from './modules/form-validate';
import { initSliderHero } from './modules/init-hero-swiper';
import { initReviewsSlider } from './modules/init-reviews-swiper';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initSliderHero();
    initReviewsSlider();
    initBurgerMenu();
    // startValidation();
    // const form = new Form();
    // window.form = form;
    // form.init();
  });
});
