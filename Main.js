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




// auto scrolling::
const sections = document.querySelector('section[id')

window.addEventListener('scroll', scrollActive)

function scrollActive(){

  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      const sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href8='+ sectionId +']').classList.add('active')
      }
      else{
        document.querySelector('.nav__menu a[href8='+ sectionId +']').classList.remove('active')
      }

  })
}


