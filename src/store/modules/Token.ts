/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken } from "@/utils";
const TokenStore = createSlice({
  name: "token",
  // 初始化token
  initialState: {
    token: getToken() || "",
  },
  // 同步修改数据的方法
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      // 存入本地
      _setToken(action.payload);
    },
  },
});
// 解构出创建action对象的函数 （actionCreate）
const { setToken } = TokenStore.actions;

// 获取reducer函数
const tokenReducer = TokenStore.reducer;

//异步方法，完成登录获取token
const fetchLogin = (loginForm: any) => {
  return async (dispatch: any) => {
    // 1. 发送异步请求
    const token = loginForm;
    // 2. 提交同步action进行token存入
    dispatch(setToken(token));
  };
};

// 导出创建action对象的函数和reducer函数
export { setToken, fetchLogin };
export default tokenReducer;
