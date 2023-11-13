import {
  IndexRouteObject,
  Navigate,
  NonIndexRouteObject,
  createBrowserRouter,
} from "react-router-dom";

import { Suspense, lazy } from "react";
import TransitionRouter, { removeHiddenRouter } from "./TransitionRouter";

// 按需加载
const Layout = lazy(() => import("@/Layout"));
const Home = lazy(() => import("@/view/Home"));
const Notebook = lazy(() => import("@/view/Notebook"));
const NotFound = lazy(() => import("@/view/NotFound"));
const TakeNotes = lazy(() => import("@/view/TakeNotes"));
const PreviewNotes = lazy(() => import("@/view/PreviewNotes"));
const TreeHole = lazy(() => import("@/view/TreeHole"));
const User = lazy(() => import("@/view/User/index"));
const PersonalCenter = lazy(() => import("@/view/User/PersonalCenter"));
interface _IndexRouterObject extends IndexRouteObject {}
export interface _NonIndexRouteObject extends NonIndexRouteObject {
  index?: false;
}

export interface _NonIndexRouteObject extends NonIndexRouteObject {
  path: string;
  element: React.ReactElement;
  children?: _NonIndexRouteObject[];
  name?: string;
  mate?: {
    pathName?: string;
    hidden?: boolean;
  };
}

export type _RouteObject = _IndexRouterObject | _NonIndexRouteObject;

/* TAKE CARE */
/**
 * 基础路由
 * @params path     路径
 * @params element  组件元素
 * @params children 嵌套节点
 * @params name     menu组件专属
 * @params mate     路由鉴权规则 如下TransitionRouter
 */
export const routes: _RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={"加载中..."}>
        <Layout />
      </Suspense>
    ),

    children: [
      { path: "", element: <Navigate to={"home"} /> },
      {
        path: "home",
        name: "首页",
        element: (
          <Suspense fallback={"加载中..."}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "note-book",
        name: "笔记手账",

        element: (
          <Suspense fallback={"加载中..."}>
            <Notebook />
          </Suspense>
        ),
      },
      {
        path: "tree-hole",
        name: "留言树洞",

        element: (
          <Suspense fallback={"加载中..."}>
            <TreeHole />
          </Suspense>
        ),
      },
      {
        path: "upload",
        name: "上传图片",
        mate: {
          hidden: true,
        },
        element: <Suspense fallback={"加载中..."}></Suspense>,
      },
      {
        path: "/user",
        element: (
          <Suspense fallback={"加载中..."}>
            <User />
          </Suspense>
        ),
      },
      {
        path: "/personal-enter",
        element: (
          <Suspense fallback={"加载中..."}>
            <PersonalCenter />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/take-notes",
    element: (
      <Suspense fallback={"加载中..."}>
        <TransitionRouter auth={{ rule: "login", backUrl: "/user" }}>
          <TakeNotes />
        </TransitionRouter>
      </Suspense>
    ),
  },
  {
    path: "/preview-notes",
    element: (
      <Suspense fallback={"加载中..."}>
        <TransitionRouter auth={{ rule: "login", backUrl: "/user" }}>
          <PreviewNotes />
        </TransitionRouter>
      </Suspense>
    ),
  },

  /* 404页面 */
  {
    path: "*",
    element: (
      <Suspense fallback={"加载中..."}>
        <NotFound />
      </Suspense>
    ),
  },
];

export const route = createBrowserRouter(removeHiddenRouter(routes));
