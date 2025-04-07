export function enableA11yNavigation(swiper) {
    document.querySelector('.swiper-button-next')?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            swiper.slideNext();
        }
    });

    document.querySelector('.swiper-button-prev')?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            swiper.slidePrev();
        }
    });
}
