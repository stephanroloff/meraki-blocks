//HOVER EFFECT ON LOTTIE PLAYER

// export default function hoverAnimation(lottieBlock) {

//     const otherTrigger = lottieBlock.dataset.otherTrigger;
//     const clickWhileAnimRuns = lottieBlock.dataset.clickWhileAnimRuns;
//     const reverse = lottieBlock.dataset.reverse;
//     const forward = lottieBlock.dataset.forward;
    

//     const lottie = lottieBlock.querySelector('lottie-player');
//     let isPlaying = false;

//     // By default, pause the animation
//     lottie.stop();

//     let trigger = lottieBlock;
//     if(otherTrigger) {
//         trigger = document.getElementById(otherTrigger);
//     }

//     // If the lottie is ready, set the animation direction
//     lottie.addEventListener('ready', () => {
//         setAnimationDirection();
//     });
//     // Fallback for when the lottie is not ready immediately    
//     setTimeout(() => {
//         setAnimationDirection();
//     }, 10);

    
//     // Al hacer hover sobre el lottie-player
//     trigger.addEventListener('mouseenter', () => {
//         isPlaying = true;
//         lottie.play();
//         if(reverse) {
//             lottie.setDirection(-1);
//         }else {
//             lottie.setDirection(1);
//         }
//     });

    
//     trigger.addEventListener('mouseleave', () => {

//             if(clickWhileAnimRuns === 'playuntilfinish') {
//                 return;
//             } else if(clickWhileAnimRuns === 'stop') {
//                 setAnimationDirection();
//                 isPlaying = false;
//             } else if(clickWhileAnimRuns === 'pause') {
//                 lottie.pause();
//             } else if(clickWhileAnimRuns === 'invertDirection') {
//                 if(reverse) {
//                     lottie.setDirection(1);
//                 }else {
//                     lottie.setDirection(-1);
//                 }
//             }
//     });


//     lottie.addEventListener('complete', () => {
//         if(forward) {
//             return;
//         }
        
//         console.log('complete');
//         isPlaying = false;
//         setAnimationDirection();
//     });

//     // Set the animation direction based on the reverse attribute
//     function setAnimationDirection() {
//         const totalFrames = lottie.getLottie().totalFrames;
//         const animation = lottie.getLottie();

//         if(reverse) {
//             animation.goToAndStop(totalFrames-1, true);
//             lottie.setDirection(-1);
//         }else {
//             animation.goToAndStop(0, true);
//             lottie.setDirection(1);
//         }
//     }

// }

//HOVER EFFECT ON LOTTIE PLAYER

export default async function hoverAnimation(lottieBlock) {

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

    trigger.addEventListener('mouseenter', () => {

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

    trigger.addEventListener('mouseleave', () => {
        
        if(once == "1" && counter >= 1) {
            return;
        }

        switch(clickWhileAnimRuns) {
            case 'playuntilfinish':
                if(isComplete){
                    isComplete = false;
                    return;
                }
                playuntilfinish();
                break;
            case 'stop':
                if(isComplete){
                    isComplete = false;
                    return;
                }
                stop();
                break;
            case 'pause':
                if(isComplete){
                    return;
                }
                pause();
                break;
            case 'invertDirection':
                if(isComplete){
                    return;
                }
                invertDirection();
                break;
        }
    });


    lottie.addEventListener('complete', () => {
        counter++;
        isPlaying = false;
        isComplete = true;
        console.log('complete', isComplete);
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
        if(isPlaying) {
            return;
        }else{
            if(forward) {
                setInitialConfiguration();
            }
            lottie.play();
            isPlaying = true;
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