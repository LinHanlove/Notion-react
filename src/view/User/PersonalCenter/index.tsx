/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Button, DatePicker, Form, Input } from "antd";
import { motion } from "framer-motion";
import md5 from "md5";
import * as user from "@/service";
import { useEffect, useState } from "react";
import { ResponseCode, getUserInfo, formatDate, optional } from "@/utils";
import Notification from "@/components/Notification";
import { Icon } from "@iconify/react/dist/iconify.js";
import TextArea from "antd/es/input/TextArea";

export default function PersonalCenter() {
  type FieldType = {
    username: string;
    password: string;
    email: string;
    code: string;
  };

  const dateFormat = "YYYY 年 MM 月 DD 日";

  const [userInfo, setUserInfo] = useState({
    username: {
      value: "",
      status: true,
    },
    password: {
      value: "",
      status: true,
    },
    email: {
      value: "",
      status: true,
    },
    code: {
      value: "",
      status: true,
    },
    motto: {
      value: "",
      status: true,
    }, // 座右铭
    birthday: {
      value: "",
      status: true,
    }, // 生日
    phone: {
      value: "",
      status: true,
    }, //电话
    nickname: {
      value: "",
      status: true,
    }, //昵称
  });

  const user_id = JSON.parse(getUserInfo()!).id;

  const getUser = async () => {
    const res = await user.getUserInfo({
      id: user_id,
    });
    if (res.code === ResponseCode.SUCCESS) {
      const { data } = res;
      console.log(data, "---用户信息");
    }
  };

  const editUserInfo = async () => {
    const res = await user.editUserInfo({
      id: user_id,
      nickname: optional(userInfo.nickname.value),
      motto: optional(userInfo.motto.value),
      birthday: optional(userInfo.birthday.value),
      phone: optional(userInfo.phone.value),
      email: optional(userInfo.email.value),
      is_edit: 0,
      // avatar: "",
    });
  };

  useEffect(() => {
    void getUser();
  }, []);

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
            {/* 座右铭 */}
            <Form.Item<FieldType>>
              <div className="w-full h-full ">
                <div className="text-lg ml-1 font-bold">
                  <Icon
                    className="text-teal-500 font-bold text-lg"
                    icon="line-md:edit"
                    onClick={() => {
                      setUserInfo({
                        ...userInfo,
                        motto: {
                          ...userInfo.motto,
                          status: !userInfo.motto.status,
                        },
                      });
                    }}
                  />
                </div>
                <TextArea
                  className="[&>textarea]:text-[teal] [&>textarea]:font-semibold"
                  rows={6}
                  placeholder="我的座右铭,正在激励我前进,你也留下你的吧"
                  allowClear
                  showCount
                  onBlur={() => {
                    setUserInfo({
                      ...userInfo,
                      motto: {
                        ...userInfo.motto,
                        status: true,
                      },
                    });
                  }}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      motto: {
                        ...userInfo.motto,
                        value: e.target.value,
                      },
                    });
                  }}
                  disabled={userInfo.motto.status}
                  value={userInfo.motto.value}
                  style={{
                    resize: "none",
                  }}
                />
              </div>
            </Form.Item>
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
        {/* 个人中心 */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-[80%] h-[80%] flex justify-center flex-col items-center">
            <div className="w-full h-[20%] flex justify-center items-center my-10 ">
              <Avatar className="w-32 h-32 hover:animate-spin" src={url} />
            </div>
            <Form
              className="md:w-[70%] w-full md:h-[80%]  [&>.ant-form-item-explain-error]:text-orange-500 [&>.ant-form-item]:mb-[18px]"
              name="basic"
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              {/* 账号 */}
              <Form.Item<FieldType>>
                <Input
                  prefix={
                    <Icon
                      className="text-teal-500 font-bold text-lg"
                      icon="line-md:edit"
                      onClick={() => {
                        setUserInfo({
                          ...userInfo,
                          username: {
                            ...userInfo.username,
                            status: !userInfo.username.status,
                          },
                        });
                      }}
                    />
                  }
                  onBlur={() => {
                    setUserInfo({
                      ...userInfo,
                      username: {
                        ...userInfo.username,
                        status: true,
                      },
                    });
                  }}
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
                  placeholder="账号"
                />
              </Form.Item>
              {/* 昵称 */}
              <Form.Item<FieldType>>
                <Input
                  prefix={
                    <Icon
                      className="text-teal-500 font-bold text-lg"
                      icon="line-md:edit"
                      onClick={() => {
                        setUserInfo({
                          ...userInfo,
                          nickname: {
                            ...userInfo.nickname,
                            status: !userInfo.nickname.status,
                          },
                        });
                      }}
                    />
                  }
                  onBlur={() => {
                    setUserInfo({
                      ...userInfo,
                      nickname: {
                        ...userInfo.nickname,
                        status: true,
                      },
                    });
                  }}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      nickname: {
                        ...userInfo.nickname,
                        value: e.target.value,
                      },
                    });
                  }}
                  disabled={userInfo.nickname.status}
                  value={userInfo.nickname.value}
                  placeholder="昵称"
                />
              </Form.Item>

              {/* 邮箱 */}
              <Form.Item<FieldType>>
                <Input
                  prefix={
                    <Icon
                      className="text-teal-500 font-bold text-lg"
                      icon="line-md:edit"
                      onClick={() => {
                        setUserInfo({
                          ...userInfo,
                          email: {
                            ...userInfo.email,
                            status: !userInfo.email.status,
                          },
                        });
                      }}
                    />
                  }
                  onBlur={() => {
                    setUserInfo({
                      ...userInfo,
                      email: {
                        ...userInfo.email,
                        status: true,
                      },
                    });
                  }}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      email: {
                        ...userInfo.email,
                        value: e.target.value,
                      },
                    });
                  }}
                  disabled={userInfo.email.status}
                  value={userInfo.email.value}
                  placeholder="邮箱"
                />
              </Form.Item>
              {/* 手机号 */}
              <Form.Item<FieldType>>
                <Input
                  prefix={
                    <Icon
                      className="text-teal-500 font-bold text-lg"
                      icon="line-md:edit"
                      onClick={() => {
                        setUserInfo({
                          ...userInfo,
                          phone: {
                            ...userInfo.phone,
                            status: !userInfo.phone.status,
                          },
                        });
                      }}
                    />
                  }
                  onBlur={() => {
                    setUserInfo({
                      ...userInfo,
                      phone: {
                        ...userInfo.phone,
                        status: true,
                      },
                    });
                  }}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      phone: {
                        ...userInfo.phone,
                        value: e.target.value,
                      },
                    });
                  }}
                  disabled={userInfo.phone.status}
                  value={userInfo.phone.value}
                  placeholder="手机号"
                />
              </Form.Item>
              {/* 生日 */}
              <Form.Item<FieldType>>
                <div className="text-lg ml-1 font-bold">
                  <Icon
                    className="text-teal-500 font-bold text-lg"
                    icon="line-md:edit"
                    onClick={() => {
                      setUserInfo({
                        ...userInfo,
                        birthday: {
                          ...userInfo.birthday,
                          status: !userInfo.birthday.status,
                        },
                      });
                    }}
                  />
                </div>
                <DatePicker
                  className="w-full"
                  onChange={(date) => {
                    setUserInfo({
                      ...userInfo,
                      birthday: {
                        value: formatDate(date),
                        status: true,
                      },
                    });
                    console.log(formatDate(date));
                  }}
                  disabled={userInfo.birthday.status}
                  placeholder="生日"
                  format={dateFormat}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
