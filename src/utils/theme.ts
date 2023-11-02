/* eslint-disable react-refresh/only-export-components */
// token 存 取 删

const THEME = "theme";

const setTheme = (token: any) => {
  localStorage.setItem(THEME, token);
};

const getTheme = () => {
  return localStorage.getItem(THEME);
};

const removeTheme = () => {
  localStorage.removeItem(THEME);
};

export { setTheme, getTheme, removeTheme };
