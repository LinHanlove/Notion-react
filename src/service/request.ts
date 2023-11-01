import axios from "axios";

/**
 * axios的封装处理步骤：
 * 1. 根域名配置
 * 2. 超时时间
 * 3. 请求拦截器/响应拦截器
 */

const request = axios.create({
  baseURL: "http://127.0.0.1:3000",
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
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export { request };
