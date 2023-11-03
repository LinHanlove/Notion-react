/* eslint-disable react-hooks/exhaustive-deps */
import { barrage } from "@/mock";
import { Icon } from "@iconify/react";
import { Button, Input, message } from "antd";
import { SetStateAction, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NoteItem from "@/view/NoteItem";
import textBg from "@/assets/images/textBg.jpg";
import { TransitionDown, TransitionUp } from "@/components/Transition";

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

  useEffect(() => {
    const barrageContainer = barrageRef.current;
    if (barrageContainer) {
      let index = 0;
      const timer = setInterval(() => {
        const barrageItem = document.createElement("div");
        const currentBarrage = barrage[index]; // 获取当前的弹幕对象

        barrageItem.innerHTML = `
                  <div class='flex  px-1 h-7 rounded-2xl bg-[#000000b2] items-center top-0'>
                            <img
                              src=${
                                currentBarrage.img
                                  ? currentBarrage.img
                                  : "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                              }
                              alt=""
                              class="w-6 mr-2 h-5 rounded-full"
                            />
                            <div class='text-[#fff] pr-1 text-sm'>${
                              currentBarrage.number
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
        if (index === barrage.length) {
          index = 0; // 重新从第一个弹幕开始播放
        }
      }, 300);

      return () => {
        clearInterval(timer); // 清除定时器
      };
    }
  }, [barrage]);
  const [messageApi, contextHolder] = message.useMessage();

  const handleRelease = async () => {
    if (inputValue !== "") {
      await barrage.push({
        i: "448",
        img: "",
        number: inputValue,
      });
      setInputValue("");
    } else {
      messageApi.open({
        type: "info",
        content: "都没写留言，你提交什么？小心我举报你！！",
        className: "custom-class",
        style: {
          marginTop: "20vh",
        },
      });
    }
    console.log(barrage, inputValue, "模拟数据");
  };

  return (
    <Barrage_warp>
      {contextHolder}
      <div className="w-full h-auto">
        <TransitionDown>
          <div className="h-[100vh] bg-[var(--background)] w-full pt-[var(--header)]">
            <div ref={barrageRef} className="h-full relative SmileySans">
              <div className="md:w-[20vw] w-full  h-[10vh] absolute top-[50%] z-[999] translate-y-[-50%] translate-x-[-50%] left-[50%] flex flex-col justify-center items-center">
                <div className="my-5 text-lg text-[--text-color] font-extrabold">
                  🎉 树洞 🎉
                </div>
                <Input
                  value={inputValue}
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setInputValue(e.target.value)}
                  placeholder="分享你那些有趣的事"
                  className="rounded-2xl border-[var(--lightGreen)] w-[80%] h-[40%]"
                  suffix={
                    <Icon
                      onClick={handleRelease}
                      icon="ph:radio-button-fill"
                      className="text-8 text-[var(--lightGreen)] "
                    />
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
