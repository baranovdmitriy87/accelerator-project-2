// https://swiperjs.com/get-started#installation
// // import Swiper from "swiper";
// // import {Navigation, Pagination} from "swiper/modules";
// // import 'swiper/css';

import { initBurgerMenu } from './modules/burger-menu';
// // // import { sliderThumbs, sliderImages } from './modules/swiper-slider';
// // // import { getSlider } from './modules/swiper-slider';



window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initBurgerMenu();
  });
});



// const headerToggle = document.querySelector('.header__burger-button');
// const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
// const menuLinks = header.querySelectorAll('.site-list__link');


// const burgerToggle = () => {
//   const isClosed = header.classList.toggle('header--closed');
//   header.classList.toggle('header--opened', !isClosed);
//   overlay.classList.toggle('is-active', !isClosed);
//   document.body.style.overflow = isClosed ? 'auto' : 'hidden';
// };

// const closeburgerToggle = () => {
//   header.classList.remove('header--opened');
//   header.classList.add('header--closed');
//   overlay.classList.remove('is-active');
// };

// document.addEventListener('keydown', function (evt) {
//   if (evt.key === 'Escape') {
//     closeburgerToggle();
//   }
// });

// menuLinks.forEach((link) => {
//   link.addEventListener('click', event => {
//     event.preventDefault();
//     const targetId = link.getAttribute('href');
//     const targetElement = document.querySelector(targetId);

//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//     burgerToggle();
//   });
// });


// headerToggle.addEventListener('click', burgerToggle);

// export { burgerToggle };


