//JS FOR THE HAMBURGER
// IT ONLY EXISTS BETWEEN THE BLOCK OR IT CREATES A BLOCK YOU WROTE IT, IT WONT AFFECT OR ACCIDENTALLY CHANGE ANYTHING OUTSIDE OF IT, ITS BLOCK-SCOPED MAKES IT HARDER TO ACCIDENTALLY OVERWRITE VARIABLES OR CAUSE BUGS.
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// INITIALIZING EMAILJS WITH MY USER ID
// KEEP VARIABLES/FUNCTIONS INSIDE IT PRIVATE SO THEY DON’T ACCIDENTALLY CONFLICT WITH OTHER CODE.
(function () {
  emailjs.init("tztS8EMhH-jTypX7j");
})();

//js for contact me
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_3z9pkw8", "template_5k0p5r8", this).then(
      function (response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.error("Message failed:", error);
        alert("Something went wrong. Please try again.");
      }
    );
  });

//for dark-theme toggle
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/sun.png";
  } else {
    icon.src = "img/moon.png";
  }
};
