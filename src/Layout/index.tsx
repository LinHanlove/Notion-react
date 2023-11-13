/* eslint-disable react-hooks/exhaustive-deps */
import Header from "@/Layout/Header";
import { Outlet } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useRef, useState } from "react";
import { getTheme } from "@/utils";
import { Icon } from "@iconify/react";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Layout() {
  // 主题变量
  const localStorageTheme = getTheme();

  // 图标切换
  const [themeVisible, setThemeVisible] = useState(false);

  useEffect(() => {
    setThemeVisible(localStorageTheme == "dark" ? true : false);

    setStatus(true);
  }, [localStorageTheme]);
  const theme = useTheme();

  const [status, setStatus] = useState(true);
  const [animationName, setAnimationName] = useState("");

  useEffect(() => {
    const handleAnimationEnd = (event: { animationName: any }) => {
      const { animationName } = event;
      setAnimationName(animationName);
    };

    document.addEventListener("animationend", handleAnimationEnd);

    return () => {
      document.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  useEffect(() => {
    if (animationName === "ocultar_sun" || animationName === "salida_sun") {
      setTimeout(() => {
        setStatus(false);
      }, 1500);
    }
  }, [animationName]);
  // 滚动元素
  const scrollDom = useRef<HTMLDivElement>(null);

  const headerDom = useRef<HTMLDivElement>(null);

  const [headerHide, setHeaderHide] = useState(false);

  useEffect(() => {
    const scrollDomCurrent = scrollDom.current;
    const handleScroll = () => {
      if (scrollDomCurrent) {
        if (scrollDomCurrent.scrollTop > 700) {
          setHeaderHide(true);
        } else {
          setHeaderHide(false);
        }
      }
    };
    if (scrollDomCurrent) {
      scrollDomCurrent.addEventListener("scroll", handleScroll, true);
    }
    return () => {
      if (scrollDomCurrent) {
        scrollDomCurrent.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, [scrollDom]);

  useEffect(() => {
    headerHide
      ? headerDom.current?.classList.add("hidden")
      : headerDom.current?.classList.remove("hidden");
  }, [headerHide]);

  return (
    <div
      ref={scrollDom}
      className="scrollDom w-[100vw] h-[100vh]  overflow-x-hidden  overflow-y-auto scroll-behavior-[smooth]"
    >
      <Header ref={headerDom} />

      <div className="w-full h-full ">
        {/* 二级路由渲染出口 */}
        <Outlet />
      </div>
      <div className="group w-auto h-[2.5rem] z-[999] fixed bottom-[8vh] right-[4vw]  flex justify-center items-center ">
        <div
          className=" group-hover:w-auto
                      group-hover:h-[2.5rem]
                      group-hover:opacity-[1]
                      group-hover:border-[var(--text-color)]
                      group-hover:border-[1px]
                      group-hover:bg-[transparent] 
                      group-hover:rounded-[1.2rem]
                      w-3 h-3 bg-[--background] 
                      rounded-full opacity-0
                      overflow-hidden transition-all
                      mr-[5px] flex justify-between 
                      items-center px-[30px] text-[30px]"
        >
          <div className="mr-[20px]" onClick={theme}>
            {themeVisible ? (
              <Icon
                icon="line-md:sunny-outline-to-moon-alt-loop-transition"
                className="text-[var(--text-color)]"
              />
            ) : (
              <Icon
                icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                className="text-[var(--text-color)]"
              />
            )}
          </div>
          <div>
            <Icon
              icon="map:snow"
              className="animate-[rotate_1.5s_linear_infinite] text-[var(--text-color)]"
            />
          </div>
        </div>
        <Icon
          className=" text-[30px] text-[var(--text-color)] relative animate-spin"
          icon="clarity:settings-line"
        />
      </div>
      {/* <ThemeSwitch /> */}
      {status ? <ThemeSwitch /> : ""}
    </div>
  );
}
