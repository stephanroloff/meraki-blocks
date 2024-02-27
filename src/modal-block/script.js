//JAVASCRIPT FRONTEND AND EDITOR

document.addEventListener("DOMContentLoaded", function() {
    let allModalBlocks = document.querySelectorAll('.wp-block-create-block-modal-block');

    allModalBlocks.forEach(element=>{
        let closeButton = element.querySelector('.close-button');
        let modalBackground = element.querySelector('.modal-background');
        let modalButtonOpen = element.querySelector('.extra-element .modal-button');
        let modalLinkOpen = element.querySelector('.extra-element .modal-link');

        if(modalButtonOpen){
            modalButtonOpen.addEventListener('click', ()=>{
                modalBackground.style.display = 'flex';
            })
        }

        if(modalLinkOpen){
            modalLinkOpen.addEventListener('click', ()=>{
                modalBackground.style.display = 'flex';
            })
        }

        if(closeButton){
            closeButton.addEventListener('click', ()=>{
                modalBackground.style.display = 'none';
            })
        }
    })
    
});

