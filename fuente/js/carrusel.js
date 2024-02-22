let imagenes = document.querySelectorAll('.imagenes');
let img_actual = 0;
let f_derecha = document.getElementById("derecha");
let f_izquierda = document.getElementById("izquierda");

f_derecha.addEventListener("click", siguiente);
f_izquierda.addEventListener("click", anterior);



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



document.addEventListener("DOMContentLoaded", function() {
    let carrusel = document.getElementById('carrusel');
    let imagenes = carrusel.querySelectorAll('.imagenes img');

    function cambiarImagenes() {
        imagenes.forEach(function(imagen) {
            // Guardar la ruta original de la imagen
            let rutaOriginal = imagen.getAttribute('src');

            if (window.innerWidth < 800) {
                // Cambiar la imagen src con la imagen alternativa según la imagen original
                switch (rutaOriginal) {
                    case '/resident-evil-4.c6315ae9.jpg':
                        imagen.setAttribute('src', '/resident-evil-4-2.1c31d9a4.jpg');
                        break;
                    case '/finalFantasy-grande.0d89931a.png':
                        imagen.setAttribute('src', '/final-fantasy.891914fe.jpg');
                        break;
                    case '/Prince-persia-grande.c52aaa98.jpg':
                        imagen.setAttribute('src', 'Prince-persia.7825e0c2.jpg');
                        break;
                    case '/Starfield-grande.d72496d9.jpg':
                        imagen.setAttribute('src', '/tekken8-2.69463b41.jpg');
                        break;
                }
            }

            if (window.innerWidth >= 800) {
                // Cambiar la imagen src con la imagen alternativa según la imagen original
                switch (rutaOriginal) {
                    case '/resident-evil-4-2.1c31d9a4.jpg':
                        imagen.setAttribute('src', '/resident-evil-4.c6315ae9.jpg');
                        break;
                    case '/final-fantasy.891914fe.jpg':
                        imagen.setAttribute('src', '/finalFantasy-grande.0d89931a.png');
                        break;
                    case 'Prince-persia.7825e0c2.jpg':
                        imagen.setAttribute('src', '/Prince-persia-grande.c52aaa98.jpg');
                        break;
                    case '/tekken8-2.69463b41.jpg':
                        imagen.setAttribute('src', '/Starfield-grande.d72496d9.jpg');
                        break;
                }
            }
        });
    }

    cambiarImagenes();

    // Escucha los cambios de tamaño de la ventana y actualiza el carrusel
    window.addEventListener('resize', cambiarImagenes);
});

