import { getToken, Notification } from "@/utils";

import axios from "axios";

/**
 * axios的封装处理步骤：
 * 1. 根域名配置
 * 2. 超时时间
 * 3. 请求拦截器/响应拦截器
 */
const baseURL = import.meta.env.VITE_APP_BASE_API;

const request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    const timeStamp = new Date().getTime();
    config.headers.set({
      Authorization: `Content-Type`,
      time: timeStamp,
      token: token,
    });
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
    if (code !== 200) {
      console.log(response.data.code, "响应拦截器");
      Notification("error", response.data.msg);
    }

    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    return response.data;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    Notification("error", error);
    return Promise.reject(error);
  }
);
export default request;
