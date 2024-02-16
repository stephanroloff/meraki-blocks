//JAVASCRIPT FRONTEND AND EDITOR
import { isElementInBrowser } from "../helpers/isElementInBrowser";


function activateFunctionWhenElementIsInsideBrowserWindow(element){
    let elementIntern = element.querySelector('.emerging-text');
    elementIntern.classList.add('active');
}

setTimeout(() => {
    let elements = document.querySelectorAll('.wp-block-create-block-emerging-text-block')
    
    elements.forEach( element => {
        
        isElementInBrowser({
            element,
            rootMargin:'-10%',
            activateFunctionWhenElementIsInsideBrowserWindow
        });
    })
}, 200);