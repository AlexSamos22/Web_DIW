let  item_categoria = document.querySelectorAll('.item_categoria');
let productos = document.querySelectorAll('.tarjeta');
let botonFiltro = document.querySelector(".boton_filtro");
let filtro = document.querySelector(".filtro");
let menu = document.querySelector(".enlaces_del_menu_lateral");

//Evento para cuando se le haga click al menu de hamburguesa si el filtro esta desplegado se oculte 
document.querySelector(".hamburguesa_del_menu").addEventListener("click", () =>{
    if(!filtro.classList.contains("oculto")){
        filtro.classList.add("oculto");
    }
});


window.addEventListener('load', ajustarMenu);
window.addEventListener('resize', ajustarMenu);


let contenedor_global = document.querySelector(".contenedor-global");
//seccion para hacer que el footer siempre este abajo cuando se filtran en categorias que no tienen suficientes articulos
let seccion_relleno = document.createElement("section");
seccion_relleno.style.background = "#e4e4e4";
seccion_relleno.style.width="100%";
seccion_relleno.style.height="400px";

item_categoria.forEach((item) =>{
    //Recorre todos los enlaces del filtro
    item.addEventListener('click', (event) =>{
        // Remueve la clase 'active' de todos los elementos
        item_categoria.forEach((item) => {
            item.classList.remove('item_categoria-activo');
        });

        // Agrega la clase 'active' al elemento clicado
        item.classList.add('item_categoria-activo');

        //Obtiene la categoria del atributo data-categoria
        let categoriaSelecionada = item.getAttribute('data-categoria');


        //Si la categoria seleccionada no es all añadir el contenedor de relleno para dejar el footer abajo siempre
        if (categoriaSelecionada !== 'all') {
            contenedor_global.insertAdjacentElement("afterend", seccion_relleno);
        } else {
            seccion_relleno.remove();
        }

        //Poner todos los productos ocultos
        productos.forEach((producto) =>{
            producto.style.display = 'none';
        });

        //Si la categoria es all o la categoria del producto coincide con la selecionada en el filtro mostrar esos productos
        productos.forEach((producto) =>{
            if (producto.getAttribute('data-categoria') == categoriaSelecionada || categoriaSelecionada == "all") {
                producto.style.display = 'block';
            }
        });

        // Previniendo el comportamiento predeterminado del enlace
        event.preventDefault();
    });
});

//Mostrar el filtro al hacer click en el boton de filtro y ocultar el menu principal desplegable si esta sacado
botonFiltro.addEventListener('click',() =>{
    filtro.classList.toggle("oculto");
    if(!menu.classList.contains("oculto")){
        menu.classList.add("oculto");
    }
});

//Se asegura que cuando la pantalla se hace pequeña o se recarga la pagina el filtro en modo responsive aparezca en oculto
function ajustarMenu() {
    if (window.innerWidth < 750) {
        filtro.classList.add('oculto');
    } else {
        filtro.classList.remove('oculto');
    }
}