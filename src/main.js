const mobile_nav = document.querySelector(".mobile-navbar-btn");
const navbar = document.querySelector(".header");
var btns = document.getElementsByClassName("navbar-link");
{
const toggleNavbar = () => {
  navbar.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());
}
{
let top = navbar.offsetTop;
function stickynavbar() {
if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
  }
else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);
}
{
  
window.onscroll = function () { 
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
    } 
    else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
    }
};
}


{
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += " active";
    });
  }
}