let slide = document.querySelectorAll('.imagenes');
var current = 0;
let f_derecha = document.getElementById("derecha");
let f_izquierda = document.getElementById("izquierda");

f_derecha.addEventListener("click", next);
f_izquierda.addEventListener("click", prev);

function cls() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function next() {
    cls();
    if (current === slide.length - 1) current = -1;
    current++;

    slide[current].style.display = 'flex';
}

function prev() {
    cls();
    if (current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'flex';

}

function start() {
    cls();
    slide[current].style.display = 'flex';
}
start();

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

