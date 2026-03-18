const sections = document.querySelectorAll("section[id]");
const projects = document.querySelectorAll(".project");

const centerView = {
  rootMargin: "-50% 0px -50%",
};

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

const addClassToIntersectedElement = (entries, className) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle(className, entry.isIntersecting);
  });
};

const navObserver = new IntersectionObserver(highlightActiveLink, linkOptions);
sections.forEach((s) => navObserver.observe(s));

const projectsObserver = new IntersectionObserver(
  (entries) => addClassToIntersectedElement(entries, "project--active"),
  centerView,
);

projects.forEach((s) => projectsObserver.observe(s));
