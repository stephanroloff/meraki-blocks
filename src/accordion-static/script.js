
setTimeout(() => {
    let accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        let panel = accordion.nextElementSibling;
        
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('accordion-active');

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });

        if(accordion.classList.contains('accordion-active')){
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })


}, 1000)