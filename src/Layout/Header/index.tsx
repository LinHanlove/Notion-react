import Logo from "@/components/Logo";
import { Button, Menu, MenuProps, Space, notification } from "antd";
import { Icon } from "@iconify/react";
import { useEffect, useState, forwardRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuRouter from "@/router/MenuRouter";
import { getToken, removeToken } from "@/utils";

const Header = forwardRef((props: { children?: any }, ref: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const IconGroup = [
    {
      hidden: true,
      icon: "mdi:github",
      event: () => {
        window.open("https://github.com/LinHanlove/Notion");
      },
    },
    {
      hidden: getToken() ? true : false,
      icon: "mdi:power",
      event: () => {
        openNotification();
      },
    },
    {
      hidden: getToken() ? true : false,
      icon: "fa6-solid:user-graduate",
      event: () => {
        navigate("/personal-enter");
      },
    },
    {
      hidden: getToken() ? false : true,
      icon: "icon-park-outline:geometric-flowers",
      event: () => {
        navigate("/user");
      },
    },
  ];

  const menuList = MenuRouter()?.map((i) => {
    return {
      key: i.path,
      label: i.name,
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

  const LogOut = () => {
    removeToken();
    window.location.reload();
  };
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          取消
        </Button>
        <Button type="primary" size="small" onClick={() => LogOut()}>
          确认
        </Button>
      </Space>
    );
    api.open({
      message: "小主儿🤔",
      description: "确定要离开寒寒吗？",
      btn,
    });
  };

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
        {IconGroup.map((i) =>
          i.hidden ? (
            <div
              key={i.icon}
              className="w-6  h-6 mx-1 flex justify-center items-center rounded-full shadow-[0_10px_15px_var(--text-color)]  hover:shadow-[0_2px_5px_var(--background)] bg-[var(--hang1 )]"
            >
              <div
                onClick={i.event}
                className="w-4 h-4 bg-[var(--hang2)] duration-500 rounded-full  flex justify-center items-center"
              >
                <Icon icon={i.icon} className="w-4 h-4 text-[--text-color]" />
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      {contextHolder}
    </header>
  );
});

export default Header;
