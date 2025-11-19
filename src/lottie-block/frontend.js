//JAVASCRIPT JUST FRONTEND
import scrollAnimation from './js/scroll.js';
import hoverAnimation from './js/hover.js';
import autoplayAnimation from './js/autoplay.js';
import clickAnimation from './js/click.js';

document.addEventListener('DOMContentLoaded', function() {
    // let animationTrigger = document.querySelector('.lottie-wrapper').getAttribute('data-animation-trigger');
    let allLottieBlocks = document.querySelectorAll('.wp-block-create-block-lottie-block .lottie-wrapper');
    
    allLottieBlocks.forEach(lottieBlock => {
        let animationTrigger = lottieBlock.getAttribute('data-animation-trigger');

        if(animationTrigger === 'onscroll') {
            scrollAnimation(lottieBlock);
        }
        if(animationTrigger === 'onhover') {
            hoverAnimation(lottieBlock);
        }
        if(animationTrigger === 'autoplay') {
            autoplayAnimation(lottieBlock);
        }
        if(animationTrigger === 'onclick') {
            clickAnimation(lottieBlock);
        }
    });
});


