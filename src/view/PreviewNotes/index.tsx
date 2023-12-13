/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { MdPreview, MdCatalog } from "md-editor-rt";
import "md-editor-rt/lib/preview.css";
import { Card, Avatar, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import * as article from "@/service/article";
import { ResponseCode, getUserInfo } from "@/utils";

export default function PreviewNotes() {
  const url =
    "https://avatars.githubusercontent.com/u/119206123?s=400&u=c687a9a31da1b18e8b93313bca02766b9478bd50&v=4";

  const [id] = useState("preview-only");

  const { state } = useLocation();

  const user = JSON.parse(getUserInfo()!);

  const [headerInfo, setHeaderInfo] = useState({
    title: "",
    create_at: "",
    author_name: "",
    viewers: "",
    avatar: "",
    username: "",
    motto: "",
    personal_articles_count: "",
  });
  const [content, setContent] = useState({
    article_content: "",
    preview_theme: "",
  });

  const getArticle = async () => {
    try {
      const res = await article.getArticle({
        article_id: state.id,
      });
      if (res.code === ResponseCode.SUCCESS) {
        setHeaderInfo({
          title: res.data.title,
          create_at: res.data.create_at,
          author_name: res.data.author_name,
          viewers: res.data.viewers.toString(),
          avatar: user.avatar,
          username: user.username,
          motto: user.motto,
          personal_articles_count: user.personal_articles_count,
        });

        setContent({
          article_content: res.data.article_content,
          preview_theme: res.data.preview_theme,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const info = `<div class='text-4xl mt-4 font-bold'>${headerInfo.title}</div> 
  <div class='flex justify-between items-center mt-2 mb-10 w-[40%] flex-wrap text-sm font-medium'>
  <div>${headerInfo.author_name}</div>
  <div class='text-[#8a919f]'>${headerInfo.create_at}</div>
  <div>${headerInfo.viewers}</div></div>\n\n`;

  useEffect(() => {
    console.log(user, "---");
    void getArticle();
  }, []);

  return (
    <Layout className="h-full w-full ">
      <Layout
        hasSider
        className="md:w-[80%] w-full m-[0_auto]   [&>.ant-layout-content]:rounded-xl [&>.ant-layout-sider]:overflow-hidden [&>.ant-layout-sider]:rounded-xl"
      >
        <Content className="md:w-[68%] preview md:mr-5 w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden  ">
          <MdPreview
            editorId={id}
            modelValue={`${info}${content.article_content}`}
            previewTheme={content.preview_theme}
            className=" min-h-[100vh]"
          />
        </Content>
        <Sider className="md:block max-h-[70vh] pt-10 bg-[#f2f3f5] min-w-[30%] hidden">
          <Card className="w-full h-[30%] border-0  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2">
            <div className=" w-full m-[0_auto]  flex  items-center">
              <Avatar className="hover:animate-spin w-16 h-16" src={url} />
              <div className="text-xl w-[calc(100%-64px)] font-bold ml-4 text-center text-[var(--text-color)]">
                <div className="text-3xl mt-2 text-[var(--black)]">
                  {headerInfo.username}
                </div>
                <div className="text-sm mt-2 text-[teal]">
                  {headerInfo.motto}
                </div>
              </div>
            </div>

            <div className="mt-4 text-[var(--black)] font-[var(--globalFont),serif] font-bold break-words">
              <div className="flex justify-between items-center w-[80%] m-[0_auto] ">
                <div className="flex justify-center flex-col items-center">
                  <div>文章</div>
                  <div>{headerInfo.personal_articles_count}</div>
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
}
