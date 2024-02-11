document.querySelector(".hamburguesa_del_menu").addEventListener("click", toggleMenu);
window.addEventListener("resize", cerrarMenuEnVentanaGrande);
window.addEventListener("scroll", cerrarMenuEnScroll);


function toggleMenu() {
    var menu = document.querySelector(".enlaces_del_menu_lateral");
    menu.classList.toggle("oculto");
    menu.style.left = menu.style.left === "0px" ? "-400px" : "0px";
}

// Función para cerrar el menú si la ventana se hace más grande de 800px
function cerrarMenuEnVentanaGrande() {
    if (window.innerWidth > 800) {
        var menu = document.querySelector(".enlaces_del_menu_lateral");
        if (!menu.classList.contains("oculto")) {
            menu.classList.add("oculto");
            menu.style.left = "-400px";
        }
    }
}

// Función para cerrar el menú si se hace scroll
function cerrarMenuEnScroll() {
    var menu = document.querySelector(".enlaces_del_menu_lateral");
    if (!menu.classList.contains("oculto")) {
        menu.classList.add("oculto");
        menu.style.left = "-400px";
    }
}




