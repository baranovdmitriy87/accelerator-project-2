import Swiper from 'swiper';
import { Pagination } from "swiper/modules";
// import "swiper/swiper-bundle.css";
// import "../";
// import 'swiper/css/navigation';
// import "swiper/css/pagination";

// const sliderHero = document.querySelector('.hero__slider');
// const sliderHeroPagination = document.querySelector('.swiper-pagination');


// const setSliderHero = new Swiper(sliderHero, {
//   pagination: {
//     el: sliderHeroPagination,
//     clickable: true,
//   },
//   loop: true,
//   // centeredSlides: true,
//   slidesPerView: 1,
//   spaceBetween: 0,
// });

// const initSliderHero = () => {
//   if (document.body.contains(sliderHero)) {
//     setSliderHero();
//   }
// };

// export { initSliderHero };

Swiper.use([Pagination]);


const initSliderHero = () => {
  const mySwiper = new Swiper('.hero__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    // breakpoints: {
    //   320: {
    //     slidesPerView: 0,
    //   },
    //   768: {
    //     slidesPerView: 0,
    //   },
    //   1440: {
    //     slidesPerView: 1,

    //   },
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

export { initSliderHero };
