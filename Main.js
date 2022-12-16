// Menu-Show Hide:
// const navMenu = document.getElementById("nav-menu"),
//   toggleMenu = document.ElementById("nav-toggle"),
//   closeMenu = document.getElementById("nav-close");

// toggleMenu.addEventListener("click", () => {
//   navMenu.classList.toggle("show");
// });

// Hidden
// closeMenu.addEventListener('click', ()=>{
//     navMenu.classList.remove('show')
// })
  
const navMenu = document.querySelector(".nav__menu");
const togglemenu = document.querySelector(".nav__toggle");
const closemenu = document.querySelector(".nav__close");

togglemenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
closemenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
