/* eslint-disable react-refresh/only-export-components */
// token 存 取 删

const KEY = "token_key";

const setToken = (token: any) => {
  localStorage.setItem(KEY, token);
};

const getToken = () => {
  return localStorage.getItem(KEY);
};

const removeToken = () => {
  localStorage.removeItem(KEY);
};

export { setToken, getToken, removeToken };
