let imagenes = document.querySelectorAll('.imagenes');
let img_actual = 0;
let f_derecha = document.getElementById("derecha");
let f_izquierda = document.getElementById("izquierda");

f_derecha.addEventListener("click", siguiente);
f_izquierda.addEventListener("click", anterior);


//Controla las imagenes que se van mostrando aplicando o quitando la clase oculto
function siguiente() {
    if (img_actual === imagenes.length - 1) {
        img_actual = 0;
        imagenes[img_actual].classList.toggle('oculto');
        imagenes[imagenes.length -1].classList.toggle('oculto');
    } else {
        img_actual++;
        imagenes[img_actual].classList.toggle('oculto');
        imagenes[img_actual-1].classList.toggle('oculto');
    }
}

//Lo mismo que la funcion siguiente pero cuando se va al reves
function anterior() {
    if (img_actual === 0){
        imagenes[img_actual].classList.toggle('oculto');
        img_actual = imagenes.length - 1;
        imagenes[img_actual].classList.toggle('oculto');
    }else{
        img_actual--;
        imagenes[img_actual].classList.toggle('oculto');
        imagenes[img_actual+1].classList.toggle('oculto');
    }
    
}
