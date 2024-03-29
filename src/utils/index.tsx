// 统一中转模块函数
import { setToken, getToken, removeToken } from "@/utils/token";
import { setTheme, getTheme, removeTheme } from "@/utils/theme";
import { notification } from "antd";
import { buildHeaders, dateToString, formatDate, optional } from "./utils";
import { getUserInfo, removeUserInfo, setUserInfo } from "./userInfo";
/**
 * 接口返回值
 */

interface ResponseResult<T = any> {
  code: number;
  data: T;
  msg: string;
}
interface ResponsePageInfoResult<T = any> {
  data: T;
  total: {
    page: number;
    page_size: number;
    count: number;
  };
}

export const ResponseCode = {
  SUCCESS: 200,
  ERROR: 400,
};

export const Notification = (type = "error", msg = "") => {
  notification.open({
    message: "寒寒提醒你",
    description: msg,
    type: type == "error" ? "error" : "success",
    placement: "bottomRight",
    duration: 2.5,
  });
};

export {
  setToken,
  getToken,
  removeToken,
  setTheme,
  getTheme,
  removeTheme,
  optional,
  formatDate,
  setUserInfo,
  getUserInfo,
  removeUserInfo,
  dateToString,
  buildHeaders,
};
export type { ResponseResult, ResponsePageInfoResult };
