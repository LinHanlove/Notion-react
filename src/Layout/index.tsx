import Header from "@/Layout/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className=" w-[100vw] h-[100vh] ">
      <Header />
      <div className="w-full h-full ">
        {/* 二级路由渲染出口 */}
        <Outlet />
      </div>
      <div>88</div>
    </div>
  );
}
