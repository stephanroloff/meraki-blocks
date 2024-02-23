export function loaderWithTime(element){
    setTimeout(() => {
        let loader = element.querySelector('.loader-spinner');
        loader.style.display = 'none';
    }, 10000);
}