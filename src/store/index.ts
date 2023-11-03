import { configureStore } from "@reduxjs/toolkit";

import tokenReducer from "./modules/Token";
import ThemeSwitchReducer from "./modules/themeSwitch";

// 创建根store组合子模块
const store = configureStore({
  reducer: {
    token: tokenReducer,
    themeSwitch: ThemeSwitchReducer,
  },
});

export default store;
