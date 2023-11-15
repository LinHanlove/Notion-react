import { Button, Drawer, Form, Select, Tag } from "antd";
import TextArea from "antd/es/input/TextArea";
import { motion } from "framer-motion";
import UploadComponents from "@/components/UploadComponents";
import Notification from "@/components/Notification";
import * as article from "@/service/article";
import { ResponseCode, getUserInfo } from "@/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TakeNotesDrawer(props: {
  articleContent: any;
  isOpen: boolean;
  setOpen: (e: boolean) => void;
}) {
  type FieldType = {
    username: string;
    password: string;
    email: string;
    code: string;
  };

  type IArticleInfo = {
    article_label: string[];
    article_cover: string;
    article_summary: string;
  };

  // 标签
  const labelList = [
    {
      value: "gold", //颜色
      label: "前端", //内容
    },
    {
      value: "lime",
      label: "后端",
    },
    {
      value: "green",
      label: "JavaScript",
    },
    {
      value: "teal",
      label: "vuejs",
    },
    {
      value: "red",
      label: "react",
    },
    {
      value: "blue",
      label: "小程序",
    },
    {
      value: "orange",
      label: "待更新",
    },
  ];

  const navigate = useNavigate();

  const { isOpen, setOpen, articleContent } = props;

  const [articleInfo, setArticleInfo] = useState<IArticleInfo>({
    article_label: [],
    article_cover: "",
    article_summary: "",
  });

  const handleUpload = async (file: any) => {
    try {
      const res = await article.uploadArticleCover({
        file: file,
      });
      if (res.code === ResponseCode.SUCCESS)
        // 设置文章封面
        setArticleInfo({
          ...articleInfo,
          article_cover: res.data.article_cover,
        });
    } catch (error) {
      console.error(error);
    }
  };

  const findLabel = (val: string[]) => {
    const _find = (i: string) => {
      return labelList.find((item) => item.value === i)?.label;
    };
    // 设置文章标签
    setArticleInfo({
      ...articleInfo,
      article_label: val.map((i) => _find(i)) as string[],
    });
    return val.map((i) => _find(i));
  };

  const handleSubmit = async () => {
    const user = JSON.parse(getUserInfo()!);
    try {
      const data = {
        ...articleInfo,
        ...articleContent,
        author_id: user.id,
        author_name: user.username,
      };
      const res = await article.addArticle(data);
      if (res.code === ResponseCode.SUCCESS) navigate(-1);
      Notification({ type: "success", msg: res.msg, time: 2.5 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Drawer
      title="发表文章"
      placement="right"
      onClose={() => setOpen(false)}
      open={isOpen}
      width="500px"
    >
      <Form
        className="w-full md:h-[80%]  "
        initialValues={{ remember: true }}
        autoComplete="off"
        labelCol={{ span: 4 }}
      >
        {/* 标签 */}
        <Form.Item<FieldType> label="标签">
          <Select
            mode="multiple"
            tagRender={tagRender}
            style={{ width: "100%" }}
            options={labelList}
            onChange={(value) => {
              findLabel(value);
            }}
          />
        </Form.Item>
        <Form.Item<FieldType> label="文章封面">
          <UploadComponents
            title="上传封面"
            success={(file) => {
              handleUpload(file);
            }}
          />
        </Form.Item>
        {/* <Form.Item<FieldType> label="待更"></Form.Item> */}
        <Form.Item<FieldType> className="mb-10" label="编辑摘要">
          <TextArea
            className="[&>textarea]:text-[teal] [&>textarea]:font-semibold"
            rows={6}
            placeholder="主儿 这篇文章重点讲了什么呢？悄悄告诉我 ❀"
            allowClear
            showCount
            onBlur={(e) => {
              // 设置文章摘要
              setArticleInfo({
                ...articleInfo,
                article_summary: e.target.value,
              });
            }}
            maxLength={100}
            style={{
              resize: "none",
            }}
          />
        </Form.Item>
        <Form.Item className="w-full flex justify-end pt-4 border-t-[teal] border-t-[1px] border-dashed">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
          >
            <Button
              className="text-[--text-color] bg-orange-500  font-bold"
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
            >
              提交🎉
            </Button>
          </motion.div>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

const tagRender = (props: {
  label: any;
  value: any;
  closable: any;
  onClose: any;
}) => {
  const { label, value, closable, onClose } = props;

  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};
