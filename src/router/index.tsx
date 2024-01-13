import {
  IndexRouteObject,
  NonIndexRouteObject,
  createBrowserRouter,
} from "react-router-dom";

import { Suspense, lazy } from "react";
import TransitionRouter, { removeHiddenRouter } from "./TransitionRouter";

// 按需加载
const Layout = lazy(() => import("@/Layout"));
const Home = lazy(() => import("@/view/Home"));
const Notebook = lazy(() => import("@/view/Notebook"));
const NotFound = lazy(() => import("@/components/NotFound"));
const TakeNotes = lazy(() => import("@/view/TakeNotes"));
const PreviewNotes = lazy(() => import("@/view/PreviewNotes"));
const TreeHole = lazy(() => import("@/view/TreeHole"));
const User = lazy(() => import("@/view/User/index"));
const PersonalCenter = lazy(() => import("@/view/User/PersonalCenter"));
const Loaders = lazy(() => import("@/components/Loaders"));

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
      <Suspense fallback={<Loaders />}>
        <Layout />
      </Suspense>
    ),

    children: [
      {
        path: "home",
        name: "首页",
        element: (
          <Suspense fallback={<Loaders />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "note-book",
        name: "笔记手账",

        element: (
          <Suspense fallback={<Loaders />}>
            <Notebook />
          </Suspense>
        ),
      },
      {
        path: "tree-hole",
        name: "留言树洞",

        element: (
          <Suspense fallback={<Loaders />}>
            <TreeHole />
          </Suspense>
        ),
      },
      {
        path: "loaders",
        mate: {
          hidden: true,
          pathName: "loaders",
        },
        name: "加载页",
        element: <Loaders />,
      },

      {
        path: "user",
        element: (
          <Suspense fallback={<Loaders />}>
            <User />
          </Suspense>
        ),
      },
      {
        path: "personal-enter",
        element: (
          <Suspense fallback={<Loaders />}>
            <PersonalCenter />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/take-notes",
    element: (
      <Suspense fallback={<Loaders />}>
        <TransitionRouter auth={{ rule: "login", backUrl: "/user" }}>
          <TakeNotes />
        </TransitionRouter>
      </Suspense>
    ),
  },
  {
    path: "/preview-notes",
    element: (
      <Suspense fallback={<Loaders />}>
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
      <Suspense fallback={<Loaders />}>
        <NotFound />
      </Suspense>
    ),
  },
];

export const route = createBrowserRouter(removeHiddenRouter(routes));
