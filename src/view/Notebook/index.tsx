import { TransitionDown, TransitionUp } from "@/components/Transition";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Button, Timeline } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
export default function Notebook() {
  const navigate = useNavigate();
  // 写笔记
  const handleMdEditor = () => {
    navigate("/take-notes");
  };

  const handleMdPreview = () => {
    navigate("/preview-notes");
  };
  return (
    <div>
      <TransitionDown>
        <div className="h-[30vh] bg-[teal] text-center text-[var(--text-color)]">
          <div className="leading-[30vh] text-[20px] font-bold">
            make img img...
          </div>
        </div>
      </TransitionDown>
      <TransitionUp>
        <div className="h-[100vh] bg-[--background]">
          <div className="w-full h-10 flex justify-end mb-8">
            <Button
              type="primary"
              className="w-40 h-8 mr-6 mt-6 flex justify-center items-center text-[var(--text-color)] font-bold"
              shape="round"
              size="large"
              onClick={handleMdEditor}
            >
              <Icon
                icon="game-icons:scroll-quill"
                className="text-[2rem] mr-2"
              />
              <div>写文章</div>
            </Button>
          </div>
          <Timeline
            mode="alternate"
            items={[
              {
                children: (
                  <div onClick={handleMdPreview} className="w-[200px] h-[60px]">
                    点击预览文章
                  </div>
                ),
              },
              {
                children: (
                  <div onClick={handleMdPreview} className="h-[60px] ">
                    点击预览文章
                  </div>
                ),
                color: "green",
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
                children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
              },
              {
                color: "red",
                children: (
                  <div onClick={handleMdPreview} className="h-[60px] ">
                    点击预览文章
                  </div>
                ),
              },
              {
                children: (
                  <div onClick={handleMdPreview} className="h-[60px] ">
                    点击预览文章
                  </div>
                ),
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
                children: (
                  <div onClick={handleMdPreview} className="h-[60px] ">
                    点击预览文章
                  </div>
                ),
              },
            ]}
          />
        </div>
      </TransitionUp>
    </div>
  );
}
