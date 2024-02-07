let carrusel = document.getElementById('carrusel');
// Establece el tiempo de intervalo para el desplazamiento automático (en milisegundos)
let intervalo = 3000; 
let direccion = 1; // 1 para adelante, -1 para atrás

// Función para cambiar automáticamente las imágenes
function carrusel_auto() {
    // Obtén todas las imágenes dentro del carrusel
    let imagenes = carrusel.querySelectorAll('img');
    
    // Obtiene el ancho total del carrusel
    let anchoCarrusel = carrusel.scrollWidth;
    
    // Calcula el ancho de una imagen
    let anchoImagen = imagenes[0].clientWidth;
    
    // Calcula el índice de la siguiente imagen
    let siguienteImagen = carrusel.scrollLeft + (anchoImagen * direccion);

    // Si llega al final del carrusel, cambia la dirección del desplazamiento
    /*
        (anchoCarrusel - carrusel.clientWidth) representa el espacio disponible dentro del carrusel que no se está mostrando actualmente en la pantalla.
    */
    if (siguienteImagen >= (anchoCarrusel - carrusel.clientWidth) || siguienteImagen <= 0) {
        direccion = -direccion;
    }

    // Desplaza automáticamente al siguiente conjunto de imágenes
    carrusel.scrollTo({
        left: siguienteImagen,
        behavior: 'smooth'
    });
}

// Establece el intervalo para cambiar automáticamente las imágenes
setInterval(carrusel_auto, intervalo);

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
                    case '../fuente/img/resident-evil-4.jpg':
                        imagen.setAttribute('src', '../fuente/img/resident-evil-4-2.jpg');
                        break;
                    case '../fuente/img/Skulls_and_bones_grande.jpg':
                        imagen.setAttribute('src', '../fuente/img/Skull_and_bones.jpg');
                        break;
                    case '../fuente/img/Prince-persia-grande.jpg':
                        imagen.setAttribute('src', '../fuente/img/Prince-persia.jpg');
                        break;
                    case '../fuente/img/Starfield-grande.jpg':
                        imagen.setAttribute('src', '../fuente/img/starfield.jpg');
                        break;
                }
            }

            if (window.innerWidth >= 800) {
                // Cambiar la imagen src con la imagen alternativa según la imagen original
                switch (rutaOriginal) {
                    case '../fuente/img/resident-evil-4-2.jpg':
                        imagen.setAttribute('src', '../fuente/img/resident-evil-4.jpg');
                        break;
                    case '../fuente/img/Skull_and_bones.jpg':
                        imagen.setAttribute('src', '../fuente/img/Skulls_and_bones_grande.jpg');
                        break;
                    case '../fuente/img/Prince-persia.jpg':
                        imagen.setAttribute('src', '../fuente/img/Prince-persia-grande.jpg');
                        break;
                    case '../fuente/img/starfield.jpg':
                        imagen.setAttribute('src', '../fuente/img/Starfield-grande.jpg');
                        break;
                }
            }
        });
    }

    cambiarImagenes();

    // Escucha los cambios de tamaño de la ventana y actualiza el carrusel
    window.addEventListener('resize', cambiarImagenes);
});

