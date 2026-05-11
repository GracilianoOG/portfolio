const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu");

const isMenuOpen = () => hamburger.classList.contains("hamburger--close");

const toggleHamburgerMenu = () => {
  headerMenu.classList.toggle("header__menu--off");
  hamburger.classList.toggle("hamburger--close");
  hamburger.setAttribute("aria-expanded", isMenuOpen());
};

hamburger.addEventListener("click", toggleHamburgerMenu);
