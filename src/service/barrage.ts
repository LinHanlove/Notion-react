import axios from "./request";
import { ResponsePageInfoResult, ResponseResult } from "@/utils";

interface IAddBarrageParams {
  barrage: string; //弹幕
  barrage_avatar: string; //用户头像
}

/**发布弹幕*/
export const addBarrage = (data: IAddBarrageParams) => {
  return axios.request<ResponseResult>({
    url: "/api/barrage/add/barrage",
    method: "POST",
    data,
  });
};
interface IGetBarrageParams {
  page?: number;
  page_size?: number;
}

export interface IBarrageListRes {
  barrage: string;
  barrage_id: number;
  barrage_avatar: string;
  create_at: string;
}

/** 获取弹幕 */
export const getBarrageList = (data: IGetBarrageParams) => {
  return axios.request<
    ResponseResult<ResponsePageInfoResult<IBarrageListRes[]>>
  >({
    url: "/api/barrage/barrage/list",
    method: "GET",
    params: data,
  });
};

interface IAddMessageParams {
  user_id: string | number;
  parent_id: string | number;
  username: string | number;
  avatar: string;
  content: string;
}
/** 新增留言 */
export const addMessage = (data: IAddMessageParams) => {
  return axios.request<ResponseResult>({
    url: "/api/message/add/message",
    method: "POST",
    data,
  });
};

interface IGetMessageListParams {
  page?: number;
  page_size?: number;
}
export interface IMessageListRes {
  id: number;
  parent_id: number;
  username: string;
  avatar: string;
  content: string;
  create_at: string;
  children: undefined[];
}

/** 获取留言 */
export const getMessageList = (data: IGetMessageListParams) => {
  return axios.request<
    ResponseResult<ResponsePageInfoResult<IMessageListRes[]>>
  >({
    url: "/api/message/get/message",
    method: "GET",
    params: data,
  });
};

interface IDelMessage {
  id: string | number;
  is_edit: string | number;
}
/** 删除留言 */
export const delMessage = (data: IDelMessage) => {
  return axios.request<ResponseResult>({
    url: "/api/message/del/message",
    method: "POST",
    data,
  });
};

interface IEditMessage {
  id: string | number;
  username: string;
  avatar: string;
  content: string;
}
/** 更新留言 */
export const editMessage = (data: IEditMessage) => {
  return axios.request<ResponseResult>({
    url: "/api/message/edit/message",
    method: "POST",
    data,
  });
};
