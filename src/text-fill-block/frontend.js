//JAVASCRIPT JUST FRONTEND
import elementFillTextSpeed from './scroll-logic'

//Inputs
let elementSelector = '.wp-block-create-block-text-fill-block'
let dataAttributeSpeed = 'data-speed'
let dataAttributeBrowserHeight = 'data-browser-height'


//Get all elements
let textFillBlockElements = document.querySelectorAll('.wp-block-create-block-text-fill-block');


textFillBlockElements.forEach(element => {

    let browserHeight = element.getAttribute(dataAttributeBrowserHeight) / 10;
    let speed = element.getAttribute(dataAttributeSpeed) / 10;
    
    elementFillTextSpeed(
        element, //element selector
        speed, //speed (0-2)
        browserHeight  //browserHeight (0-1)
    );

})