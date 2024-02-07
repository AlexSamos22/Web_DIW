let tarjetas = document.querySelector(".tarjetas");
let tamanoPrimeraTarjeta = tarjetas.querySelector(".tarjeta").offsetWidth;
let flechas = document.querySelectorAll(".flecha");

// Añade un evento que hace que las flechas puedan deslizar el carrusel a ixquierda o derecha
flechas.forEach(flecha => {
    flecha.addEventListener("click", () => {
        // Calcula si el carrusel se mueve hacia la derecha o izquierda
        tarjetas.scrollLeft += flecha.id == "izquierda" ? -tamanoPrimeraTarjeta : tamanoPrimeraTarjeta;
    });
});

