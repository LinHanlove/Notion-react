/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Button, DatePicker, Form, Input } from "antd";
import { motion } from "framer-motion";
import * as user from "@/service/user";
import { useEffect, useState } from "react";
import { ResponseCode, getUserInfo, formatDate, optional } from "@/utils";
import Notification from "@/components/Notification";
import { Icon } from "@iconify/react/dist/iconify.js";
import TextArea from "antd/es/input/TextArea";
import UploadAvatarModel from "@/components/UploadAvatarModel";

export default function PersonalCenter() {
  type FieldType = {
    username: string;
    password: string;
    email: string;
    code: string;
  };
  type IUserInfo = {
    username: { value: string; status: boolean };
    avatar: { url: string };
    password: { value: string; status: boolean };
    email: { value: string; status: boolean };
    code: { value: string; status: boolean };
    motto: { value: string; status: boolean };
    birthday: { value: string; status: boolean };
    phone: { value: number | string; status: boolean };
    nickname: { value: string; status: boolean };
  };

  const dateFormat = "YYYY年MM月DD日";

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    username: {
      value: "",
      status: true,
    },
    avatar: {
      url: "",
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

  const [showModel, setShowModel] = useState(false);

  const user_id = JSON.parse(getUserInfo()!).id;
  /* 获取用户信息 */
  const handleGetUser = async () => {
    const res = await user.getUserInfo({
      id: user_id,
    });
    if (res.code === ResponseCode.SUCCESS) {
      const {
        data: { avatar, birthday, email, motto, nickname, phone, username },
      } = res;
      setUserInfo({
        ...userInfo,
        username: {
          ...userInfo.username,
          value: username,
        },
        avatar: {
          url: avatar ?? "",
        },
        birthday: {
          ...userInfo.birthday,
          value: birthday,
        },
        email: {
          ...userInfo.email,
          value: email,
        },
        motto: {
          ...userInfo.motto,
          value: motto,
        },
        nickname: {
          ...userInfo.nickname,
          value: nickname,
        },
        phone: {
          ...userInfo.phone,
          value: phone ?? "",
        },
      });
      console.log(avatar);
    }
  };

  const handleEditUserInfo = async () => {
    const res = await user.editUserInfo({
      id: user_id,
      nickname: optional(userInfo.nickname.value),
      motto: optional(userInfo.motto.value),
      birthday: optional(userInfo.birthday.value),
      phone: optional(userInfo.phone.value),
      email: optional(userInfo.email.value),
      is_edit: 0,
    });
    if (res.code === ResponseCode.SUCCESS)
      Notification({ type: "success", msg: res.msg, time: 2.5 });
  };

  useEffect(() => {
    void handleGetUser();
  }, []);

  const url =
    "https://avatars.githubusercontent.com/u/119206123?s=400&u=c687a9a31da1b18e8b93313bca02766b9478bd50&v=4";
  return (
    <div className="w-full md:h-full h-auto md:pt-0 py-[--header] flex justify-center bg-[url(https://img.touxiangwu.com/zb_users/upload/2022/10/202210161665903661597939.jpg)] bg-cover bg-no-repeat  items-center ">
      <motion.div className="w-[80vw] h-full md:h-[70vh] flex-col-reverse  backdrop-blur-3xl flex  md:flex-row rounded-2xl overflow-hidden">
        <div className=" w-full mt-5 md:mt-0 md:w-1/2 bg-0 md:bg-teal-50 flex justify-center items-center">
          <Form
            className="md:w-[70%] w-[80%] md:h-[80%]  [&>.ant-form-item-explain-error]:text-orange-500 [&>.ant-form-item]:mb-[18px]"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            {/* 座右铭 */}
            <Form.Item<FieldType>>
              <div className="w-full h-full  ">
                <div className="text-lg ml-1 text-teal-500 font-bold flex items-center">
                  <Icon
                    className=" font-bold text-lg"
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
                  <div className="ml-2"> 座右铭</div>
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
                  onClick={handleEditUserInfo}
                >
                  提交🎉
                </Button>
              </motion.div>
            </Form.Item>
          </Form>
        </div>
        {/* 个人中心 */}
        <div className="md:w-1/2 w-full flex justify-center items-center ">
          <div className="w-[80%] h-[80%] flex justify-center flex-col items-center">
            <div className="w-full h-[20%] flex justify-center items-center my-10 ">
              <Avatar
                onClick={() => setShowModel(true)}
                className="w-32 h-32 hover:animate-spin"
                src={userInfo.avatar.url ?? url}
              />
            </div>
            <Form
              className="md:w-[70%] w-full md:h-[80%]"
              name="basic"
              initialValues={{ remember: true }}
              autoComplete="off"
              labelCol={{ span: 4 }}
            >
              {/* 账号 */}
              <Form.Item label="主儿">
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
              <Form.Item label="昵称">
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
              <Form.Item label="email">
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
              <Form.Item label="手机号">
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
              <Form.Item label="破壳日">
                <div className="text-lg ml-1 font-bold flex w-full h-full items-center">
                  <div>
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
                    }}
                    disabled={userInfo.birthday.status}
                    placeholder={userInfo.birthday.value}
                    format={dateFormat}
                  />
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
        <UploadAvatarModel
          success={handleGetUser}
          userId={user_id}
          setShow={(e) => setShowModel(e)}
          isShow={showModel}
        ></UploadAvatarModel>
      </motion.div>
    </div>
  );
}
