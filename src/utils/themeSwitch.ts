/* eslint-disable react-refresh/only-export-components */
// token 存 取 删

const SWITCH = "themeSwitch";

const setThemeSwitch = (visible: any) => {
  localStorage.setItem(SWITCH, visible);
};

const getThemeSwitch = () => {
  return localStorage.getItem(SWITCH);
};

const removeThemeSwitch = () => {
  localStorage.removeItem(SWITCH);
};

export { setThemeSwitch, getThemeSwitch, removeThemeSwitch };
