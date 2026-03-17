const Themes = Object.freeze({ LIGHT: "light", DARK: "dark" });
const themeToggler = document.querySelector(".theme-toggler");
const lamp = document.querySelector("#lampAudio");

const playToggleSound = () => {
  lamp.pause();
  lamp.currentTime = 0;
  lamp.play();
};

const getTheme = () => {
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const theme = localStorage.getItem("theme") ?? preferredTheme;

  return theme;
};

const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("class", theme);
};

const updateToggler = (theme) => {
  themeToggler.setAttribute("aria-pressed", theme === Themes.DARK);
};

const changeTheme = () => {
  const theme = getTheme() === Themes.DARK ? Themes.LIGHT : Themes.DARK;
  setTheme(theme);
  updateToggler(theme);
  playToggleSound();
};

const initThemeToggler = () => {
  const theme = getTheme();
  themeToggler.addEventListener("click", changeTheme);
  updateToggler(theme);
};

initThemeToggler();
