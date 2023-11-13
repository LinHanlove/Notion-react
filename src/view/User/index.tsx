import { motion } from "framer-motion";
import { Button } from "antd";
import { useState } from "react";
import Login from "@/view/User/Login";
import Register from "@/view/User/Register";

export default function User() {
  const [left, setLeft] = useState<number | string>(0);
  const [right, setRight] = useState<number | string>(0);
  const [status, setStatus] = useState(true);

  const transition = (symbol: boolean) => {
    if (symbol) {
      setLeft("100%");
      setRight("-100%");
    } else {
      setLeft("0");
      setRight("0");
    }
  };

  const stateSwitch = () => {
    setStatus(!status);
    transition(status);
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-[url(https://img.touxiangwu.com/zb_users/upload/2022/10/202210161665903661597939.jpg)] bg-cover bg-no-repeat">
      <motion.div className="md:w-[46vw] w-[90vw]  h-[50vh]  rounded-xl overflow-hidden ">
        <div className="w-full h-full backdrop-blur-3xl relative ">
          <motion.div
            animate={{ x: left }}
            transition={{ type: "spring", stiffness: 600, damping: 20 }}
            className=" absolute left-0 w-1/2 h-full flex justify-center items-center"
          >
            {status ? <Login /> : <Register />}
          </motion.div>

          <motion.div
            animate={{ x: right }}
            transition={{ type: "spring", stiffness: 600, damping: 20 }}
            className=" absolute right-0 w-1/2 h-full flex justify-center items-center flex-col bg-[teal] "
          >
            <div className="font-bold text-2xl text-[--text-color]">
              {status ? " 没有账号吗？😒" : "我有账号😁"}
            </div>
            <div className="font-bold text-sm text-[--text-color]">
              {status ? " Don't you have an account ?" : "I have an account !"}
            </div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                type="primary"
                danger
                className="mt-6 text-[--text-color] font-bold"
                onClick={stateSwitch}
              >
                {status ? " 注册🎉" : "登录"}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
