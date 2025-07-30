const roles = [
  "Web Designer",
  "UI / UX Designer",
  "App Developer",
  "Asset Designer",
  "Game Developer"
];

let currentRole = 0;
let charIndex = 0;
let isDeleting = true;
const span = document.querySelector(".text-animation span");

function typeEffect() {
  const currentText = roles[currentRole];

  // Update the text BEFORE modifying charIndex
  span.textContent = currentText.substring(0, charIndex);

  if (!isDeleting) {
    if (charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Pause after full word
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = false;
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(typeEffect, 500); // Pause before new word
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('.section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}