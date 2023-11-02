import { useState, useEffect } from "react";

/**
 * @body 无缝滚动列表
 * @ang dom 需要滚动的列表类名  list 初始数据
 * @return lastList dom中循环的数据
 * @info 导入使用前应确保dom不为空，否则不会立即滚动
 */
let interval: string | number | NodeJS.Timeout | undefined;
export const useScrollable = (dom: Element | null, list?: any) => {
  // 列表轮播
  const [listData, setListData] = useState(list); // 初始列表数据

  const play = () => {
    // 清除之前的定时器
    clearInterval(interval);

    interval = setInterval(() => {
      if (dom) {
        if (dom.scrollTop + dom.clientHeight >= dom.scrollHeight) {
          dom.scrollTop = 0; // 将滚动位置重置到顶部
          // 将列表的第一个元素追加到列表的末尾
          setListData((prevData: string | any[]) => [
            ...prevData.slice(1),
            prevData[0],
          ]);
        } else {
          dom.scrollTop += 1; // 每次滚动的距离
        }
      }
    }, 15); // 滚动的间隔时间
  };

  useEffect(() => {
    play();
    dom?.addEventListener("mouseover", () => {
      clearInterval(interval);
    });
    dom?.addEventListener("mouseout", () => {
      play();
    });

    return () => clearInterval(interval);
  });
  return listData;
};
