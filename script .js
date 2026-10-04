// Mobile menu
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

// Automatically show the current year
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();