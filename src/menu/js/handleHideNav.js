export default function handleHideNav() {
    const nav = document.querySelector('.navigation');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) { 
            // Scroll down y más de 100px → hide
            nav.classList.add('hide');
        } else {
            // Scroll up o menos de 100px → show
            nav.classList.remove('hide');
        }

        lastScroll = currentScroll;

        // opacity just at the top
        if (currentScroll < 20) {
            nav.classList.add('at-top');
        } else {
            nav.classList.remove('at-top');
        }
    });
}