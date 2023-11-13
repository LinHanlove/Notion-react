// 统一中转模块函数
import axios from "./request";
import { ResponseResult } from "@/utils";

export interface ILoginParams {
  username: string;
  password: string;
}
export interface ILoginResult {
  token: string;
  userinfo: {
    id: number;
    username: string;
    nickname: object;
    phone: number;
    avatar: object;
    last_login_time: string;
    birthday: object;
    motto: object;
    create_time: string;
    email: string;
  };
}
/** 登录 */
export const login = (data: ILoginParams) => {
  return axios.request<ResponseResult<ILoginResult>>({
    url: "/api/user/login",
    method: "post",
    data,
  });
};
export interface IVerifyCodeParams {
  email: string;
  is_exist: number | string;
}

/** 获取验证码 */
export const getVerifyCode = (data: IVerifyCodeParams) => {
  return axios.request<ResponseResult>({
    url: "/api/verify/code",
    method: "get",
    params: data,
  });
};

export interface IRegisterParams {
  username: string;
  password: string;
  email: string;
  code: string;
}

/** 用户注册 */
export const register = (data: IRegisterParams) => {
  return axios.request<ResponseResult>({
    url: "/api/user/register",
    method: "post",
    params: data,
  });
};
