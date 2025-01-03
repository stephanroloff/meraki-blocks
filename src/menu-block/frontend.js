document.addEventListener('DOMContentLoaded', function() {
    let menuIconButton = document.querySelector('.menu-icon img');
    let menuMobile = document.querySelector('.menu-mobile');
    let closeButton = document.querySelector('.close-button');
    
    menuIconButton.addEventListener('click', ()=>{
        menuMobile.classList.add('open');
    })
    
    closeButton.addEventListener('click', ()=>{
        menuMobile.classList.remove('open');
    })
});