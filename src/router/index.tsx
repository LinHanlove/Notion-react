import { createBrowserRouter } from "react-router-dom";

import { Suspense, lazy } from "react";

// 按需加载
const Layout = lazy(() => import("@/Layout"));
const Home = lazy(() => import("@/view/Home"));
const Notebook = lazy(() => import("@/view/Notebook"));
const NotFound = lazy(() => import("@/view/NotFound"));
const TakeNotes = lazy(() => import("@/view/TakeNotes"));
const PreviewNotes = lazy(() => import("@/view/PreviewNotes"));

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
        index: true,
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
            <Notebook />
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
]);
