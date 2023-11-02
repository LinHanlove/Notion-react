import { useState, useEffect } from "react";
import { setTheme, getTheme } from "@/utils";

/**
 * @body 全局主题切换
 * @return function主题变量
 * @type Function
 */
export const useTheme = () => {
  const [mode, setMode] = useState(""); // dark mode

  const initTheme = () => {
    if (
      getTheme() === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    initTheme();
  }, []);

  const toggleMode = () => {
    const classList = document.querySelector("html")?.classList;

    classList?.toggle("dark");
    if (mode == "dark") {
      setMode("light");
      setTheme("light");
    } else {
      setMode("dark");
      setTheme("dark");
    }
  };

  return (event: { clientX: number; clientY: number }) => {
    const documentDom = document as any;

    const isAppearanceTransition =
      documentDom.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isAppearanceTransition) {
      toggleMode();
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );
    const transition = documentDom.startViewTransition(() => {
      toggleMode();
    });
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: mode == "dark" ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: "ease-out",
          pseudoElement:
            mode == "dark"
              ? "::view-transition-old(root)"
              : "::view-transition-new(root)",
        }
      );
    });
  };
};
