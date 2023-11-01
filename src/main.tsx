import React from "react";
import ReactDOM from "react-dom/client";
import "@/style/theme.css";
import "@/style/index.css";
import "@/style/tailwind.css";
import "normalize.css";
// 导入store
import { Provider } from "react-redux";
import store from "./store";
// 导入路由
import { RouterProvider } from "react-router-dom";
import { route } from "@/router";
// 处理antd与antd的样式兼容
import { StyleProvider } from "@ant-design/cssinjs";
// 自定义组件样式
import { ConfigProvider } from "antd";

const token = {
  colorPrimary: "#008080",
  colorInfo: "#008080",
  borderRadius: 7,
  wireframe: false,
  colorSuccess: "#359207",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token,
      }}
    >
      <StyleProvider hashPriority="high">
        <Provider store={store}>
          <RouterProvider router={route}></RouterProvider>
        </Provider>
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>
);
