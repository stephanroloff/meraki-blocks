//JAVASCRIPT JUST FRONTEND


document.addEventListener("DOMContentLoaded", function() {
    mobileMenuFunction();
});

function mobileMenuFunction() {
    let burgerMenu = document.querySelector('.burger-image-container img');
    let closeMenu = document.querySelector('.close-image-container img');
    let menuContent = document.querySelector('.mobile-list');

    burgerMenu?.addEventListener('click', ()=>{
        burgerMenu.parentNode?.classList.toggle('active');
        closeMenu.parentNode?.classList.toggle('active');
        menuContent?.classList.toggle('active');
    })
    closeMenu?.addEventListener('click', ()=>{
        burgerMenu.parentNode?.classList.toggle('active');
        closeMenu.parentNode?.classList.toggle('active');
        menuContent?.classList.toggle('active');
    })
}

