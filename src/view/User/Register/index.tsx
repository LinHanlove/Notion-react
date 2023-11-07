import { getVerifyCode } from "@/service";
import { Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";

const Register = () => {
  type FieldType = {
    username: string;
    password: string;
    email: string;
    code: number;
  };

  const [code, setCode] = useState("");

  const handleRegister = () => {
    console.log("register");
  };

  const getVerityCode = async () => {
    try {
      const result = await getVerifyCode();
      console.log(result, "验证码");

      const imageUrl = result.data.code;
      setCode(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      className="md:w-[70%] w-[90%] h-full md:h-[90%] "
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
        <Input placeholder="昵称" />
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
        <Input.Password placeholder="密码" />
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
        <Input placeholder="邮箱" />
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
        <Input placeholder="验证码" />
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
        <div className="flex items-center w-full h-full">
          <Button
            className="w-1/2 h-full text-sm"
            type="primary"
            onClick={getVerityCode}
          >
            获取验证码
          </Button>
          {code !== "" ? (
            <div className="w-1/2 h-full rounded-xl overflow-hidden bg-red-500">
              <img alt="验证码" className="w-[100%] h-10" src={code} />
            </div>
          ) : (
            ""
          )}
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
