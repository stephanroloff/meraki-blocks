import { styleChangeFunction } from "../text-fill-block/styleChangeFunction";

export default function elementFillTextSpeed(element, speed, browserHeight){
  
    if(!element){
      return;
    }

    // Guarda la posición original del elemento respecto al inicion del body (valor fijo)
    let posicionOriginal = element.offsetTop;

    // Agrega un evento de desplazamiento
    window.addEventListener('scroll', function() {
        // console.log('Posicion Original', posicionOriginal); //valor fijo
        // console.log('Tamano ventana', window.innerHeight); //valor fijo
        // console.log('Posicion actual', window.scrollY);
        
        // Calcula la distancia entre la posición original y la posición actual
        let distanciaDesdeOriginal;
    
        if(posicionOriginal < window.innerHeight){
            distanciaDesdeOriginal = window.scrollY;
        }else{
            //se le resta el window.innerHeight porque el valor de la posicion se considera cuando el elemento toca el marco superior del browser.
            //sin embargo queremos considerar la altura cuando toca el marco inferior del browser, para eso se le resta window.innerHeight que es la altura del la ventana del browser.
            distanciaDesdeOriginal = window.scrollY - (posicionOriginal-(window.innerHeight * browserHeight));  
        }
        // console.log('distanciaDesdeOriginal', distanciaDesdeOriginal);

        styleChangeFunction(distanciaDesdeOriginal, speed, element);
    });
}