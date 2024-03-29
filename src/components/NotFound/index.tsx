import { useEffect, useRef } from "react";
import bodymovin from "bodymovin";
import animation from "./animation.json";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const animItem = bodymovin.loadAnimation({
      container: containerRef.current, // 指定动画容器
      animationData: animation, // 传递动画数据
      loop: true, // 是否循环播放
      autoplay: true, // 是否自动播放
    });

    return () => {
      animItem.destroy(); // 在组件卸载时销毁动画实例
    };
  }, []);

  return (
    <div className="w-full h-[100vh] bg-[#fff] relative flex justify-center items-center flex-col">
      <div ref={containerRef} className="z-1"></div>

      <Button
        onClick={() => {
          navigate("/home");
        }}
        type="primary"
        className=" absolute bottom-40 z-10"
      >
        GO HOME
      </Button>
    </div>
  );
}
