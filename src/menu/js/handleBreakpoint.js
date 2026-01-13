export default function handleBreakpoint() {
    const menuBlock = document.querySelector('.wp-block-create-block-menu-block');
    const menuDesktop = menuBlock.querySelector('.menu-desktop');
    const menuBurger = menuBlock.querySelector('.burger-menu');
    const languageSelector = menuBlock.querySelector('.language-selector');
    
    const breakpointValue = menuBlock.dataset.breakpoint;
    
    function handleResize() {
      const width = window.innerWidth;
    
      if (width < breakpointValue) {
        menuDesktop.style.display = "none";
        menuBurger.style.display = "flex";
        if(languageSelector){
          languageSelector.style.display = "none";
        }
      } else {
        menuDesktop.style.display = "flex";
        menuBurger.style.display = "none";
        if(languageSelector){
          languageSelector.style.display = "flex";
        }
      }
    }
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
}