import { createBrowserRouter } from "react-router-dom";

import { Suspense, lazy } from "react";
// 按需加载
const Layout = lazy(() => import("@/view/Layout"));
const Home = lazy(() => import("@/view/Home"));
const NotFound = lazy(() => import("@/view/NotFound"));

export const route = createBrowserRouter([
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
        element: (
          <Suspense fallback={"加载中..."}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "note-book",
        element: (
          <Suspense fallback={"加载中..."}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "tree-hole",
        element: (
          <Suspense fallback={"加载中..."}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cloud-music",
        element: (
          <Suspense fallback={"加载中..."}>
            <Home />
          </Suspense>
        ),
      },
    ],
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
]);
