//Get data values from Frontend

export function getDatavalues() { 
    let dataAutoplay, dataSpeed, dataDelay, dataVertical, dataShowBullets, dataShowArrows; 
    let allCarousels = document.querySelectorAll('.wp-block-create-block-carousel-block');

    allCarousels.forEach(element => {
        dataAutoplay = element.getAttribute('data-autoplay');
        dataSpeed = element.getAttribute('data-speed');
        dataDelay = element.getAttribute('data-delay');
        dataVertical = element.getAttribute('data-vertical');
        dataShowBullets = element.getAttribute('data-show-bullets');
        dataShowArrows = element.getAttribute('data-show-arrows');
    });

    return {dataAutoplay, dataSpeed, dataDelay, dataVertical, dataShowBullets, dataShowArrows}
}