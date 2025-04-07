let masonryClassName = ".wp-block-create-block-masonry-block-referenzen";

function adjustLayout(numberOfColumnsParameter){

    document.addEventListener("DOMContentLoaded", function () {
        const numberOfColumns = numberOfColumnsParameter;
        const masonryContainer = document.querySelector(`${masonryClassName}`);
        const gallery = document.querySelectorAll(`${masonryClassName} .masonry-item`);
    
        const container = document.createElement('div');
        masonryContainer.appendChild(container);
    
        for (let index = 0; index < numberOfColumns; index++) {
            const column = document.createElement('div');
            column.classList.add(`column-${index+1}`);
            column.classList.add(`column`);
            masonryContainer.appendChild(column);
        }
    
        for (let index = 0; index < gallery.length; index++) {
            
            const rest = index % numberOfColumns;
    
            if(rest==0){
                const column = document.querySelector(`${masonryClassName} .column-${rest+1}`);
                column.appendChild(gallery[index]);
                column.style.width = (100/numberOfColumns)+"%";
            }
            if(rest==1){
                const column = document.querySelector(`${masonryClassName} .column-${rest+1}`);
                column.appendChild(gallery[index]);
                column.style.width = (100/numberOfColumns)+"%";
            }
            if(rest==2){
                const column = document.querySelector(`${masonryClassName} .column-${rest+1}`);
                column.appendChild(gallery[index]);
                column.style.width = (100/numberOfColumns)+"%";
            }
            if(rest==3){
                const column = document.querySelector(`${masonryClassName} .column-${rest+1}`);
                column.appendChild(gallery[index]);
                column.style.width = (100/numberOfColumns)+"%";
            }
            if(rest==4){
                const column = document.querySelector(`${masonryClassName} .column-${rest+1}`);
                column.appendChild(gallery[index]);
                column.style.width = (100/numberOfColumns)+"%";
            }
        }
    });
}

const masonryContainer = document.querySelector(`${masonryClassName}`);

const columns = masonryContainer.getAttribute("data-columns"); 

const breakpoint1 = masonryContainer.getAttribute("data-breakpoint-1"); 
const breakpoint2 = masonryContainer.getAttribute("data-breakpoint-2"); 
const breakpoint3 = masonryContainer.getAttribute("data-breakpoint-3"); 
const breakpoint4 = masonryContainer.getAttribute("data-breakpoint-4"); 

let mediaQuery1='0';
let mediaQuery2='0';
let mediaQuery3='0';
let mediaQuery4='0';
let mediaQuery5='0';

if (parseInt(columns) === 3) {
    mediaQuery1 = window.matchMedia(`(min-width: 0px) and (max-width: ${breakpoint1}px)`);
    mediaQuery2 = window.matchMedia(`(min-width: ${breakpoint1}px) and (max-width: ${breakpoint2}px)`);
    mediaQuery3 = window.matchMedia(`(min-width: ${breakpoint2}px)`);

} else if (parseInt(columns) === 4) {
    mediaQuery1 = window.matchMedia(`(min-width: 0px) and (max-width: ${breakpoint1}px)`);
    mediaQuery2 = window.matchMedia(`(min-width: ${breakpoint1}px) and (max-width: ${breakpoint2}px)`);
    mediaQuery3 = window.matchMedia(`(min-width: ${breakpoint2}px) and (max-width: ${breakpoint3}px)`);
    mediaQuery4 = window.matchMedia(`(min-width: ${breakpoint3}px)`); 
} else if (parseInt(columns) === 5) {
    mediaQuery1 = window.matchMedia(`(min-width: 0px) and (max-width: ${breakpoint1}px)`);
    mediaQuery2 = window.matchMedia(`(min-width: ${breakpoint1}px) and (max-width: ${breakpoint2}px)`);
    mediaQuery3 = window.matchMedia(`(min-width: ${breakpoint2}px) and (max-width: ${breakpoint3}px)`);
    mediaQuery4 = window.matchMedia(`(min-width: ${breakpoint3}px) and (max-width: ${breakpoint4}px)`);
    mediaQuery5 = window.matchMedia(`(min-width: ${breakpoint4}px)`); 
}

function handleMediaQueryChange(query) {
    if (query.matches) {
        if (query === mediaQuery1) {
            adjustLayout(1);
        } else if (query === mediaQuery2) {
            adjustLayout(2);
        } else if (query === mediaQuery3) {
            adjustLayout(3);
        } else if (query === mediaQuery4) {
            adjustLayout(4);
        } else if (query === mediaQuery5) {
            adjustLayout(5);
        }
    }
}

mediaQuery1.addEventListener('change', () => handleMediaQueryChange(mediaQuery1));
mediaQuery2.addEventListener('change', () => handleMediaQueryChange(mediaQuery2));
mediaQuery3.addEventListener('change', () => handleMediaQueryChange(mediaQuery3));
if(columns==4){
    mediaQuery4.addEventListener('change', () => handleMediaQueryChange(mediaQuery4));
}else if(columns==5){
    mediaQuery4.addEventListener('change', () => handleMediaQueryChange(mediaQuery4));
    mediaQuery5.addEventListener('change', () => handleMediaQueryChange(mediaQuery5));
}

// Ejecutar la función para verificar el estado inicial
handleMediaQueryChange(mediaQuery1);
handleMediaQueryChange(mediaQuery2);
handleMediaQueryChange(mediaQuery3);
if(columns==4){
    handleMediaQueryChange(mediaQuery4);
}else if(columns==5){
    handleMediaQueryChange(mediaQuery4);
    handleMediaQueryChange(mediaQuery5);
}
