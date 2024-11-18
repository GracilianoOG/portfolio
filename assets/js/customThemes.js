const classList = document.documentElement.classList;
const themes = { key: "theme", light: "light", dark: "dark" };
const themeToggler = document.querySelector(".theme-toggler");

export const setupThemeToggler = () => {
  themeToggler.addEventListener("click", () => {
    classList.toggle(themes.dark);
    classList.toggle(themes.light);
    const isLightTheme = classList.contains(themes.light);
    localStorage.setItem(themes.key, isLightTheme ? themes.light : themes.dark);
    themeToggler.setAttribute("aria-pressed", isLightTheme ? "false" : "true");
  });
}

export const loadStoredTheme = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const cachedTheme = localStorage.getItem(themes.key) || (prefersDark ? themes.dark : themes.light);
  classList.add(cachedTheme);
  themeToggler.setAttribute("aria-pressed", cachedTheme === themes.light ? "false" : "true");
}