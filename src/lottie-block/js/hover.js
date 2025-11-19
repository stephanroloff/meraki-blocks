//HOVER EFFECT ON LOTTIE PLAYER

export default function hoverAnimation(lottieBlock) {

    const otherTrigger = lottieBlock.dataset.otherTrigger;
    const clickWhileAnimRuns = lottieBlock.dataset.clickWhileAnimRuns;
    const reverse = lottieBlock.dataset.reverse;
    const forward = lottieBlock.dataset.forward;

    const lottie = lottieBlock.querySelector('lottie-player');
    let isPlaying = false;

    // By default, pause the animation
    lottie.stop();

    let trigger = lottieBlock;
    if(otherTrigger) {
        trigger = document.getElementById(otherTrigger);
    }

    lottie.addEventListener('load', () => {
        setAnimationDirection();
    });
    
    // Al hacer hover sobre el lottie-player
    trigger.addEventListener('mouseenter', () => {
        isPlaying = true;
        lottie.play();
    });

    
    trigger.addEventListener('mouseleave', () => {

            if(clickWhileAnimRuns === 'playuntilfinish') {
                return;
            } else if(clickWhileAnimRuns === 'stop') {
                setAnimationDirection();
                isPlaying = false;
            } else if(clickWhileAnimRuns === 'pause') {
                lottie.pause();
            } else if(clickWhileAnimRuns === 'reverse') {
                // setAnimationDirection();
                // lottie.play();
                if(reverse) {
                    lottie.setDirection(1);
                }else {
                    lottie.setDirection(-1);
                }
            }
    });


    lottie.addEventListener('complete', () => {
        // if(lottieBlock.dataset.forward) {
        //     const totalFrames = lottie.getLottie().totalFrames;
        //     const animation = lottie.getLottie();
        //     if(lottieBlock.dataset.reverse) {
        //         animation.goToAndStop(0, true);
        //     } else {
        //         animation.goToAndStop(totalFrames-1, true);
        //     }
        //     isPlaying = false;
        //     return;
        // }
        

        console.log('complete');
        isPlaying = false;
        setAnimationDirection();
    });

    // Set the animation direction based on the reverse attribute
    function setAnimationDirection() {
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