import Header from "@/view/Layout/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="w-full h-full ">
      <Header />
      <div>
        {/* 二级路由渲染出口 */}
        <Outlet />
      </div>
    </div>
  );
}
