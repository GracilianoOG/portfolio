export const setupThemeToggler = () => {
  const Themes = Object.freeze({ LIGHT: "light", DARK: "dark" });
  const themeToggler = document.querySelector(".theme-toggler");
  const classList = document.documentElement.classList;

  themeToggler.addEventListener("click", () => {
    classList.toggle(Themes.DARK);
    classList.toggle(Themes.LIGHT);
    const isLightTheme = classList.contains(Themes.LIGHT);
    localStorage.setItem("theme", isLightTheme ? Themes.LIGHT : Themes.DARK);
    themeToggler.setAttribute("aria-pressed", isLightTheme ? "false" : "true");
  });

  themeToggler.setAttribute(
    "aria-pressed",
    classList.contains(Themes.LIGHT) ? "false" : "true"
  );
};
