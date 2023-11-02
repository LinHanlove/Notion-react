import { useEffect, useState } from "react";
import { MdPreview, MdCatalog } from "md-editor-rt";
import "md-editor-rt/lib/preview.css";
import { Card, Avatar, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
export default () => {
  const url =
    "https://avatars.githubusercontent.com/u/119206123?s=400&u=c687a9a31da1b18e8b93313bca02766b9478bd50&v=4";

  const [id] = useState("preview-only");

  // 获取本地存储
  const test = localStorage.getItem("text")!;
  const title = "linhan的第一篇笔记";
  const info = `<div class='text-4xl mt-4 font-bold'>${title}</div> <div class='flex justify-between items-center mt-2 mb-10 w-[40%] flex-wrap text-sm font-medium'><div>linhan</div><div class='text-[#8a919f]'>2023-03-25</div><div>16</div></div>\n\n`;

  const [text] = useState(`${info}` + JSON.parse(test)[0]);

  const [previewTheme] = useState(JSON.parse(test)[1]);

  return (
    <Layout className="h-full w-full ">
      <Layout
        hasSider
        className="md:w-[80%] w-full m-[0_auto]   [&>.ant-layout-content]:rounded-xl [&>.ant-layout-sider]:overflow-hidden [&>.ant-layout-sider]:rounded-xl"
      >
        <Content className="md:w-[68%] preview md:mr-5 w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden  ">
          <MdPreview
            editorId={id}
            modelValue={text}
            previewTheme={previewTheme}
            className=" min-h-[100vh]"
          />
        </Content>
        <Sider className="md:block max-h-[70vh] pt-10 bg-[#f2f3f5] min-w-[30%] hidden">
          <Card className="w-full h-[30%] border-0  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2">
            <div className=" w-[80%] m-[0_auto]  flex  items-center">
              <Avatar className="hover:animate-spin w-16 h-16" src={url} />
              <div className="text-xl font-bold ml-4 text-center text-[var(--text-color)]">
                <div> Notion</div>
                <div className="text-sm"> 前端菜鸡</div>
              </div>
            </div>

            <div className=" mt-4 text-[var(--text-color)] font-[var(--globalFont),serif] font-bold break-words">
              <div className="flex justify-between items-center w-[80%] m-[0_auto] ">
                <div className="flex justify-center flex-col items-center">
                  <div>文章</div>
                  <div>140</div>
                </div>
                <div className="flex justify-center flex-col items-center">
                  <div>分类</div>
                  <div>4</div>
                </div>
                <div className="flex justify-center flex-col items-center">
                  <div>访问量</div>
                  <div>1400</div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="w-full mt-[20px] border-0 overflow-y-auto  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2 ">
            <div className="text-[22px] font-bold my-[20px]">目录</div>
            <div className="[&>.md-editor-catalog-active]:text-[#008080]">
              <MdCatalog editorId={id} scrollElement={".preview"} />
            </div>
          </Card>
        </Sider>
      </Layout>
    </Layout>
  );
};
