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
    //Se recorren todos los enlaces del filtro
    item.addEventListener('click', (event) =>{
        // Remueve la clase 'active' de todos los elementos
        item_categoria.forEach((item) => {
            item.classList.remove('item_categoria-activo');
        });

        // Agrega la clase 'active' al elemento clicado
        item.classList.add('item_categoria-activo');

        //se saca el valor del atributo data-categoria
        let categoriaSelecionada = item.getAttribute('data-categoria');

        //Si la categoria selecionada no es all se añade el contenedor de relleno para bajar el footer
        if (categoriaSelecionada !== 'all') {
            contenedor_global.insertAdjacentElement("afterend", seccion_relleno);
        } else {
            seccion_relleno.remove();
        }

        //Se esconden todos los productos
        productos.forEach((producto) =>{
            producto.style.display = 'none';
        });

        //A los productos que coinciden con la categoria seleccionada o cuando la categria es all se muestran
        productos.forEach((producto) =>{
            if (producto.getAttribute('data-categoria') == categoriaSelecionada || categoriaSelecionada == "all") {
                producto.style.display = 'block';
            }
        });

        // Previniendo el comportamiento predeterminado del enlace
        event.preventDefault();
    });
});

//Cuando se le de click al boton del filtro en resposive se muestre el filtro y si esta el menu lo cierre tambien
botonFiltro.addEventListener('click',() =>{
    filtro.classList.toggle("oculto");
    if(!menu.classList.contains("oculto")){
        menu.classList.add("oculto");
    }
});

//Funcion para que el filtroi siempre este oculto a no ser que se le de click al boton tanto al recargar la pagina como cuando se redimensiona
function ajustarMenu() {
    if (window.innerWidth < 750) {
        filtro.classList.add('oculto');
    } else {
        filtro.classList.remove('oculto');
    }
}