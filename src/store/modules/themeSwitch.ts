/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { setThemeSwitch as _setThemeSwitch, getThemeSwitch } from "@/utils";
const ThemeSwitch = createSlice({
  name: "themeSwitch",
  // 初始化token
  initialState: {
    themeSwitch: getThemeSwitch() || "",
  },
  // 同步修改数据的方法
  reducers: {
    setThemeSwitch: (state, action) => {
      console.log(action.payload, "11111");

      state.themeSwitch = action.payload;
      // 存入本地
      _setThemeSwitch(action.payload);
    },
  },
});
// 解构出创建action对象的函数 （actionCreate）
const { setThemeSwitch } = ThemeSwitch.actions;

// 获取reducer函数
const ThemeSwitchReducer = ThemeSwitch.reducer;

// 异步
const asyncThemeSwitch = (params: any) => {
  return setTimeout(
    (
      dispatch: (arg0: {
        payload: any;
        type: "themeSwitch/setThemeSwitch";
      }) => void
    ) => {
      console.log(params, "异步");

      dispatch(setThemeSwitch(params));
    },
    1500
  );
};

// 导出创建action对象的函数和reducer函数
export { setThemeSwitch, asyncThemeSwitch };
export default ThemeSwitchReducer;
