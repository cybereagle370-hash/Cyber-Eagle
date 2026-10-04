const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  const links = navLinks.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
