import { Fragment, useEffect, useRef, useState } from "react";
import HomeContainer from "@/view/HomeContainer";
import { CSSTransition } from "react-transition-group";
import Typewriter from "../Typewriter";

export default function Home() {
  const nodeRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(true);
    return () => {
      setIsShow(false);
    };
  }, []);

  return (
    <Fragment>
      <CSSTransition
        nodeRef={nodeRef}
        in={isShow}
        timeout={800}
        unmountOnExit
        classNames={{
          enter: "animate__animated",
          enterActive: "animate__fadeInDown",
          exit: "animate__animated",
          exitActive: "animate__fadeOutDown",
        }}
      >
        <div
          ref={nodeRef}
          className={`h-[100vh] w-full pt-[8vh] bg-[url(https://img.touxiangwu.com/zb_users/upload/2022/10/202210161665903661597939.jpg)] bg-cover bg-no-repeat`}
        >
          {Typewriter()}
        </div>
      </CSSTransition>
      <HomeContainer />
    </Fragment>
  );
}
