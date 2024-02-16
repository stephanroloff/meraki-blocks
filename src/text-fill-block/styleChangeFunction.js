export function styleChangeFunction(distanciaDesdeOriginal, speed, element) {
    let textForeground = element.querySelector('.text-foreground');
    let textBackground = element.querySelector('.text-background');

    // console.log('distanciaDesdeOriginal', distanciaDesdeOriginal);
    
    if(distanciaDesdeOriginal<0){
        // textForeground.style.width = `0%`
        textForeground.style.backgroundSize = `0% 100%`
    }else{
        // textForeground.style.width = `${distanciaDesdeOriginal * speed}%`
        textForeground.style.backgroundSize = `${distanciaDesdeOriginal * speed}% 100%`
    }
    textForeground.style.overflow = 'hidden'
}