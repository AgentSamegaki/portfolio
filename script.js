let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
// let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
