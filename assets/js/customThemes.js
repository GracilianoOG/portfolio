const classList = document.documentElement.classList;
const themes = { key: "theme", light: "light", dark: "dark" };

export const setupThemeToggler = () => {
  const themeToggler = document.querySelector(".theme-toggler");

  themeToggler.addEventListener("click", () => {
    classList.toggle(themes.dark);
    classList.toggle(themes.light);
    sessionStorage.setItem(themes.key, classList.contains(themes.light) ? themes.light : themes.dark);

    if(classList.contains(themes.light)) {
      themeToggler.setAttribute("aria-pressed", "false");
    } else {
      themeToggler.setAttribute("aria-pressed", "true");
    }
  });
}

export const loadStoredTheme = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const cachedTheme = sessionStorage.getItem(themes.key) || (prefersDark ? themes.dark : themes.light);
  classList.add(cachedTheme);
  console.log(prefersDark)

  const themeToggler = document.querySelector(".theme-toggler");
  if(cachedTheme === themes.light) {
    themeToggler.setAttribute("aria-pressed", "false");
  } else {
    themeToggler.setAttribute("aria-pressed", "true");
  }
}