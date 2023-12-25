export function styleChangeFunction(distanciaDesdeOriginal, speed) {
    let textForeground = document.querySelector('.text-foreground');
    let textBackground = document.querySelector('.text-background');
    
    if(distanciaDesdeOriginal<0){
        textForeground.style.width = `0%`
    }else{
        textForeground.style.width = `${distanciaDesdeOriginal * speed}%`
    }
    textForeground.style.overflow = 'hidden'
}