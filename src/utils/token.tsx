/* eslint-disable react-refresh/only-export-components */
// token 存 取 删

const TOKENKEY = "token_key";

const setToken = (token: any) => {
  localStorage.setItem(TOKENKEY, token);
};

const getToken = () => {
  return localStorage.getItem(TOKENKEY);
};

const removeToken = () => {
  localStorage.removeItem(TOKENKEY);
};

export { setToken, getToken, removeToken };
