const toggleTheme = () => {
  const classList = document.documentElement.classList;
  const themes = { light: "light", dark: "dark" }

  if(classList.contains(themes.light)) {
    classList.add(themes.dark);
    classList.remove(themes.light);
  } else if (classList.contains(themes.dark)) {
    classList.add(themes.light);
    classList.remove(themes.dark);
  } else {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDark ? classList.add(themes.light) : classList.add(themes.dark);
  }

  sessionStorage.setItem("theme", classList.contains(themes.light) ? "light" : "dark");
}

export const loadCachedTheme = () => {
  const cachedTheme = sessionStorage.getItem("theme");
  const classList = document.documentElement.classList;

  if(cachedTheme) {
    classList.add(cachedTheme);
  }
}

export default toggleTheme;