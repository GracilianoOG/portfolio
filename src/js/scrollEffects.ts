const sections = document.querySelectorAll("section[id]");
const projects = document.querySelectorAll(".project");

const centerView = {
  rootMargin: "-50% 0px -50%",
};

const linkOptions = {
  rootMargin: "-25% 0px -75%",
};

const getMenuLink = (id: string) => {
  const menuLink = document.querySelector(`.menu__link[href="#${id}"]`);

  if (!menuLink) {
    throw new Error("Menu link doesn't exist!");
  }

  return menuLink;
};

const highlightLink = (menuLink, highlight) => {
  menuLink.classList.toggle("menu__link--active", highlight);
};

const highlightActiveLink = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const menuLink = getMenuLink(id);
    highlightLink(menuLink, entry.isIntersecting);
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

projects.forEach((p) => projectsObserver.observe(p));
