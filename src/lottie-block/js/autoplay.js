export default function autoplayAnimation(lottieBlock) {
  const lottie = lottieBlock.querySelector("lottie-player");
  const reverse = lottieBlock.dataset.reverse;
  let startActive = false;

  lottie.addEventListener("ready", () => {
    console.log("ready");
    if(!startActive) {
    setInitialConfiguration();
    updateAnimation();
    startActive = true;
    }
  });
  // Fallback for when the lottie is not ready immediately    
  setTimeout(() => {
    console.log("timeout");
    if(!startActive) {
      setInitialConfiguration();
      updateAnimation();
      startActive = true;
    }
  }, 100);

  function updateAnimation() {
    const rect = lottie.getBoundingClientRect();
    const startInPercentage = lottieBlock.dataset.heightStart;
    let percentage = Math.round(100 - (rect.top  / window.innerHeight * 100));
    
    if(percentage >= startInPercentage) {
      lottie.play();
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
  }
}


