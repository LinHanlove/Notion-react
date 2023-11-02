import Logo from "@/components/Logo";
import { route } from "@/router";
import { Menu, MenuProps } from "antd";
import { Icon } from "@iconify/react";
import { useEffect, useState, forwardRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = forwardRef((props: { children?: any }, ref: any) => {
  const { routes } = route;
  const navigate = useNavigate();
  const location = useLocation();
  const title = ["首页", "笔记手账", "留言树洞", "云音乐"];
  const iconList = ["mdi:github", "mdi:power", "fa6-solid:user-graduate"];
  const menuList = routes[0].children?.map((i, inx) => {
    return {
      key: i.path,
      label: title[inx],
    };
  }) as MenuProps["items"];
  const handelMenuClick = (val: { key: string }) => {
    const { key } = val;
    navigate(key);
  };

  const [selectedKey, setSelectedKey] = useState("");
  useEffect(() => {
    setSelectedKey(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <header
      ref={ref}
      className="h-[8vh] bg-[transparent]  w-full absolute top-0 z-10 px-4 flex justify-between items-center [&>.ant-menu-light]:bg-[transparent]  [&>.ant-menu-horizontal]:border-none "
    >
      <div className="w-[10vw] text-[20px] text-[#fff] overflow-hidden">
        <Logo />
      </div>
      <Menu
        className="menu w-[60vw] flex justify-center [&>*]:text-[--text-color]   font-extrabold"
        mode="horizontal"
        selectedKeys={[selectedKey]}
        onClick={handelMenuClick}
        items={menuList}
      ></Menu>
      {props.children ? props.children : ""}
      <div className="w-auto flex items-center">
        {iconList.map((i) => (
          <div
            key={i}
            className="w-6  h-6 mx-1 flex justify-center items-center rounded-full shadow-[0_10px_15px_var(--text-color)]  hover:shadow-[0_2px_5px_var(--background)] bg-[var(--hang1 )]"
          >
            <div className="w-4 h-4 bg-[var(--hang2)] duration-500 rounded-full  flex justify-center items-center">
              <Icon icon={i} className="w-4 h-4 text-[--text-color]" />
            </div>
          </div>
        ))}
      </div>
    </header>
  );
});

export default Header;
