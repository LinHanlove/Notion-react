import { useState } from "react";
import { MdEditor, ToolbarNames } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { Button, Input, message } from "antd";
import { Icon } from "@iconify/react";
import "md-editor-rt/lib/preview.css";

import MdThemeStyle from "@/components/MdThemeStyle/index";

export default () => {
  const [text, setText] = useState("## 请输入Markdown文本");

  const [previewTheme, setPreviewTheme] = useState("default");

  const [save, setSave] = useState("");

  const handleSave = (val: string) => {
    setStatus(true);
    setSave(val);
    localStorage.setItem("text", val);
  };

  const handleChildData = (childData: string) => {
    // 在这里处理来自子组件的数据
    setPreviewTheme(childData);
  };

  const [status, setStatus] = useState(false);

  const handleRelease = (val: string) => {
    console.log(status);

    if (!status) {
      message.success("保存后提交哦");
    } else {
      localStorage.setItem("text", JSON.stringify([val, previewTheme]));
      message.success("已发布");
      setStatus(false);
    }
  };

  interface IData {
    toobars: ToolbarNames[];
    toolbarsExclude: ToolbarNames[];
  }

  const [data] = useState<IData>({
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
      "save",
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
      <div className="w-full h-[8vh] flex justify-between items-center">
        <Input
          placeholder="输入文章标题..."
          className="w-4/5 ml-8 border-0 text-xl font-bold focus:border-0 focus:shadow-none placeholder:text-lg "
        />
        <div className="w-1/5 h-full pr-5 flex justify-end items-center">
          <Button
            type="primary"
            className="w-40 h-10 flex justify-center items-center text-[var(--text-color)] font-bold"
            shape="round"
            size="large"
            onClick={() => handleRelease(save)}
          >
            <Icon
              icon="game-icons:scroll-quill"
              className="text-xl mr-[10px]"
            />
            <div>发表</div>
          </Button>
        </div>
      </div>
      <div className="h-[92vh]">
        <MdEditor
          className="h-full"
          defToolbars={[<MdThemeStyle onData={handleChildData} />]}
          modelValue={text}
          onChange={setText}
          onSave={handleSave}
          previewTheme={previewTheme}
          toolbars={data.toobars}
          toolbarsExclude={data.toolbarsExclude}
        />
      </div>
    </div>
  );
};
