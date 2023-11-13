import { Avatar, Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import md5 from "md5";
import * as user from "@/service";
import { useState } from "react";
import { ResponseCode } from "@/utils";
import Notification from "@/components/Notification";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function PersonalCenter() {
  type FieldType = {
    username: string;
    password: string;
    email: string;
    code: string;
  };

  const [userInfo, setUserInfo] = useState({
    username: {
      value: "",
      status: false,
    },
    password: {
      value: "",
      status: false,
    },
    email: {
      value: "",
      status: false,
    },
    code: {
      value: "",
      status: false,
    },
    motto: {
      value: "",
      status: false,
    }, // 座右铭
    birthday: {
      value: "",
      status: false,
    }, // 生日
    phone: {
      value: "",
      status: false,
    }, //电话
    nickname: {
      value: "",
      status: false,
    }, //昵称
  });

  // 修改输入框值和状态
  const editUserInfo = (parent, targetValue, ModifyValue) => {
    console.log(parent.targetValue, ModifyValue);

    return setUserInfo({
      ...parent,
      targetValue: {
        ...parent.targetValue,
        ModifyValue: !parent.targetValue.ModifyValue,
      },
    });
  };

  const getVerifyCode = async () => {
    try {
      const res = await user.getVerifyCode({
        email: userInfo.email.value,
        is_exist: 0,
      });

      if (res.code == ResponseCode.SUCCESS) {
        console.log(res.msg);
        Notification({ type: "success", msg: res.msg, time: 2.5 });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const url =
    "https://avatars.githubusercontent.com/u/119206123?s=400&u=c687a9a31da1b18e8b93313bca02766b9478bd50&v=4";
  return (
    <div className="w-full h-full flex justify-center bg-[url(https://img.touxiangwu.com/zb_users/upload/2022/10/202210161665903661597939.jpg)] bg-cover bg-no-repeat  items-center ">
      <motion.div className="w-[80vw] h-[70vh]  backdrop-blur-3xl flex rounded-2xl overflow-hidden">
        <div className=" w-1/2 bg-teal-50 flex justify-center items-center">
          <Form
            className="md:w-[70%] w-full md:h-[80%]  [&>.ant-form-item-explain-error]:text-orange-500 [&>.ant-form-item]:mb-[18px]"
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please input your Code!",
                },
              ]}
            >
              {/* <Input
                prefix={
                  <Icon
                    className="text-teal-500 font-bold text-lg"
                    icon="line-md:edit"
                    onClick={() => {
                      setDisabled({
                        ...disabled,
                        code: !disabled.code,
                      });
                    }}
                  />
                }
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    code: e.target.value,
                  });
                }}
                disabled={disabled.code}
                value={userInfo.code}
                placeholder="手机号"
              /> */}
            </Form.Item>
          </Form>
        </div>
        {/* 个人中心 */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-[80%] h-[80%] flex justify-center flex-col items-center">
            <div className="w-full h-[20%] flex justify-center items-center mb-10">
              <Avatar className="w-32 h-32 hover:animate-spin" src={url} />
            </div>
            <Form
              className="md:w-[70%] w-full md:h-[80%]  [&>.ant-form-item-explain-error]:text-orange-500 [&>.ant-form-item]:mb-[18px]"
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
                  prefix={
                    <Icon
                      className="text-teal-500 font-bold text-lg"
                      icon="line-md:edit"
                      onClick={() => {
                        editUserInfo(userInfo, "username", "status");
                      }}
                    />
                  }
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      username: {
                        ...userInfo.username,
                        value: e.target.value,
                      },
                    });
                  }}
                  disabled={userInfo.username.status}
                  value={userInfo.username.value}
                  placeholder="昵称"
                />
              </Form.Item>
              {/* <Form.Item<FieldType>
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={
                    <Icon
                      className="text-teal-500 font-bold text-lg"
                      icon="line-md:edit"
                      onClick={() => {
                        setDisabled({
                          ...disabled,
                          password: !disabled.password,
                        });
                      }}
                    />
                  }
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      password: md5(e.target.value),
                    });
                  }}
                  disabled={disabled.password}
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
                  prefix={
                    <Icon
                      className="text-teal-500 font-bold text-lg"
                      icon="line-md:edit"
                      onClick={() => {
                        setDisabled({
                          ...disabled,
                          email: !disabled.email,
                        });
                      }}
                    />
                  }
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      email: e.target.value,
                    });
                  }}
                  disabled={disabled.email}
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
                  prefix={
                    <Icon
                      className="text-teal-500 font-bold text-lg"
                      icon="line-md:edit"
                      onClick={() => {
                        setDisabled({
                          ...disabled,
                          code: !disabled.code,
                        });
                      }}
                    />
                  }
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      code: e.target.value,
                    });
                  }}
                  disabled={disabled.code}
                  value={userInfo.code}
                  placeholder="验证码"
                />
              </Form.Item>

              <Form.Item<FieldType>>
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
              </Form.Item> */}

              <Form.Item className="box w-full flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                >
                  <Button
                    className="text-[--text-color] bg-orange-500  font-bold"
                    type="primary"
                    htmlType="submit"
                    // disabled
                  >
                    提交🎉
                  </Button>
                </motion.div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
