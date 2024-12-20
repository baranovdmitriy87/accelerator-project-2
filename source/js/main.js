// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

/* Menu*/
const header = document.querySelector('.header');
const headerToggle = document.querySelector('.header__burger-button');
const overlay = document.querySelector('.overlay');

headerToggle.addEventListener('click', function () {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
    header.classList.add('header--opened');
    overlay.classList.add('is-active');
  } else {
    header.classList.add('header--closed');
    header.classList.remove('header--opened');
    overlay.classList.remove('is-active');
  }
});


