import axios from "./request";
import { ResponseResult } from "@/utils";

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

interface IAllArticleListParams {}

/** 获取所有文章 */
export const getAllArticleList = (data: IAllArticleListParams) => {
  return axios.request<ResponseResult>({
    url: "/api/article/all/article/list",
    method: "get",
    params: data,
  });
};
