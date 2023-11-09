import { notification } from "antd";
import axios from "axios";

/**
 * axios的封装处理步骤：
 * 1. 根域名配置
 * 2. 超时时间
 * 3. 请求拦截器/响应拦截器
 */
const baseURL = import.meta.env.VITE_APP_BASE_API;

const Notification = (type = "error", msg = "") => {
  notification.open({
    message: "寒寒提醒你",
    description: msg,
    type: type == "error" ? "error" : "success",
    placement: "bottomRight",
    duration: 2.5,
  });
};

const request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    const code = response.data.code;

    if (code == 200) {
      console.log(response.data.msg);
    }
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log(response, "响应拦截器");

    return response.data;
  },
  (error) => {
    Notification("error", error);
    return Promise.reject(error);
  }
);
export default request;
