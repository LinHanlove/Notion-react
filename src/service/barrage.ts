import axios from "./request";
import { ResponsePageInfoResult, ResponseResult } from "@/utils";

interface IAddBarrageParams {
  barrage: string; //弹幕
  barrage_avatar: string; //用户头像
}

/**发布留言 */
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
