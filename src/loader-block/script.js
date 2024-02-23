//JAVASCRIPT FRONTEND AND EDITOR

function loaderWithTime(loaderSpinnerContainer, childrenContainer, dataTime=2000){
    setTimeout(() => {   
        loaderSpinnerContainer.style.display = 'none';
        childrenContainer.style.display = 'block';
        childrenContainer.style.visibility = 'visible';
        // childrenContainer.style.position = 'static';
    }, dataTime);
}


document.addEventListener('DOMContentLoaded', function() {
    let allLoaderSpinnerContainer = document.querySelectorAll('.wp-block-create-block-loader-block');
    
    allLoaderSpinnerContainer.forEach(element =>{
        let loaderSpinnerContainer = element.querySelector('.loader-spinner-container');
        let childrenContainer = element.querySelector('.children-container');
        let dataTime = loaderSpinnerContainer.getAttribute('data-time');
    
        loaderWithTime(loaderSpinnerContainer, childrenContainer, dataTime);
    })
});
