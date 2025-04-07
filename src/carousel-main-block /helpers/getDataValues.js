//Get data values from Frontend

export function getDatavalues(element) { 
    let dataAutoplay, dataSpeed, dataDelay, dataVertical, dataShowBullets, dataShowArrows, dataEffect; 

    dataAutoplay = element.getAttribute('data-autoplay');
    dataSpeed = element.getAttribute('data-speed');
    dataDelay = element.getAttribute('data-delay');
    dataVertical = element.getAttribute('data-vertical');
    dataShowBullets = element.getAttribute('data-show-bullets');
    dataShowArrows = element.getAttribute('data-show-arrows');
    dataEffect = element.getAttribute('data-effect');

    return {dataAutoplay, dataSpeed, dataDelay, dataVertical, dataShowBullets, dataShowArrows, dataEffect}
}