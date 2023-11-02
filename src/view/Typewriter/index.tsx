import { useRef } from "react";
import { Icon } from "@iconify/react";
import useTypewriter from "react-typewriter-hook";

export default function Typewriter() {
  const typewriter = useRef<HTMLDivElement | null>(null);
  const scrollDom = document.querySelector(".scrollDom") as HTMLElement;
  let t: string | number | NodeJS.Timeout | undefined;
  const handleTranslate = () => {
    clearInterval(t);
    const transitionPage = scrollDom.offsetHeight;

    t = setInterval(() => {
      if (scrollDom && scrollDom.scrollTop < transitionPage) {
        scrollDom.scrollTop += 20;
      } else {
        clearInterval(t);
      }
    }, 20);
  };
  const text = "种一棵树最好的时间是十年前，其次是现在";
  const textValue = useTypewriter(text);
  return (
    <div className="w-full  relative h-full flex justify-center items-center flex-col">
      <div
        ref={typewriter}
        className="md:w-[30vw] w-[80vw] h-[20vh] text-[1.2rem] text-[--text-color] transition-opacity "
      >
        <div className="font-extrabold text-center mb-4">生活日志</div>
        <div className="w-full  cursor-pointer text-center  text-[var(--white)] bg-[var(--translucent)] rounded-xl px-4 ">
          <div>{textValue}</div>
        </div>
      </div>
      <div
        className="w-[30vw] h-auto absolute bottom-[10vh] flex justify-center"
        onClick={() => handleTranslate()}
      >
        <Icon
          icon="ep:arrow-down-bold"
          className="text-[3.23rem] text-[--text-color] animate-bounce"
        />
      </div>
      <div
        className={`h-[10vh] absolute bottom-0 z-[5] w-[200%] bg-[url(/src/assets/images/bannerwave1.png)] bg-cover bg-repeat animate-loop1`}
      ></div>
      <div className="h-[10vh]  absolute bottom-0 z-[10] w-[200%] bg-[url(/src/assets/images/bannerwave2.png)]  bg-repeat animate-loop2"></div>
    </div>
  );
}
