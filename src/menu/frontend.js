//JAVASCRIPT JUST FRONTEND

//Breakpoint
document.addEventListener("DOMContentLoaded", function () {
    const menuBlock = document.querySelector('.wp-block-create-block-menu-block');
    const menuDesktop = menuBlock.querySelector('.menu-desktop');
    const menuBurger = menuBlock.querySelector('.burger-menu');
    
    const breakpointValue = menuBlock.dataset.breakpoint;
    
    function handleResize() {
      const width = window.innerWidth;
    
      if (width < breakpointValue) {
        menuDesktop.style.display = "none";
        menuBurger.style.display = "flex";
    
      } else {
        menuDesktop.style.display = "flex";
        menuBurger.style.display = "none";
      }
    }
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
})


//Active Page
function normalizePath(path) {
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

document.querySelectorAll('.menu-desktop a').forEach(link => {
  const linkPath = normalizePath(link.pathname);
  const currentPath = normalizePath(window.location.pathname);

  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});



