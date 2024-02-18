let  item_categoria = document.querySelectorAll('.item_categoria');
let productos = document.querySelectorAll('.tarjeta');
let botonFiltro = document.querySelector(".boton_filtro");
let filtro = document.querySelector(".filtro");


window.addEventListener('load', ajustarMenu);
window.addEventListener('resize', ajustarMenu);


let contenedor_global = document.querySelector(".contenedor-global");
let seccion_relleno = document.createElement("section");
seccion_relleno.style.background = "#e4e4e4";
seccion_relleno.style.width="100%";
seccion_relleno.style.height="400px";

item_categoria.forEach((item) =>{
    item.addEventListener('click', (event) =>{
        // Remueve la clase 'active' de todos los elementos
        item_categoria.forEach((item) => {
            item.classList.remove('item_categoria-activo');
        });

        // Agrega la clase 'active' al elemento clicado
        item.classList.add('item_categoria-activo');

        let categoriaSelecionada = item.getAttribute('categoria');


        if (categoriaSelecionada !== 'all') {
            contenedor_global.insertAdjacentElement("afterend", seccion_relleno);
        } else {
            seccion_relleno.remove();
        }

        productos.forEach((producto) =>{
            producto.style.display = 'none';
        });

        productos.forEach((producto) =>{
            if (producto.getAttribute('categoria') == categoriaSelecionada || categoriaSelecionada == "all") {
                producto.style.display = 'block';
            }
        });

        // Previniendo el comportamiento predeterminado del enlace
        event.preventDefault();
    });
});


botonFiltro.addEventListener('click',() =>{
    filtro.classList.toggle("oculto");
});

function ajustarMenu() {
    if (window.innerWidth < 690) {
        filtro.classList.add('oculto');
    } else {
        filtro.classList.remove('oculto');
    }
}