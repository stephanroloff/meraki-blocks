//HOVER EFFECT ON LOTTIE PLAYER

export default function clickAnimation(lottieBlock) {
    
    const otherTrigger = lottieBlock.dataset.otherTrigger;
    const lottie = lottieBlock.querySelector('lottie-player');
    let isPlaying = false;
    let isPaused = false;
    let isOnce = false;
    // By default, pause the animation
    lottie.stop();

    let trigger = lottieBlock;
    if(otherTrigger) {
        trigger = document.getElementById(otherTrigger);
    }

    // When clicking on the lottie-player
    trigger.addEventListener('click', () => {
        const clickWhileAnimRuns = lottieBlock.dataset.clickWhileAnimRuns;
        const reverse = lottieBlock.dataset.reverse;
        const once = lottieBlock.dataset.once;
        // const forward = lottieBlock.dataset.forward;

        if (isPlaying) {

            if(clickWhileAnimRuns === 'playuntilfinish') {
                return;
            } else if(clickWhileAnimRuns === 'stop') {
                lottie.stop();
                isPlaying = false;
            } else if(clickWhileAnimRuns === 'pause') {
                if(isPaused) {
                    lottie.play();
                    isPaused = false;
                } else {
                    lottie.pause();
                    isPaused = true;
                }
            } else if(clickWhileAnimRuns === 'reverse') {
                if(!reverse) {
                    lottie.setDirection(-1);
                    lottie.play();
                } else {
                    lottie.setDirection(1);
                    lottie.play();
                }
            }
        } else {
            
            if(isOnce && once) {
                return;
            }

            if(reverse) {
                // We set the animation to the end
                const totalFrames = lottie.getLottie().totalFrames;
                const animation = lottie.getLottie();
                animation.goToAndStop(totalFrames, true);
                lottie.setDirection(-1);
            }
            if(clickWhileAnimRuns === 'reverse') {
                lottie.loop = false;
            }
            
            lottie.play();
            isPlaying = true;
            isOnce = true;

        }
    });

    lottie.addEventListener('complete', () => {
        if(lottieBlock.dataset.forward) {
            const totalFrames = lottie.getLottie().totalFrames;
            const animation = lottie.getLottie();
            if(lottieBlock.dataset.reverse) {
                animation.goToAndStop(0, true);
            } else {
                animation.goToAndStop(totalFrames-1, true);
            }
            isPlaying = false;
            return;
        }

        console.log('complete');
        isPlaying = false;
        lottie.stop();
        lottie.setDirection(1);

    });
}