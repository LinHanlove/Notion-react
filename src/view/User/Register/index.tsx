import * as user from "@/service";
import { ResponseCode } from "@/utils";
import { Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { Notification } from "@/utils";

const Register = () => {
  type FieldType = {
    username: string;
    password: string;
    email: string;
    code: string;
  };

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    code: "",
  });
  const getVerifyCode = async () => {
    try {
      const res = await user.getVerifyCode({
        email: userInfo.email,
        is_exist: 0,
      });
      if (res.code === ResponseCode.SUCCESS) Notification("success", res.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    console.log("register");
  };

  return (
    <Form
      className="md:w-[70%] w-[90%] md:h-[80%] [&>.ant-form-item]:mb-[18px]"
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
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              username: e.target.value,
            });
          }}
          value={userInfo.username}
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
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              password: e.target.value,
            });
          }}
          value={userInfo.password}
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item<FieldType>
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              email: e.target.value,
            });
          }}
          value={userInfo.email}
          placeholder="邮箱"
        />
      </Form.Item>
      <Form.Item<FieldType>
        name="code"
        rules={[
          {
            required: true,
            message: "Please input your Code!",
          },
        ]}
      >
        <Input
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              code: e.target.value,
            });
          }}
          value={userInfo.code}
          placeholder="验证码"
        />
      </Form.Item>
      <Form.Item<FieldType>
        name="code"
        rules={[
          {
            required: true,
            message: "Please input your Code!",
          },
        ]}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Button
            onClick={getVerifyCode}
            className="w-1/2 h-full"
            type="link"
            block
          >
            获取验证码
          </Button>
        </div>
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
            onClick={handleRegister}
          >
            注册🎉
          </Button>
        </motion.div>
      </Form.Item>
    </Form>
  );
};
export default Register;
