const Themes = Object.freeze({ LIGHT: "light", DARK: "dark" });
const themeToggler = document.querySelector(".theme-toggler");
const classList = document.documentElement.classList;
const lamp = document.querySelector("#lampAudio");

const handleSound = () => {
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

const changeTheme = () => {
  const theme = getTheme() === Themes.DARK ? Themes.LIGHT : Themes.DARK;
  setTheme(theme);
  themeToggler.setAttribute("aria-pressed", theme === Themes.DARK);
  handleSound();
};

themeToggler.addEventListener("click", changeTheme);
themeToggler.setAttribute(
  "aria-pressed",
  classList.contains(Themes.LIGHT) ? "false" : "true",
);
