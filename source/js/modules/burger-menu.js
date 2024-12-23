import { scrollUpload } from '../utils/scroll-upload.js';

const headerToggle = document.querySelector('.header__burger-button');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const menuLinks = header.querySelectorAll('.site-list__link');


const initBurgerMenu = () => {
  const burgerToggle = () => {
    const isClosed = header.classList.toggle('header--closed');
    header.classList.toggle('header--opened', !isClosed);
    overlay.classList.toggle('is-active', !isClosed);
    document.body.style.overflow = isClosed ? 'auto' : 'hidden';
    onDocumentKeyDown();
  };

  const closeburgerToggle = () => {
    header.classList.remove('header--opened');
    header.classList.add('header--closed');
    overlay.classList.remove('is-active');
  };

  const onDocumentKeyDown = () => {
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeburgerToggle();
      }
    });
  };

  menuLinks.forEach((link) => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        overlay.classList.toggle('is-active');
        header.classList.remove('header--opened');
        header.classList.add('header--closed');
        document.body.style.overflow = 'auto';
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  headerToggle.addEventListener('click', burgerToggle);
};

scrollUpload();

export { initBurgerMenu };
