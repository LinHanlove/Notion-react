/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import { Button, Input, message } from "antd";
import { SetStateAction, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NoteItem from "@/view/NoteItem";
import textBg from "@/assets/images/textBg.jpg";
import { TransitionDown, TransitionUp } from "@/components/Transition";
import Notification from "@/components/Notification";
import { motion } from "framer-motion";
import * as barrage from "@/service/barrage";
import { ResponseCode, getUserInfo } from "@/utils";
import { IBarrageListRes } from "@/service/barrage";
import homeBg from "@/assets/images/homeBg.jpg";

const Barrage_warp = styled.div`
  textarea {
    background: url(${textBg}) 100% 100% no-repeat !important;
    background-size: contain !important;
  }
`;

export default function TreeHole() {
  const barrageRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState(""); // 定义状态变量

  const { TextArea } = Input;

  const [messageApi, contextHolder] = message.useMessage();

  const user = JSON.parse(getUserInfo()!);

  const [barrageList, setBarrageList] = useState<IBarrageListRes[]>([]);

  useEffect(() => {
    const barrageContainer = barrageRef.current;

    if (barrageContainer) {
      let index = 0;
      const timer = setInterval(() => {
        const barrageItem = document.createElement("div");
        const currentBarrage = barrageList[index]; // 获取当前的弹幕对象

        barrageItem.innerHTML = `
                  <div class='flex  px-1 h-7 rounded-2xl bg-[#000000b2] items-center top-0'>
                            <img
                              src=${
                                currentBarrage.barrage_avatar
                                  ? currentBarrage.barrage_avatar
                                  : "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                              }
                              alt=""
                              class="w-6 mr-2 h-5 rounded-full"
                            />
                            <div class='text-[#fff] pr-1 text-sm'>${
                              currentBarrage.barrage
                            }</div>
                            </div>
                            `;

        barrageItem.classList.add("barrage_item");
        barrageItem.style.position = "absolute";

        barrageItem.style.animation = `rightToLeft ${Math.floor(
          Math.random() * 20
        )}s linear both`;

        barrageContainer.appendChild(barrageItem);

        console.log(barrageContainer.clientHeight);

        const maxTop = barrageContainer.clientHeight - barrageItem.offsetHeight; // 获取弹道范围

        barrageItem.style.top = `${Math.floor(Math.random() * maxTop)}px`; // 随机高度 animation: rightToLeft 7s linear both;

        barrageItem.addEventListener("animationend", () => {
          // 弹幕动画结束时触发，将弹幕元素从DOM中移除
          barrageContainer.removeChild(barrageItem);
        });

        index++;
        if (index === barrageList.length) {
          index = 0; // 重新从第一个弹幕开始播放
        }
      }, 300);

      return () => {
        clearInterval(timer); // 清除定时器
      };
    }
  }, [barrageList]);

  // 获取弹幕
  const getBarrageList = async () => {
    try {
      const res = await barrage.getBarrageList({
        page: 1,
        page_size: 200,
      });
      if (res.code === ResponseCode.SUCCESS) {
        setBarrageList(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 发布弹幕
  const handleRelease = async () => {
    try {
      if (inputValue !== "") {
        if (inputValue.length >= 50) {
          messageApi.open({
            type: "error",
            content:
              "谁让你写个留言这么多字，寒寒都装不下了，最多不能超多50个字",
            className: "custom-class",
            style: {
              marginTop: "20vh",
            },
          });
          setInputValue("");
          return;
        }

        const res = await barrage.addBarrage({
          barrage: inputValue,
          barrage_avatar: user.avatar,
        });
        if (res.code === ResponseCode.SUCCESS) {
          Notification({ type: "error", msg: res.msg, time: 2.5 });
        }
        setInputValue("");
      } else {
        messageApi.open({
          type: "error",
          content: "都没写留言，你提交什么？小心我举报你！！",
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    void getBarrageList();
  }, []);

  return (
    <Barrage_warp>
      {contextHolder}
      <div className="w-full h-auto">
        <TransitionDown>
          <div className="h-[100vh] relative bg-[var(--background)] w-full pt-[var(--header)]">
            <img src={homeBg} alt="" className="absolute top-0 w-full h-full" />
            <div ref={barrageRef} className="h-full relative SmileySans">
              <div className="md:w-[20vw] w-full  h-[10vh] absolute top-[50%] z-[999] translate-y-[-50%] translate-x-[-50%] left-[50%] flex flex-col justify-center items-center">
                <div className="my-5 text-lg text-[--text-color] font-extrabold">
                  🎉 树洞 🎉
                </div>
                <Input
                  onKeyDown={(e) => {
                    e.code === "Enter" && handleRelease();
                  }}
                  value={inputValue}
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setInputValue(e.target.value)}
                  placeholder="分享你那些有趣的事"
                  className="rounded-2xl border-[var(--lightGreen)] w-[80%] h-[40%]"
                  suffix={
                    <motion.div
                      onClick={handleRelease}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                      }}
                    >
                      <Icon
                        icon="ph:radio-button-fill"
                        className="text-[1.4rem] text-[var(--lightGreen)] "
                      />
                    </motion.div>
                  }
                />
              </div>
            </div>
          </div>
        </TransitionDown>
        <TransitionUp>
          <div className="h-auto w-full flex justify-center pb-10">
            <div className="md:w-[50%] w-[90%]  h-auto  ">
              <div className="flex items-center my-5 SmileySans">
                <Icon
                  className="text-lg text-[teal] mr-1"
                  icon="simple-line-icons:note"
                />
                <div className="text-[teal] text-xl font-extrabold ">
                  留言📩
                </div>
              </div>
              <div className="">
                <TextArea
                  className="[&>textarea]:text-[teal] [&>textarea]:font-semibold"
                  rows={6}
                  placeholder="咦~ 总想说点什么..."
                  allowClear
                  showCount
                  style={{
                    resize: "none",
                  }}
                />
                <div className="w-full flex md:justify-end justify-center items-center mt-2 ">
                  <Button
                    type="primary"
                    className=" md:w-40 w-[50%] md:h-8 h-6 m-[12px_0] flex justify-center items-center text-[var(--text-color)] font-bold"
                    shape="round"
                    size="large"
                  >
                    <Icon
                      className="w-6 h-6 mr-2 text-[--text-color] scale-an"
                      icon="icon-park-solid:play"
                    />
                    <div>提交</div>
                  </Button>
                </div>
              </div>
              <div className="w-full h-auto">
                <div className="w-full flex SmileySans my-5 justify-start items-center font-bold text-[teal] text-lg">
                  <div> 🎉Comments</div>
                  <div className="mx-2"> |</div>
                  <div>
                    <span>45</span>条留言 🎉
                  </div>
                </div>
                <NoteItem />
                <NoteItem />
                <NoteItem />
              </div>
            </div>
          </div>
        </TransitionUp>
      </div>
    </Barrage_warp>
  );
}
