import { Avatar, Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import styled from "styled-components";
import textBg from "@/assets/images/textBg.jpg";
const NodeWarp = styled.div`
  textarea {
    background: url(${textBg}) 100% 100% no-repeat !important;
    background-size: contain !important;
  }
`;

export default function Note() {
  const url =
    "https://avatars.githubusercontent.com/u/119206123?s=400&u=c687a9a31da1b18e8b93313bca02766b9478bd50&v=4";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="w-full h-auto min-h-[12vh]  my-5">
      <div className="w-full h-[30%] flex justify-between items-center">
        <div className="flex justify-between items-start">
          <div>
            <Avatar shape="square" size="large" src={url} />
          </div>
          <div className="flex justify-between items-center">
            <div className="mx-1 text-[#ef794f] text-lg font-bold">linhan</div>
            <div className="  text-sm font-bold">2023-10-08 14:58:36</div>
          </div>
        </div>
        <div>
          <Button
            onClick={showModal}
            type="primary"
            className="w-12 h-5  flex justify-center items-center text-sm text-[var(--text-color)] font-bold"
            size="large"
          >
            回复
          </Button>
        </div>
      </div>
      <div className="w-full h-[70%] flex justify-center items-center">
        <div className="  w-[90%] min-h-[70%] py-5 px-4 h-auto break-words  bg-[var(--commentContent)] rounded-xl ">
          <span className="text-[#03a9f4] text-sm font-bold pr-1">
            @linhan
            <span>:</span>
          </span>

          <span className=" text-sm font-[500] break-words text-[#000]">
            分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事分享你那些有趣的事
          </span>
        </div>
      </div>

      <Modal
        cancelText="取消"
        okText="提交"
        title="留言"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <NodeWarp>
          <TextArea
            className="[&>textarea]:text-[teal] [&>textarea]:font-semibold"
            rows={6}
            placeholder="咦~ 总想说点什么..."
            allowClear
            showCount
            style={{
              resize: "none",
            }}
          />
        </NodeWarp>
      </Modal>
    </div>
  );
}
