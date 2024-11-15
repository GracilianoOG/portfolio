const classList = document.documentElement.classList;
const themes = { key: "theme", light: "light", dark: "dark" };

const toggleTheme = () => {
  classList.toggle(themes.dark);
  classList.toggle(themes.light);
  sessionStorage.setItem(themes.key, classList.contains(themes.light) ? themes.light : themes.dark);
}

export const loadCachedTheme = () => {
  const cachedTheme = sessionStorage.getItem(themes.key);
  if(cachedTheme) {
    classList.add(cachedTheme);
  } else {
    const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
    classList.add(isDarkPreferred ? themes.dark : themes.light);
  }
}

export default toggleTheme;