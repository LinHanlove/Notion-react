import { useState } from "react";
import { DropdownToolbar } from "md-editor-rt";
import { Icon } from "@iconify/react";

interface ChildComponentProps {
  onData: (childData: string) => void;
}

export default function MdThemeStyle({ onData }: ChildComponentProps) {
  const [state, setState] = useState({
    visible: false,
  });

  const onChange = (visible: boolean) => {
    setState({
      visible,
    });
  };

  const theme = [
    "default",
    "github",
    "vuepress",
    "mk-cute",
    "smart-blue",
    "cyanosis",
  ];

  const emojiHandler = (emoji: string) => {
    onData(emoji);
  };

  return (
    <DropdownToolbar
      title="emoji"
      visible={state.visible}
      onChange={onChange}
      trigger={<Icon icon="ep:menu" className="text-[20px]" />}
      overlay={
        <div className="emoji-container">
          <div className="m-[20px_0_0_10px] border-b border-[#ccc]">
            Markdown主题
          </div>
          <ol className="emojis">
            {theme.map((i, inx) => {
              return (
                <li
                  className="h-[30px] text-[#000] hover:bg-[teal] flex justify-center items-center cursor-pointer"
                  key={inx}
                  onClick={() => {
                    emojiHandler(i);
                  }}
                >
                  <div>{i}</div>
                </li>
              );
            })}
          </ol>
        </div>
      }
    ></DropdownToolbar>
  );
}
