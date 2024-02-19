// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import {getDatavalues} from './helpers/getDataValues'

// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// The last 3 modules have to be loaded in style.css

setTimeout(() => {

  function startSwiper() {

    let {dataAutoplay, dataSpeed, dataDelay, dataVertical, dataShowBullets, dataShowArrows} = getDatavalues();
    console.log(typeof(dataVertical));


    const swiper = new Swiper('.wp-block-create-block-carousel-block', {
      // Optional parameters
      // direction: 'vertical',
      direction: dataVertical == "true"? 'vertical' : 'horizontal',
      // loop: false,
      loop: true,
      modules: [Navigation, Pagination, Autoplay],

      // If we need pagination
      pagination: dataShowBullets == "true"? {
        el: '.swiper-pagination',
      } : false,

      // Navigation arrows
      // navigation: dataShowArrows == "true"? {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // } : false,
      navigation: false,

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      speed: dataSpeed || 1000,
      autoplay: dataAutoplay == "true"?
      {
        delay: dataDelay || 1000,
        disableOnInteraction: false,
      } : false,

      slidesPerView: '1',
    });

  }

  //NON-RESPONSIVE (Carousel always active)----------------

  startSwiper();

  //RESPONSIVE---------------------------------------------
  // let swiperBtnPrevClass = document.querySelector('.swiper-button-prev');
  // let swiperBtnNextClass = document.querySelector('.swiper-button-next');
  // let x = window.matchMedia("(max-width: 700px)");

  // if (x.matches) { // If media query matches
  //   startSwiper();
  // } else {
  //   swiperBtnPrevClass.style.display = 'none';
  //   swiperBtnNextClass.style.display = 'none';
  // }
  //-------------------------------------------------------

}, 100)