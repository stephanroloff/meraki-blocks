//JAVASCRIPT FRONTEND AND EDITOR

document.addEventListener("DOMContentLoaded", function () {
  
    let burgerMenu = document.querySelector('.wp-block-create-block-menu-block .burger-menu');
    let navigation = document.querySelector('.navigation');

    if(burgerMenu && navigation){
        burgerMenu.addEventListener('click', ()=>{
            burgerMenu.classList.toggle('active');
            navigation.classList.toggle('active');
        })
    }
});