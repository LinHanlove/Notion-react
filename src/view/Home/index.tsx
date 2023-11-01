import { Fragment, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import homeBg from "@/assets/images/homeBg.jpg";

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
          className={`h-[100vh] w-full pt-[8vh] bg-[url(https://img0.baidu.com/it/u=83702685,1043065242&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500)] bg-cover bg-no-repeat`}
        >
          玩转React Transition
        </div>
      </CSSTransition>
    </Fragment>
  );
}
