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
          </TransitionUp>
        </div>
      </div>
    </div>
  );
}
// {

// }
