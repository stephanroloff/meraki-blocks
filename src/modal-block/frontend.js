//JAVASCRIPT JUST FRONTEND
let modalBackground = document.querySelector('.modal-background');
let modalContent = document.querySelector('.modal-content');
let closeButton = document.querySelector('.close-button');

modalBackground.addEventListener('click', ()=>{
    modalBackground.style.display = 'none';
});

modalContent.addEventListener('click', (e)=>{
    e.stopPropagation();
});

closeButton.addEventListener('click', (e)=>{
    e.stopPropagation();
});
