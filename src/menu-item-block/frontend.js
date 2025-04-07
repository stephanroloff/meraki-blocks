//JAVASCRIPT JUST FRONTEND

document.addEventListener("DOMContentLoaded", () => {
    
    const allLinks = document.querySelectorAll('.menu-item-block a');
    let currentPath = window.location.href
    allLinks.forEach(link => {
        if(currentPath.includes(link.href)){
            link.classList.add('active');
        }
    })
});