export default function autoplayAnimation(lottieBlock) {
  const lottie = lottieBlock.querySelector("lottie-player");

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
  updateAnimation();
}



