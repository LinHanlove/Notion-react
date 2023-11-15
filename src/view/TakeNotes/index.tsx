import { useState } from "react";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { Button, Input } from "antd";
import { Icon } from "@iconify/react";
import "md-editor-rt/lib/preview.css";
import TakeNotesDrawer from "@/components/TakeNotesDrawer";

import MdThemeStyle from "@/components/MdThemeStyle/index";

export default () => {
  const [text, setText] = useState("## 请输入Markdown文本");

  const [previewTheme, setPreviewTheme] = useState("default");

  const [article, setArticle] = useState({
    title: "",
    article_content: "",
    preview_theme: "",
  });

  const handleChildData = (childData: string) => {
    // 在这里处理来自子组件的数据
    setPreviewTheme(childData);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [data] = useState({
    toobars: [
      "bold",
      "underline",
      "italic",
      "strikeThrough",
      "sub",
      "sup",
      "quote",
      "unorderedList",
      "orderedList",
      "codeRow",
      "code",
      "link",
      "image",
      "table",
      "revoke",
      "next",
      "=",
      0,
      "pageFullscreen",
      "catalog",
      "fullscreen",
      "preview",
      "htmlPreview",
    ],
    toolbarsExclude: ["github", "htmlPreview", "pageFullscreen"],
  });
  return (
    <div className="w-[100vw] h-[100vh] bg-[#fff] ">
      <div className="w-full h-[10vh] flex justify-between items-center md:flex-nowrap flex-wrap   ">
        <Input
          onBlur={(e) =>
            setArticle({
              ...article,
              title: e.target.value,
            })
          }
          placeholder="输入文章标题..."
          className="md:w-4/5 w-full  md:ml-8 border-0 text-xl font-bold focus:border-0 focus:shadow-none placeholder:text-lg "
        />
        <div className="md:w-1/5 w-full md:h-full h-6 pr-5 flex justify-end items-center">
          <Button
            type="primary"
            className="w-40 md:h-10 h-6 flex justify-center items-center text-[var(--text-color)] font-bold"
            shape="round"
            size="large"
            onClick={() => {
              setArticle({
                ...article,
                preview_theme: previewTheme,
                article_content: text,
              });

              setIsOpen(true);
            }}
          >
            <Icon
              icon="game-icons:scroll-quill"
              className="text-xl mr-[10px]"
            />
            <div>发表</div>
          </Button>
        </div>
      </div>
      <div className="h-[92vh] ">
        <MdEditor
          className="h-full "
          defToolbars={[<MdThemeStyle onData={handleChildData} />]}
          modelValue={text}
          onChange={setText}
          previewTheme={previewTheme}
          toolbars={data.toobars}
          toolbarsExclude={data.toolbarsExclude}
        />
      </div>
      <TakeNotesDrawer
        articleContent={article}
        isOpen={isOpen}
        setOpen={(e: boolean) => setIsOpen(e)}
      />
    </div>
  );
};
