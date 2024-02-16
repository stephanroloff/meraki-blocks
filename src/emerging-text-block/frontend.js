//JAVASCRIPT JUST FRONTEND
let allEmergingTextContainer = document.querySelectorAll('.emerging-text-container');

allEmergingTextContainer.forEach( emergingTextContainer => {
    let duration = emergingTextContainer.getAttribute('data-duration');
    let delay = emergingTextContainer.getAttribute('data-delay');

    let emergingText = emergingTextContainer.querySelector('.emerging-text');
    
    emergingText.style.animationDuration = `${duration}ms`;
    emergingText.style.animationDelay = `${delay}ms`;
})

