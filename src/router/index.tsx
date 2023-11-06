import {
  IndexRouteObject,
  NonIndexRouteObject,
  createBrowserRouter,
} from "react-router-dom";

import { Suspense, lazy } from "react";
import TransitionRouter from "./TransitionRouter";

// 按需加载
const Layout = lazy(() => import("@/Layout"));
const Home = lazy(() => import("@/view/Home"));
const Notebook = lazy(() => import("@/view/Notebook"));
const NotFound = lazy(() => import("@/view/NotFound"));
const TakeNotes = lazy(() => import("@/view/TakeNotes"));
const PreviewNotes = lazy(() => import("@/view/PreviewNotes"));
const TreeHole = lazy(() => import("@/view/TreeHole"));
const User = lazy(() => import("@/view/User"));

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
    hidden: boolean;
  };
}

export type _RouteObject = _IndexRouterObject | _NonIndexRouteObject;

/**
 * name 专属menu菜单路由
 * mate 其他权限标识符
 * hidden 控制该路由整体的显示隐藏
 *
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
        mate: {
          hidden: false,
        },
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
      // {
      //   path: "cloud-music",
      //   element: (
      //     <Suspense fallback={"加载中..."}>
      //       <Home />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/user",
        element: (
          <Suspense fallback={"加载中..."}>
            <User />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/take-notes",
    element: (
      <Suspense fallback={"加载中..."}>
        <TakeNotes />
      </Suspense>
    ),
  },
  {
    path: "/preview-notes",
    element: (
      <Suspense fallback={"加载中..."}>
        <PreviewNotes />
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
export const route = createBrowserRouter(TransitionRouter(routes));
