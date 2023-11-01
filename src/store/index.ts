import { configureStore } from "@reduxjs/toolkit";

import tokenReducer from "./modules/Token";

// 创建根store组合子模块
const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export default store;
