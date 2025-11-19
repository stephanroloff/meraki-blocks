export default function scrollAnimation(lottieBlock) {
  const lottie = lottieBlock.querySelector("lottie-player");

  function updateAnimation() {
    const rect = lottie.getBoundingClientRect();

    const startInPercentage = lottieBlock.dataset.heightStart;
    const reverse = lottieBlock.dataset.reverse;
    const speed = lottieBlock.dataset.speed;

    const innerHeightStartInPercentage = startInPercentage/100;
    const innerHeightStartInPixels = window.innerHeight*innerHeightStartInPercentage;

    let percentage = Math.round(100 - ((rect.top + innerHeightStartInPixels) / window.innerHeight * 100));

    if(!reverse) {
      const clamped = Math.max(0, Math.min(percentage*speed, 99));  
      lottie.seek(clamped + "%");
    } else {
      const clamped = Math.max(0, (100-Math.min(percentage*speed, 99)));  
      lottie.seek(clamped + "%");
    }
    
  }

  window.addEventListener("scroll", updateAnimation);
  window.addEventListener("resize", updateAnimation);
  updateAnimation();
}



