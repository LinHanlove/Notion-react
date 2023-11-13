const KEY = "userInfo";

const setUserInfo = (userInfo: any) => {
  localStorage.setItem(KEY, JSON.stringify(userInfo));
};

const getUserInfo = () => {
  return localStorage.getItem(KEY);
};

const removeUserInfo = () => {
  localStorage.removeItem(KEY);
};

export { setUserInfo, getUserInfo, removeUserInfo };
