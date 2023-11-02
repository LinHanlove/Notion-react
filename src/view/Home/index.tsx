import HomeContainer from "@/view/HomeContainer";
import { TransitionDown } from "@/components/Transition";
import Typewriter from "../Typewriter";

export default function Home() {
  return (
    <div>
      <TransitionDown>
        <div
          className={`h-[100vh] w-full pt-[8vh] bg-[url(https://img.touxiangwu.com/zb_users/upload/2022/10/202210161665903661597939.jpg)] bg-cover bg-no-repeat`}
        >
          {Typewriter()}
        </div>
      </TransitionDown>
      <HomeContainer />
    </div>
  );
}
