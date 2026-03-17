const hamburger = document.querySelector(".header__hamburguer");
const headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  headerMenu.classList.toggle("header__menu--off");
  hamburger.classList.toggle("header__hamburguer--close");
  const isMenuOpen = hamburger.classList.contains("header__hamburguer--close");
  hamburger.setAttribute("aria-expanded", isMenuOpen);
});
