import { buildHeaders, dateToString, removeToken } from "@/utils";
import Notification from "@/components/Notification";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

/** 重写axios类型 解决返回值泛型类型丢失的问题 */
interface AxiosInstanceResponse<T = any> extends AxiosInstance {
  request<R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D>
  ): Promise<R>;
}

/**
 * axios的封装处理步骤：
 * 1. 根域名配置
 * 2. 超时时间
 * 3. 请求拦截器/响应拦截器
 */
const baseURL = import.meta.env.VITE_APP_BASE_API;

const request: AxiosInstanceResponse = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    config.params = dateToString(config.params);
    // 不经过data处理 上传文件就没formData
    config.data = dateToString(config.data);
    config.headers = {
      ...buildHeaders(),
      ...config.headers,
    } as unknown as AxiosRequestHeaders;

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

    if (code === 0) {
      Notification({ type: "error", msg: response.data.msg, time: 2.5 });
      removeToken();
    }
    // 放行
    if (code === 200) {
      return response.data;
    }
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const {
      response: {
        data: { message },
      },
    } = error;

    Notification({ type: "error", msg: message, time: 2.5 });
    return Promise.reject(error);
  }
);
export default request;
