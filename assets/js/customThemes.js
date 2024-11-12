const classList = document.documentElement.classList;
const themes = { key: "theme", light: "light", dark: "dark" };

const toggleTheme = () => {
  if(classList.length > 0) {
    classList.toggle(themes.dark);
    classList.toggle(themes.light);
  } else {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    classList.add(isDark ? themes.light : themes.dark);
  }

  sessionStorage.setItem(themes.key, classList.contains(themes.light) ? themes.light : themes.dark);
}

export const loadCachedTheme = () => {
  const cachedTheme = sessionStorage.getItem(themes.key);
  if(cachedTheme) classList.add(cachedTheme);
}

export default toggleTheme;