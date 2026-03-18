const sections = document.querySelectorAll("section[id]");

const linkOptions = {
  rootMargin: "-25% 0px -75%",
};

const highlightActiveLink = (entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.menu__link[href="#${id}"]`);
    menuLink.classList.toggle("menu__link--active", entry.isIntersecting);
  });
};

const observer = new IntersectionObserver(highlightActiveLink, linkOptions);
sections.forEach((s) => observer.observe(s));
