
// Le doy funcion a los iconos de abrir-cerrar para mobile //

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


//Funcion cerrar menu al ir a cada seccion en mobile  //

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  })
})
