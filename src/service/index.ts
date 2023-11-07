// 统一中转模块函数
import axios from "./request";

export const getUserInfo = () => axios.get("/api/userinfo");

/** 获取登录验证码 */
export const getVerifyCode = () => axios.get("/api/verify/code");
