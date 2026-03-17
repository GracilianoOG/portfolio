const hamburger = document.querySelector(".header__hamburguer");
const headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  headerMenu.classList.toggle("header__menu--off");
  hamburger.classList.toggle("header__hamburguer--close");

  if (headerMenu.classList.contains("header__menu--off")) {
    hamburger.setAttribute("aria-expanded", "false");
  } else {
    hamburger.setAttribute("aria-expanded", "true");
  }
});
