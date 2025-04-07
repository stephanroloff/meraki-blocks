//Get data values from Frontend

export function getDatavalues(element) { 

    let dataAutoplay = element.getAttribute('data-autoplay');
    let dataSpeed = element.getAttribute('data-speed');
    let dataDelay = element.getAttribute('data-delay');
    let dataVertical = element.getAttribute('data-vertical');
    let dataShowBullets = element.getAttribute('data-show-bullets');
    let dataShowArrows = element.getAttribute('data-show-arrows');
    let dataEffect = element.getAttribute('data-effect');
    let dataAmountBreakpoints = element.getAttribute('data-amount-breakpoints');

    let dataBreakpoint1 = parseInt(element.getAttribute('data-breakpoint-1'));
    let dataBreakpoint2 = parseInt(element.getAttribute('data-breakpoint-2'));
    let dataBreakpoint3 = element.getAttribute('data-breakpoint-3');
    let dataBreakpoint4 = element.getAttribute('data-breakpoint-4');
    let dataBreakpoint5 = element.getAttribute('data-breakpoint-5');
    let dataBreakpoint6 = element.getAttribute('data-breakpoint-6');

    return {
        dataAutoplay, 
        dataSpeed, 
        dataDelay, 
        dataVertical, 
        dataShowBullets, 
        dataShowArrows, 
        dataEffect,
        dataAmountBreakpoints,
        dataBreakpoint1,
        dataBreakpoint2,
        dataBreakpoint3,
        dataBreakpoint4,
        dataBreakpoint5,
        dataBreakpoint6
    }
}