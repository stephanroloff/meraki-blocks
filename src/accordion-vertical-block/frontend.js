//JAVASCRIPT JUST FRONTEND
import { accordionVerticalLoaderLogik }  from './loader-logic.js'
import { accordionVerticalLogik }  from './accordion-vertical-logic.js'

let allVerticalAccordions = document.querySelectorAll('.wp-block-create-block-accordion-vertical');

allVerticalAccordions.forEach(element =>{
    accordionVerticalLoaderLogik(element);
    accordionVerticalLogik(element);
})