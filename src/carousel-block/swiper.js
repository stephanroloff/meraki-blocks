// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import {getDatavalues} from './helpers/getDataValues'

// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// The last 3 modules have to be loaded in style.css

setTimeout(() => {

  function startSwiper(element) {

    let {dataAutoplay, dataSpeed, dataDelay, dataVertical, dataShowBullets, dataShowArrows, dataEffect} = getDatavalues(element);

    const swiper = new Swiper(element, {
      // const swiper = new Swiper('.wp-block-create-block-carousel-block', {
      // Optional parameters

      effect: dataEffect,
      fadeEffect: {
        crossFade: true
      },
     
      direction: dataVertical == "true"? 'vertical' : 'horizontal',
      loop: true,
      modules: [Navigation, Pagination, Autoplay, EffectFade],

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

  }


  //NON-RESPONSIVE (Carousel always active)----------------

  let allCarousels = document.querySelectorAll('.wp-block-create-block-carousel-block');
  
  allCarousels.forEach(element => {
    startSwiper(element);
  });

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