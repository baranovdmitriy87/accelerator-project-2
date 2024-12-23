import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";


Swiper.use([Navigation, Pagination]);

// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';


const getSlider = () => {
  if (document.querySelector('.hero__swiper')) {
    const juriSwiper = document.querySelector('.hero__swiper');
    const juriSwiperWrapper = document.querySelector('.hero__list-swiper');
    // const juriButtons = document.querySelectorAll('.juri__button');

    // juriSwiper.classList.remove('juri__swiper--nojs');
    // juriSwiperWrapper.classList.remove('juri__swiper-wrapper--nojs');
    // juriButtons.forEach((juriButton) => {
    //   juriButton.classList.remove('juri__button--nojs');
    // });

    // eslint-disable-next-line no-unused-vars,no-undef
    const Swiper = new Swiper('.hero__swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
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
        },
      },

      navigation: {
        nextEl: '.juri__button--next',
        prevEl: '.juri__button--prev',
      },
    });
  }
};

export { getSlider };
