const hamburguer = document.querySelector(".header__hamburguer");
const headerMenu = document.querySelector(".header__menu");

export const loadHamburguer = () => {
  hamburguer.addEventListener("click", () => {
    headerMenu.classList.toggle("header__menu--off");
    hamburguer.classList.toggle("header__hamburguer--close");
  
    if(headerMenu.classList.contains("header__menu--off")) {
      hamburguer.setAttribute("aria-expanded", "false");
      hamburguer.setAttribute("aria-label", "Open navigation menu");
    } else {
      hamburguer.setAttribute("aria-expanded", "true");
      hamburguer.setAttribute("aria-label", "Close navigation menu");
    }
  });
}