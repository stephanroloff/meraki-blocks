export function accordionVerticalLoaderLogik(element){
    setTimeout(() => {
        let loader = element.querySelector('.loader');
        let accordionContainer = element.querySelector('.accordion-container');
    
        loader.style.display = 'none';
        accordionContainer.style.display = 'flex';
    
    }, 1000);
}