import Swiper from 'swiper';
import { Navigation, Pagination, A11y, EffectFade, Autoplay, Keyboard, Parallax } from 'swiper';
// import Swiper and modules styles
import {enableA11yNavigation} from './a11y';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {getDatavalues} from './helpers/getDataValues'

function startSwiper(element) {
  let {
    dataAutoplay, 
    dataSpeed, 
    dataDelay, 
    dataVertical, 
    dataShowBullets, 
    dataShowArrows, 
    dataEffect,
    dataAmountBreakpoints,
    dataBreakpoint1,
    dataBreakpoint2,
    dataBreakpoint3,
    dataBreakpoint4,
    dataBreakpoint5,
    dataBreakpoint6,
  } = getDatavalues(element);


  // Inicializa el objeto breakpoints vacío
  let breakpointsValues = {};
  // Crea un array con los valores de los breakpoints y sus configuraciones
  const breakpointsData = [
    { key: dataBreakpoint1, slides: 2 },
    { key: dataBreakpoint2, slides: 3 },
    { key: dataBreakpoint3, slides: 4 },
    { key: dataBreakpoint4, slides: 5 },
    { key: dataBreakpoint5, slides: 6 },
  ];

  if(dataAmountBreakpoints==1){
    breakpointsValues = {slidesPerView: 1};
  }else{
    // Agrega solo los breakpoints que están definidos y son válidos
    breakpointsData.slice(0, Number(dataAmountBreakpoints)-1).forEach(({ key, slides }) => {
      if (key) {
        breakpointsValues[key] = { slidesPerView: slides };
      }
    });
  }

  let swiperSelector = element.querySelector('.swiper');

  const swiper = new Swiper(swiperSelector, {
      modules: [Navigation, Pagination, A11y, EffectFade, Autoplay, Keyboard, Parallax],  
      direction: dataVertical? 'vertical' : 'horizontal',
      loop: true,
      speed: dataSpeed || 1000,
      a11y: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      effect: dataEffect, //slide, fade
      fadeEffect: {
        crossFade: true
      },
      autoplay: dataAutoplay?
      {
        delay: dataDelay || 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: false
      } : false,

      pagination: dataShowBullets? {
        el: '.swiper-pagination',
        type: 'bullets', // 'progressbar' | 'bullets' | 'fraction' | 'custom'
        clickable: false
      } : false,

      navigation: dataShowArrows? {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      } : false,
  
      //-------------------------------------------------------------------------------
      //Responsive breakpoints
      // Asignar breakpoints a Swiper
      breakpoints: Object.keys(breakpointsValues).length > 0 ? breakpointsValues : undefined,
      //-------------------------------------------------------------------------------


      // width: 800,
      // height: 100,
      
      // keyboard: {
      //   enabled: true,
      //   onlyInViewport: false,
      // },

      // parallax: {
      //   enabled: false
      // },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
  });

  //Hide arrows
  if(!dataShowArrows){
    let swiperBtnPrevClass = element.querySelector('.swiper-button-prev');
    let swiperBtnNextClass = element.querySelector('.swiper-button-next');
    
    swiperBtnPrevClass.style.display = 'none';
    swiperBtnNextClass.style.display = 'none';
  }
  
  //accessibility with keyboard
  enableA11yNavigation(swiper);
  
  //Extern Buttons
  const nextSibling= element.nextElementSibling;

  let leftButton = nextSibling?.querySelector('.btn-extern-left');
  let rightButton = nextSibling?.querySelector('.btn-extern-right');
  
  leftButton?.addEventListener('click', function() {
    swiper.slidePrev();
  });

  rightButton?.addEventListener('click', function() {
    swiper.slideNext();
  });
}


let allCarousels = document.querySelectorAll('.wp-block-create-block-carousel-dynamisch');

allCarousels?.forEach(element => {
  startSwiper(element);
});
