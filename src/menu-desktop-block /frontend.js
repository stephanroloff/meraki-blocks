//JAVASCRIPT JUST FRONTEND
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('[data-conectionid]');
    const allSubmenus = document.querySelectorAll('.submenu-block');
    
    links.forEach(link =>{
        const dataConectionId = link.getAttribute('data-conectionid');
        const submenu = document.querySelector(`[data-conectionid="${dataConectionId}"].submenu-block`);

        let submenuIntern = link.querySelector('.sub-menu-intern');

        if(submenuIntern && submenu){   
            submenuIntern.appendChild(submenu);
            submenuIntern.style.position = 'absolute'; 
            submenuIntern.style.left = '0'; 
        }
    })
});  




