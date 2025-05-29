export const setupThemeToggler = () => {
  const themes = { key: "theme", light: "light", dark: "dark" };
  const themeToggler = document.querySelector(".theme-toggler");
  const classList = document.documentElement.classList;

  themeToggler.addEventListener("click", () => {
    classList.toggle(themes.dark);
    classList.toggle(themes.light);
    const isLightTheme = classList.contains(themes.light);
    localStorage.setItem(themes.key, isLightTheme ? themes.light : themes.dark);
    themeToggler.setAttribute("aria-pressed", isLightTheme ? "false" : "true");
  });

  themeToggler.setAttribute(
    "aria-pressed",
    classList.contains("light") ? "false" : "true"
  );
};
