import HomeContainer from "@/view/HomeContainer";
import { TransitionDown, TransitionUp } from "@/components/Transition";
import Typewriter from "../Typewriter";

export default function Home() {
  return (
    <div>
      <TransitionDown>
        <div
          className={`h-[100vh] w-full pt-[--header] bg-[url(https://img.touxiangwu.com/zb_users/upload/2022/10/202210161665903661597939.jpg)] bg-cover bg-no-repeat`}
        >
          {Typewriter()}
        </div>
      </TransitionDown>
      <TransitionUp>
        <HomeContainer />
      </TransitionUp>
    </div>
  );
}
