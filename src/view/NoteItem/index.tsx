import { Avatar, Button, Modal } from "antd";
import * as barrage from "@/service/barrage";
import TextArea from "antd/es/input/TextArea";
import { SetStateAction, useState } from "react";
import styled from "styled-components";
import textBg from "@/assets/images/textBg.jpg";
import { ResponseCode, getUserInfo } from "@/utils";
import Notification, { _Popconfirm } from "@/components/Notification";
import { IMessageListRes } from "@/service/barrage";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const NodeWarp = styled.div`
  textarea {
    background: url(${textBg}) 100% 100% no-repeat !important;
    background-size: contain !important;
  }
`;

export default function Note(props: { TreeData: any[]; success: () => void }) {
  const url =
    "https://avatars.githubusercontent.com/u/119206123?s=400&u=c687a9a31da1b18e8b93313bca02766b9478bd50&v=4";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const { TreeData, success } = props;

  const userInfo = JSON.parse(getUserInfo()!);

  const [inputTextArea, setInputTextArea] = useState("");

  const [user, setUser] = useState<IMessageListRes | any>();

  const showModal = (i: SetStateAction<undefined>) => {
    setUser(i);
    setIsModalOpen(true);
  };

  const showEditModal = (i: SetStateAction<undefined>) => {
    setUser(i);
    setEditModalOpen(true);
  };

  const handleSubmitReply = async () => {
    try {
      const res = await barrage.addMessage({
        user_id: userInfo.id,
        parent_id: user.id,
        username: user.username,
        avatar: user.avatar,
        content: inputTextArea,
      });
      if (res.code === ResponseCode.SUCCESS) {
        success();
        setIsModalOpen(false);
        setInputTextArea("");
        Notification({ type: "success", msg: res.msg, time: 2.5 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await barrage.delMessage({
        id: id,
        is_edit: 0,
      });
      if (res.code === ResponseCode.SUCCESS) {
        success();
        Notification({ type: "success", msg: res.msg, time: 2.5 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 修改留言
  const handleEdit = async () => {
    try {
      const res = await barrage.editMessage({
        id: user.id,
        content: inputTextArea,
        username: user.username,
        avatar: user.avatar,
      });
      if (res.code === ResponseCode.SUCCESS) {
        void success();
        setEditModalOpen(false);
        setInputTextArea("");
        Notification({ type: "success", msg: res.msg, time: 2.5 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-auto min-h-[12vh]  my-5">
      {TreeData.map((i) => (
        <div className="mt-6">
          <div className="w-full h-[30%] flex justify-between items-center">
            <div className="flex justify-between items-start">
              <div>
                <Avatar shape="square" size="large" src={url} />
              </div>
              <div className="flex justify-between items-center">
                <div className="mx-1 text-[#ef794f] text-lg font-bold">
                  {i.username}
                </div>
                <div className="  text-sm font-bold">{i.create_at}</div>
              </div>
            </div>
            <div className="text-[teal] flex justify-between items-center">
              {userInfo.id === i.user_id ? (
                <div className="flex justify-between items-center mr-4">
                  <div className="mr-4">
                    <Icon
                      onClick={() => showEditModal(i)}
                      icon="line-md:edit"
                    />
                  </div>
                  <div>
                    <_Popconfirm
                      title="主儿"
                      description="确定要删除这个留言吗？"
                      handelConfirm={() => handleDelete(i.id)}
                    >
                      <Icon icon="material-symbols-light:delete" />
                    </_Popconfirm>
                  </div>
                </div>
              ) : null}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Button
                  onClick={() => showModal(i)}
                  type="primary"
                  className="w-12 h-5  flex justify-center items-center text-sm text-[var(--text-color)] font-bold"
                  size="large"
                >
                  回复
                </Button>
              </motion.div>
            </div>
          </div>
          <div>
            <div className="w-full h-[70%] flex justify-center items-center">
              <div className="  w-[90%] min-h-[70%] py-5 px-4 h-auto break-words  bg-[var(--commentContent)] rounded-xl ">
                {i.parent_id !== 0 ? (
                  <span className="text-[#03a9f4] text-sm font-bold pr-1">
                    @{i.username}
                    <span> : </span>
                  </span>
                ) : null}

                <span className=" text-sm  break-words text-[#000] whitespace-pre-line">
                  {i.content}
                </span>
              </div>
            </div>

            <div className={i.parent_id === 0 ? `ml-12` : ""}>
              {i.children.length !== 0 ? (
                <Note TreeData={i.children} success={success} />
              ) : null}
            </div>
          </div>
        </div>
      ))}
      <_Model
        title="留言"
        open={isModalOpen}
        Confirm={handleSubmitReply}
        Cancel={() => setIsModalOpen(false)}
        value={inputTextArea}
        setValue={setInputTextArea}
      />
      <_Model
        title="修改留言"
        open={isEditModalOpen}
        Confirm={handleEdit}
        Cancel={() => setEditModalOpen(false)}
        value={inputTextArea}
        setValue={setInputTextArea}
      />
    </div>
  );
}

const _Model = (props: {
  title: string;
  open: boolean;
  Confirm: () => void;
  Cancel: () => void;
  value: string;
  setValue: (v: SetStateAction<string>) => void;
}) => {
  const { title, open, Confirm, Cancel, value, setValue } = props;

  return (
    <Modal
      cancelText="取消"
      okText="提交"
      title={title}
      open={open}
      onOk={Confirm}
      onCancel={Cancel}
    >
      <NodeWarp>
        <TextArea
          className="[&>textarea]:text-[teal] [&>textarea]:font-semibold"
          rows={6}
          value={value}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setValue(e.target.value)
          }
          placeholder="咦~ 总想说点什么..."
          allowClear
          showCount
          style={{
            resize: "none",
          }}
        />
      </NodeWarp>
    </Modal>
  );
};
