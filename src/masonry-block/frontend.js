// // //JAVASCRIPT JUST FRONTEND
import {buildMasonry} from "./script";

function widthDisplayLayout(){
    const mainNode = document.querySelector('.wp-block-create-block-masonry-block');

    const columnsValue = mainNode.getAttribute('data-columns');
    const breakpointSmallValue = mainNode.getAttribute('data-breakpoint-small');
    const breakpointMediumValue = mainNode.getAttribute('data-breakpoint-medium');
    const breakpointLargeValue = mainNode.getAttribute('data-breakpoint-large');
    const breakpointExtraLargeValue = mainNode.getAttribute('data-breakpoint-extra-large');

    let displayWidth = window.innerWidth;

    let breakpointSmall = breakpointSmallValue;
    let breakpointMedium = breakpointMediumValue;
    let breakpointLarge = breakpointLargeValue;
    let breakpointExtraLarge = breakpointExtraLargeValue;

    if (displayWidth < breakpointSmall) {
        buildMasonry(1);
    } 
    if (displayWidth > breakpointSmall)  {
        buildMasonry(2);
    } 
    if (displayWidth > breakpointMedium) {
        buildMasonry(3);
    } 
    if (displayWidth > breakpointLarge) {
        if(columnsValue == 3) return;
        buildMasonry(4);
    } 
    if (displayWidth > breakpointExtraLarge) {
        if(columnsValue == 3) return;
        if(columnsValue == 4) return;
        buildMasonry(5);
    }  
}

window.addEventListener('resize', () => {
    widthDisplayLayout();
});

window.addEventListener('DOMContentLoaded', () => {
    widthDisplayLayout();
});

