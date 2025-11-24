//CLICK EFFECT ON LOTTIE PLAYER

export default async function clickAnimation(lottieBlock) {

    const otherTrigger = lottieBlock.dataset.otherTrigger;
    const clickWhileAnimRuns = lottieBlock.dataset.clickWhileAnimRuns;
    const reverse = lottieBlock.dataset.reverse;
    const forward = lottieBlock.dataset.forward;
    const once = lottieBlock.dataset.once;
    let counter = 0;

    const lottie = lottieBlock.querySelector('lottie-player');
    let trigger = lottieBlock;
    let isPlaying = false;
    let isComplete = false;

    await animationInitialize();

    trigger.addEventListener('click', () => {

        if(once == "1" && counter >= 1) {
            return;
        }

        switch(clickWhileAnimRuns) {
            case 'playuntilfinish':
                playuntilfinish();
                break;
            case 'stop':
                stop();
                break;
            case 'pause':
                pause();
                break;
            case 'invertDirection':
                invertDirection();
                break;
        }
    });


    lottie.addEventListener('complete', () => {
        console.log('complete');
        counter++;
        isPlaying = false;
        isComplete = true;
        if(forward) {
            return;
        }
        setInitialConfiguration();
    });


    function setInitialConfiguration() {      
        // By default, pause the animation
        lottie.stop();  
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

    function animationInitialize() {
        return new Promise((resolve) => {
            // If the lottie is ready, set the animation direction
            lottie.addEventListener('ready', () => {
                setInitialConfiguration();
                resolve();
            });
           // Fallback for when the lottie is not ready immediately    
            setTimeout(() => {
                setInitialConfiguration();
                resolve();
            }, 10);
        });
    }

    function playuntilfinish() {
        if(!isPlaying) {
            if(forward) {
                setInitialConfiguration();
            }
            lottie.play();
            isPlaying = true;
            return;
        }else{
            return;
        }
    }

    function stop() {
        if(isPlaying) {
            console.log("Aqui");
            setInitialConfiguration();
            isPlaying = false;
            return;
        }else{
            setInitialConfiguration();
            lottie.play();
            isPlaying = true;
            return;
        }
    }

    function pause() {
        if(isPlaying) {
            lottie.pause();
            isPlaying = false;
            return;
        }else{
            if(isComplete) {
                setInitialConfiguration();
                isComplete = false;
            }
            lottie.play();
            isPlaying = true;
            return;
        }
    }

    function invertDirection() {
        if(isPlaying) {
            if(reverse) {
                lottie.setDirection(1);
            }else {
                lottie.setDirection(-1);
            }
            isPlaying = false;
            return;
        }else{
            if(isComplete) {
                setInitialConfiguration();
                isComplete = false;
            }
            if(reverse) {
                lottie.setDirection(-1);
            }else {
                lottie.setDirection(1);
            }
            lottie.play();
            isPlaying = true;
            return;
        }

    }


}