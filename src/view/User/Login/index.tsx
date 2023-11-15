import { login } from "@/service/user";
import { ResponseCode, setToken, setUserInfo } from "@/utils";
import { Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import md5 from "md5";

const Login = () => {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("login");
    const res = await login({
      username: userName,
      password: md5(password),
    });

    if (res.code == ResponseCode.SUCCESS) {
      const { token, userinfo } = res.data;

      setToken(token);
      setUserInfo(userinfo);
      navigate("/home");
    }
  };

  return (
    <Form
      className="md:w-[70%] w-[90%]  md:h-[50%] "
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="昵称"
        />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="密码"
        />
      </Form.Item>

      {/* <Form.Item<FieldType> name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item className="box w-full flex justify-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <Button
            className="text-[--text-color]  font-bold"
            type="primary"
            htmlType="submit"
            onClick={handleLogin}
          >
            登录🎉
          </Button>
        </motion.div>
      </Form.Item>
    </Form>
  );
};
export default Login;
