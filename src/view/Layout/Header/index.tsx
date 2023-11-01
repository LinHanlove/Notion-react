import Logo from "@/components/logo";
import { route } from "@/router";
import { Menu } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { routes } = route;
  const navigate = useNavigate();
  const location = useLocation();
  const title = ["首页", "笔记手账", "留言树洞", "云音乐"];
  const menuList = routes[0].children?.map((i, inx) => {
    return {
      key: i.path,
      label: title[inx],
    };
  }) as ItemType[];
  const handelMenuClick = (val: { key: string }) => {
    const { key } = val;
    navigate(key);
  };
  const [selectedKey, setSelectedKey] = useState("");
  useEffect(() => {
    setSelectedKey(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <header className="h-[6%] w-full px-4 flex justify-between items-center">
      <div className="w-[10vw] text-[20px] text-[#fff] flex">
        <Logo />
      </div>
      <Menu
        className="menu w-auto  text-[20px] text-[--text-color]   font-extrabold"
        mode="horizontal"
        selectedKeys={[selectedKey]}
        onClick={handelMenuClick}
        items={menuList}
      ></Menu>
      <div className="w-auto flex items-center">
        <div className="w-[50px] h-[50px] rounded-full shadow-[0_10px_15px_#0000004c]  hover:shadow-[0_2px_5px_#0000004c] bg-[--a]">
          {selectedKey}
        </div>
      </div>
    </header>
  );
}
