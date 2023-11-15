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
    data,
  });
};

interface IGetUserInfoParams {
  id: string | number;
}
export interface IGetUserInfoResult {
  id: number;
  username: string;
  nickname: string;
  phone: number;
  password: string;
  avatar: string;
  last_login_time: string;
  birthday: string;
  motto: string;
  create_time: string;
  email: string;
  personal_articles_count: number;
}
/** 获取用户信息 */
export const getUserInfo = (data: IGetUserInfoParams) => {
  return axios.request<ResponseResult<IGetUserInfoResult>>({
    url: "/api/user/info",
    method: "get",
    params: data,
  });
};

interface IEditUserInfoParams {
  id: number | string;
  motto?: string;
  is_edit: number;
  nickname?: string;
  birthday?: Date | string;
  phone?: number | string;
  email?: string;
}

/** 编辑用户信息 */
export const editUserInfo = (data: IEditUserInfoParams) => {
  return axios.request<ResponseResult>({
    url: "/api/user/edit/userinfo",
    method: "post",
    data,
  });
};

/* 上传文件 头像 背景图 */
interface IUploadFileParams {
  file: Blob;
  id: string;
}

export const uploadFile = (data: IUploadFileParams) => {
  const formData = new FormData();
  formData.append("file", data.file);
  formData.append("id", data.id);
  return axios.request<ResponseResult>({
    url: "/api/user/upload",
    method: "POST",
    data: formData,
  });
};
