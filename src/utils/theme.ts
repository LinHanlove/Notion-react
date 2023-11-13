/* eslint-disable react-refresh/only-export-components */
// token 存 取 删

const KEY = "theme";

const setTheme = (token: any) => {
  localStorage.setItem(KEY, token);
};

const getTheme = () => {
  return localStorage.getItem(KEY);
};

const removeTheme = () => {
  localStorage.removeItem(KEY);
};

export { setTheme, getTheme, removeTheme };
