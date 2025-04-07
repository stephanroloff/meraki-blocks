// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, A11y, EffectFade, Autoplay, Keyboard} from 'swiper';
import {getDatavalues} from './helpers/getDataValues'
import {enableA11yNavigation} from './a11y';

// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// The last 3 modules have to be loaded in style.css

setTimeout(() => {

  function startSwiper(element) {

    let {dataAutoplay, dataSpeed, dataDelay, dataVertical, dataShowBullets, dataShowArrows, dataEffect} = getDatavalues(element);

    const swiper = new Swiper(element, {
      effect: dataEffect,
      fadeEffect: {
        crossFade: true
      },
     
      direction: dataVertical == "true"? 'vertical' : 'horizontal',
      loop: true,
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      modules: [Navigation, Pagination, A11y, EffectFade, Autoplay, Keyboard],  
      

      // If we need pagination
      pagination: dataShowBullets == "true"? {
        el: '.swiper-pagination',
      } : false,

      // Navigation arrows
      navigation: dataShowArrows == "true"? {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      } : false,

      // // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },

      speed: dataSpeed || 1000,
      autoplay: dataAutoplay == "true"?
      {
        delay: dataDelay || 1000,
        disableOnInteraction: false,
      } : false,

      slidesPerView: '1',

    });

    //Hide arrows
    if(dataShowArrows !== "true"){
      let swiperBtnPrevClass = element.querySelector('.swiper-button-prev');
      let swiperBtnNextClass = element.querySelector('.swiper-button-next');
      
      swiperBtnPrevClass.style.display = 'none';
      swiperBtnNextClass.style.display = 'none';
    }

    //accessibility with keyboard
    enableA11yNavigation(swiper);
  }

  let allCarousels = document.querySelectorAll('.wp-block-create-block-carousel-main-block');
  allCarousels.forEach(element => {
    startSwiper(element);
  });

}, 100)