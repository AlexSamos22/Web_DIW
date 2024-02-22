document.querySelector(".hamburguesa_del_menu").addEventListener("click", toggleMenu);
window.addEventListener("resize", cerrarMenuEnVentanaGrande);
window.addEventListener("scroll", cerrarMenuEnScroll);


function toggleMenu() {
    let menu = document.querySelector(".enlaces_del_menu_lateral");
    menu.classList.toggle("oculto");
}

// Función para cerrar el menú si la ventana se hace más grande de 800px
function cerrarMenuEnVentanaGrande() {
    if (window.innerWidth > 800) {
        let menu = document.querySelector(".enlaces_del_menu_lateral");
        if (!menu.classList.contains("oculto")) {
            menu.classList.add("oculto");
        }
    }
}

// Función para cerrar el menú si se hace scroll
function cerrarMenuEnScroll() {
    let menu = document.querySelector(".enlaces_del_menu_lateral");
    if (!menu.classList.contains("oculto")) {
        menu.classList.add("oculto");
        
    }
}




