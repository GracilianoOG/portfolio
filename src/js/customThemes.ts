const Themes = { LIGHT: "light", DARK: "dark" } as const;

const themeToggler =
  document.querySelector<HTMLButtonElement>(".theme-toggler")!;
const lamp = document.querySelector<HTMLAudioElement>("#lampAudio")!;

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
  themeToggler.setAttribute("aria-pressed", String(theme === Themes.DARK));
};

const changeTheme = () => {
  const theme = getTheme() === Themes.DARK ? Themes.LIGHT : Themes.DARK;
  setTheme(theme);
  updateToggler(theme);
  playToggleSound();
};

const theme = getTheme();
themeToggler.addEventListener("click", changeTheme);
updateToggler(theme);
