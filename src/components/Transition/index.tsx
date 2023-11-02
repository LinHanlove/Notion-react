import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

export function TransitionUp(props: { children: ReactNode }) {
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
          enter: "animate__animated", //进口
          enterActive: "animate__fadeInUp",
          exit: "animate__animated", //出口
          exitActive: "animate__fadeOutUp",
        }}
      >
        <div ref={nodeRef} className="h-auto">
          {props.children}
        </div>
      </CSSTransition>
    </Fragment>
  );
}

export function TransitionDown(props: { children: ReactNode }) {
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
        <div ref={nodeRef} className="h-auto">
          {props.children}
        </div>
      </CSSTransition>
    </Fragment>
  );
}
