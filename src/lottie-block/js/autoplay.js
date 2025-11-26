export default function autoplayAnimation(lottieBlock) {
  
  const otherTrigger = lottieBlock.dataset.otherTrigger;
  const autoplayAction = lottieBlock.dataset.autoplayAction;
  const clickWhileAnimRuns = lottieBlock.dataset.clickWhileAnimRuns;
  const lottie = lottieBlock.querySelector("lottie-player");
  const reverse = lottieBlock.dataset.reverse;
  const delay = lottieBlock.dataset.delay;
  let startActive = false;
  let trigger = lottieBlock;
  let isPlaying = false;

  lottie.addEventListener("ready", () => {
    if(!startActive) {
    setInitialConfiguration();
    updateAnimation();
    startActive = true;
    isPlaying = true;
    }
  });
  // Fallback for when the lottie is not ready immediately    
  setTimeout(() => {

    if(!startActive) {
      setInitialConfiguration();
      updateAnimation();
      startActive = true;
      isPlaying = true;
    } 
    //setting the event listener for the autoplay action
    if(autoplayAction === 'onclick') {
      clickEvent();
    } else if(autoplayAction === 'onhover') {
      hoverEvent();
    }

  }, 100);

  function updateAnimation() {
    const rect = lottie.getBoundingClientRect();
    const startInPercentage = lottieBlock.dataset.heightStart;
    let percentage = Math.round(100 - (rect.top  / window.innerHeight * 100));
    
    if(percentage >= startInPercentage) {
      setTimeout(() => {
        lottie.play();
      }, delay);
    }
  }

  window.addEventListener("scroll", updateAnimation);
  window.addEventListener("resize", updateAnimation);


  function setInitialConfiguration() {      
    //setting direction based on the reverse attribute
    const totalFrames = lottie.getLottie().totalFrames;
    const animation = lottie.getLottie();
    if(reverse) {
        animation.goToAndStop(totalFrames-1, true);
        lottie.setDirection(-1);
    }else {
        animation.goToAndStop(0, true);
        lottie.setDirection(1);
    }
    //setting trigger for the event listener
    if(otherTrigger) {
      trigger = document.getElementById(otherTrigger);
    }
  }

  function clickEvent() {
    trigger.addEventListener('click', () => {

      switch (clickWhileAnimRuns) {
        case 'stop':
          lottie.stop();
          break;
        case 'pause':
          if(isPlaying) {
            lottie.pause();
            isPlaying = false;
          } else {
            lottie.play();
            isPlaying = true;
          }
          break;
        case 'invertDirection':
          if(isPlaying) {
            if(reverse) {
              lottie.setDirection(1);
            } else {
              lottie.setDirection(-1);
            }
            isPlaying = false;
          } else {
            if(reverse) {
              lottie.setDirection(-1);
            } else {
              lottie.setDirection(1);
            }
            isPlaying = true;
          }
          break;
      
        default:
          break;
      }
      
    });
  }

  function hoverEvent() {
    trigger.addEventListener('mouseenter', () => {
      switch (clickWhileAnimRuns) {
        case 'stop':
          lottie.stop();
          isPlaying = false;
          break;
        case 'pause':
            lottie.pause();
            isPlaying = false;
          break;
        case 'invertDirection':
          if(reverse) {
            lottie.setDirection(1);
          } else {
            lottie.setDirection(-1);
          }
          break;
      
        default:
          break;
      }
    });
    trigger.addEventListener('mouseleave', () => {
      switch (clickWhileAnimRuns) {
        case 'stop':
          break;
        case 'pause':
            lottie.play();
            isPlaying = true;
          break;
        case 'invertDirection':
          if(reverse) {
            lottie.setDirection(-1);
          } else {
            lottie.setDirection(1);
          }
          break;
      
        default:
          break;
      }
      
    });
  }
}


