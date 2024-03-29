import axios from "./request";
import { ResponsePageInfoResult, ResponseResult } from "@/utils";

interface IAddArticle {
  title: string;
  /**文章内容 */
  article_content: string;
  /**作者id */
  author_name: string;
  author_id: number | string;
  /**文章标签 分类 */
  preview_theme: string;
  article_label: string[];
  article_cover: string;
  article_summary: string;
}
export const addArticle = (data: IAddArticle) => {
  return axios.request<ResponseResult>({
    url: "/api/article/add/article",
    method: "post",
    data,
  });
};

interface IUploadFileParams {
  file: Blob;
}
/* 上传封面 */
export const uploadArticleCover = (data: IUploadFileParams) => {
  const formData = new FormData();
  formData.append("file", data.file);
  return axios.request<ResponseResult>({
    url: "/api/article/upload",
    method: "POST",
    data: formData,
  });
};

interface IUserArticleListParams {
  author_id: number | string;
  page?: number;
  page_size?: number;
}

/* 获取当前用户文章列表 */
export const getUserArticleList = (data: IUserArticleListParams) => {
  return axios.request<ResponseResult>({
    url: "/api/article/user/article/list",
    method: "get",
    params: data,
  });
};

/** 查看文章 */
interface IGetArticleParams {
  article_id: number;
}
export const getArticle = (data: IGetArticleParams) => {
  return axios.request<ResponseResult<IGetSearchArticleListRes>>({
    url: "/api/article/get/article",
    method: "get",
    params: data,
  });
};

interface getSearchArticleList {
  search?: string;
  page?: number;
  page_size?: number;
}
export interface IGetSearchArticleListRes {
  article_id: number;
  title: string;
  create_at: string;
  article_content: string;
  author_id: number;
  update_at: object;
  article_cover: string;
  viewers: number;
  like: number;
  article_label: string[];
  article_summary: string;
  preview_theme: string;
  author_name: string;
  username: string;
  nickname: string;
  avatar: string;
}

/** 获取所有文章 */
export const getSearchArticleList = (data: getSearchArticleList) => {
  return axios.request<
    ResponseResult<ResponsePageInfoResult<IGetSearchArticleListRes[]>>
  >({
    url: "/api/article/all/article/list",
    method: "get",
    params: data,
  });
};

/** 获取推荐文章 */
export const getRecommendArticleList = (data: getSearchArticleList) => {
  return axios.request<
    ResponseResult<ResponsePageInfoResult<IGetSearchArticleListRes[]>>
  >({
    url: "/api/article/recommend/article/list",
    method: "get",
    params: data,
  });
};
