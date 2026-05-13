const hamburger = document.querySelector<HTMLButtonElement>(".hamburger")!;
const headerMenu = document.querySelector<HTMLDivElement>(".header__menu")!;

const isMenuOpen = () => hamburger.classList.contains("hamburger--close");

const toggleHamburgerMenu = () => {
  headerMenu.classList.toggle("header__menu--off");
  hamburger.classList.toggle("hamburger--close");
  hamburger.setAttribute("aria-expanded", String(isMenuOpen()));
};

hamburger.addEventListener("click", toggleHamburgerMenu);
