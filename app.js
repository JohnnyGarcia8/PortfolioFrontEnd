
//Utilizo JavaScript para dar funcion a elementos de mi pagina web//


// Le doy funcion a los iconos dentro de las clases open-menu-close-menu de abrir y luego cerrar el menu con un click //
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


// establezco que los elementos dentro de a href tengan la funcion de cerrar el menu al redireccionar a algunas de las secciones //
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  })
})
