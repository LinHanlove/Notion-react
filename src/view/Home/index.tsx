import HomeContainer from "@/view/HomeContainer";
import { TransitionDown, TransitionUp } from "@/components/Transition";
import Typewriter from "../Typewriter";
import homeBg from "@/assets/images/homeBg.jpg";

export default function Home() {
  return (
    <div className="w-full h-full">
      <img src={homeBg} alt="" className=" absolute z-[-1] w-full h-full"></img>
      <div className=" relative w-full z-10 h-auto ">
        <div className="w-full h-[100vh]  z-[999]">
          <TransitionDown>
            <div className={`h-[100vh] absolute z-1 w-full  pt-[--header] `}>
              {Typewriter()}
            </div>
          </TransitionDown>
        </div>
        <div className="absolute z-[999] w-full">
          <TransitionUp>
            <HomeContainer />
            <footer className="w-full h-[80px] bg-[--background] flex justify-center items-center text-center text-[--text-color] text-[12px]">
              <div>
                <a href="https://beian.miit.gov.cn/" target="_blank">
                  © 2023 💙陇ICP备2024005796号
                </a>
                <p className="text-[10px]">
                  Designed by 👨‍💻 <span className="text-[--green]">linhan</span>
                  All Rights Reserved. Powered by 💻
                  <span className="text-[--green]">
                    TypeScript React Vite Tailwind ...
                  </span>
                </p>
                <p className="text-[--green]">Enjoy it! Have Fun!</p>
              </div>
            </footer>
          </TransitionUp>
        </div>
      </div>
    </div>
  );
}
