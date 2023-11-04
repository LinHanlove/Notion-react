import { Avatar, Button, Card, Input, Image } from "antd";
import { Icon } from "@iconify/react";
import { useScrollable } from "@/hooks/useScrollable";
import { useRef } from "react";
import { moduleList } from "@/mock";
import { motion } from "framer-motion";

export default function HomeContainer() {
  const container = useRef<HTMLDivElement>(null);
  const url =
    "https://avatars.githubusercontent.com/u/119206123?s=400&u=c687a9a31da1b18e8b93313bca02766b9478bd50&v=4";
  return (
    <div className="h-auto  bg-[--background] SmileySans flex justify-center py-5">
      <div className="md:w-[70vw] w-[90%] flex flex-wrap">
        {/* 左 */}
        <div className="h-auto md:w-[30%] w-full ">
          {/* 个人介绍 */}
          <Card className="md:md:w-[80%] bg-[--background] text-[--text-color]  w-[100%] h-[12vh] m-[0_auto] group overflow-hidden hover:h-[36vh] border-0  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2  rounded-xl duration-500  ease-linear shadow-[0_8px_10px_8px_var(--borderHoverColor)]">
            <div className="w-full h-[12vh] relative flex items-center">
              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 group-hover:translate-x-[50%] duration-500  ease-linear ">
                <Avatar className="w-[8vh] h-[8vh] animate-spin" src={url} />
              </div>
              <div className="absolute right-[4rem] text-[1.25rem] font-bold   group-hover:opacity-0 duration-500  ease-linear">
                notion
              </div>
            </div>

            <div className="md:md:w-[80%]  w-[90%] h-auto scale-0  group-hover:scale-[1] duration-500 ease-linear m-[0_auto] rounded-2xl px-2 flex justify-center items-center flex-col shadow-[4px_4px_10px_#ddd,-4px_-4px_10px_#ddd]">
              <div className="text-[2rem] font-bold my-2 text-center text-[var(--text-color)]">
                Notion
              </div>
              <div className="w-full flex justify-between items-center px-2 text-[var(--text-color)] font-[var(--globalFont),serif] font-bold break-words">
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
              <div className="w-full flex justify-center items-center">
                <Button
                  type="primary"
                  className="w-[60%] h-[1.4rem] my-2 flex justify-center items-center text-[var(--text-color)] font-bold"
                  shape="round"
                  size="large"
                >
                  <Icon
                    icon="line-md:star-pulsating-twotone-loop"
                    className="text-[30px] "
                  />
                  <div>朋友圈</div>
                </Button>
              </div>
            </div>
          </Card>
          {/* 搜索 */}
          <Card className="md:md:w-[80%]  w-[100%] m-[0_auto] border-0  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2  bg-[var(--background)]  shadow-[0_5px_10px_5px_var(--borderHoverColor)] mt-8">
            <div className="w-full text-[1.4rem] text-[var(--lightGreen)] font-bold">
              搜索
            </div>
            <div className="mt-4">
              <Input
                placeholder="Enter your username"
                className="rounded-[4rem] border-[var(--lightGreen)]  "
                suffix={
                  <Icon
                    icon="ph:radio-button-fill"
                    className="text-[1.4rem] text-[var(--lightGreen)] "
                  />
                }
              />
            </div>
          </Card>
          {/* 推荐文章 */}
          <Card className="md:w-[80%] w-[100%] m-[0_auto]  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2  border-0 bg-[var(--background)]  shadow-[0_5px_10px_5px_var(--borderHoverColor)] mt-8">
            <div className="w-full text-[1.4rem] text-[var(--lightGreen)] font-bold flex items-center ">
              <Icon
                icon="ion:book-outline"
                className="mr-[1.2rem] text-center"
              />
              推荐文章
            </div>
            <div className="mt-4">
              {[1, 2].map((inx) => {
                return (
                  <div className="w-full  h-[10vh] my-2" key={inx}>
                    <div className="w-full h-[8vh] flex ">
                      <div className="w-2/5 rounded-lg h-full overflow-hidden">
                        <Image src={url} className="w-full h-full" />
                      </div>
                      <div className="w-3/5 rounded-lg h-full truncate text-[1rem] font-extrabold ml-2 text-[var(--text-color)]">
                        {inx == 1
                          ? "生活倒影 | 无所期待的日子"
                          : "随笔 | 我们还年轻还在在路上"}
                      </div>
                    </div>
                    <div className="w-full text-[0.7rem] text-[var(--greyFont)] flex items-center">
                      <Icon icon="fluent-mdl2:date-time" className="mr-2" />
                      <div>2023-09-08 11:25:26</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          {/* 赞赏名单 */}
          <Card className="md:w-[80%] w-[100%] m-[0_auto] bg-[--background]  h-[40vh] border-0   [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2  shadow-[0_5px_10px_5px_var(--borderHoverColor)] mt-8">
            <div className="h-full">
              <div className="w-full h-[10%] text-[1.4rem]  text-[var(--lightGreen)] font-bold flex items-center ">
                <Icon icon="fa6-solid:cat" className="mr-4 text-center" />
                赞赏名单
              </div>
              <div
                ref={container}
                className=" mt-2 h-[70%]  overflow-hidden scroll-behavior-[smooth]"
              >
                {useScrollable(
                  container.current,
                  Array(100)
                    .fill("")
                    .map((i, inx) => i + inx)
                ).map((i: any, inx: number | null) => {
                  return (
                    <div
                      className="w-full  h-10 my-2 flex justify-between items-center"
                      key={i}
                    >
                      <div className="flex items-center truncate">
                        <div className="w-8 h-8 rounded-full  overflow-hidden">
                          <Image src={url} />
                        </div>
                        <div className="text-sm font-bold ml-2 text-[var(--text-color)]">
                          linhan
                        </div>
                      </div>
                      <div className="text-sm text-teal-400 font-bold">
                        {inx}元
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="h-[12%] mt-2 flex justify-center items-center">
                <Button
                  type="primary"
                  className="h-full md:w-[80%] w-[100%] flex justify-center items-center text-[var(--text-color)] font-bold"
                  shape="round"
                  size="large"
                >
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {" "}
                    <div>🎉 赞赏 🎉</div>
                  </motion.div>
                </Button>
              </div>
            </div>
          </Card>
        </div>
        {/* 右 */}
        <div className="h-auto md:w-[70%] md:mt-0 mt-5 w-full ">
          {/* 通知 */}
          <div className="h-[14vh] md:w-[80%] w-[100%] m-[0_auto] border-dashed border  border-[var(--lightGray)] rounded-xl p-[20px] flex ">
            <div className="flex justify-center items-center mr-2 w-[20%]">
              <Icon
                icon="emojione-monotone:angry-face-with-horns"
                className="text-[3rem] text-[red]"
              />
            </div>
            <div className="text-[1rem] font-bold text-[var(--greyFont)] md:w-[80%] w-[100%] ">
              <div className="my-2  w-full break-words  h-auto">
                git仓库 : https://gitee.com/linhanlove/notion
              </div>
              <div className="my-2">其他通知...</div>
            </div>
          </div>
          {/* 发现 */}
          <div className="h-10 md:w-[80%] w-[100%] m-[0_auto] border-dashed border-b  border-[var(--lightGray)] flex items-center">
            <Icon icon="fluent-emoji-flat:leaf-fluttering-in-wind" />
            <div className="text-sm text-[var(--text-color)] font-bold ml-2">
              发现
            </div>
          </div>
          {/* 模块列表 */}
          <div>
            {moduleList.map((i, inx) => {
              return inx % 2 == 0 ? (
                <Card
                  key={inx}
                  className="h-[30vh] [&>.ant-card-body]:overflow-hidden  [&>.ant-card-body]:w-full [&>.ant-card-body]:flex [&>.ant-card-body]:h-full [&>.ant-card-body]:p-0  md:h-[24vh] md:w-[80%] w-[100%] m-[0_auto] flex  rounded-lg border-0 bg-[var(--background)]  shadow-[0_5px_10px_5px_var(--borderHoverColor)] mt-8"
                >
                  <div className="w-1/2 p-5">
                    <div className="text-sm font-bold text-[var(--text-color)] flex items-center">
                      <Icon icon="clarity:date-line" />
                      <div className="ml-2">发布于：{i.time}</div>
                    </div>
                    <div className="my-2 text-2xl font-bold text-[var(--text-color)]">
                      {i.title}
                    </div>
                    <div className="text-sm font-bold text-[var(--text-color)] flex items-center">
                      <div className="flex items-center">
                        <Icon icon="mdi:hot" className="text-[red] mr-1" />
                        <div>{i.hot}</div>
                      </div>
                      <div className="flex items-center mx-5">
                        <Icon icon="jam:write" className=" mr-1" />
                        <div>{i.comment}</div>
                      </div>
                      <div className="flex items-center">
                        <Icon icon="flat-color-icons:like" className=" mr-1" />
                        <div>{i.like}</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-[var(--text-color)] truncate mt-2">
                      {i.info}
                    </div>
                    <div className="text-sm font-bold  mt-2 flex  items-center">
                      <div className="flex items-center  rounded-lg text-[var(--lightGreen)] border-dashed border  border-[var(--lightGray)] px-1">
                        <Icon
                          icon="solar:bookmark-opened-outline"
                          className="text-[orange] mr-[8px]"
                        />
                        {i.plate}
                      </div>
                      <div className="flex items-center ml-6 rounded-lg text-[var(--lightGreen)] border-dashed border  border-[var(--lightGray)] px-1">
                        <Icon
                          icon="game-icons:feather"
                          className="text-[var(--lightGreen)]  mr-2"
                        />
                        {i.stort}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 h-full overflow-hidden rounded-lg">
                    <img
                      src={i.img}
                      alt=""
                      className="w-full h-full   duration-500  ease-linear hover:scale-[1.2]"
                    />
                  </div>
                </Card>
              ) : (
                <Card
                  key={inx}
                  className="h-[30vh] md:h-[24vh] md:w-[80%] [&>.ant-card-body]:overflow-hidden  [&>.ant-card-body]:w-full [&>.ant-card-body]:flex [&>.ant-card-body]:h-full [&>.ant-card-body]:p-0 w-[100%] m-[0_auto] flex  border-0 bg-[var(--background)]  shadow-[0_5px_10px_5px_var(--borderHoverColor)] mt-8"
                >
                  <div className="w-1/2 h-full overflow-hidden rounded-lg">
                    <img
                      src={i.img}
                      alt=""
                      className="w-full h-full duration-500  ease-linear hover:scale-[1.2]"
                    />
                  </div>
                  <div className="w-1/2 p-5">
                    <div className="text-sm font-bold text-[var(--text-color)] flex items-center">
                      <Icon icon="clarity:date-line" />
                      <div className="ml-2">发布于：{i.time}</div>
                    </div>
                    <div className="my-2 text-2xl font-bold text-[var(--text-color)]">
                      {i.title}
                    </div>
                    <div className="text-sm font-bold text-[var(--text-color)] flex items-center">
                      <div className="flex items-center">
                        <Icon icon="mdi:hot" className="text-[red] mr-1" />
                        <div>{i.hot}</div>
                      </div>
                      <div className="flex items-center mx-5">
                        <Icon icon="jam:write" className=" mr-1" />
                        <div>{i.comment}</div>
                      </div>
                      <div className="flex items-center">
                        <Icon icon="flat-color-icons:like" className=" mr-1" />
                        <div>{i.like}</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-[var(--text-color)] truncate mt-2">
                      {i.info}
                    </div>
                    <div className="text-sm font-bold  mt-2 flex  items-center">
                      <div className="flex items-center  rounded-lg text-[var(--lightGreen)] border-dashed border  border-[var(--lightGray)] px-1">
                        <Icon
                          icon="solar:bookmark-opened-outline"
                          className="text-[orange] mr-[8px]"
                        />
                        {i.plate}
                      </div>
                      <div className="flex items-center ml-6 rounded-lg text-[var(--lightGreen)] border-dashed border  border-[var(--lightGray)] px-1">
                        <Icon
                          icon="game-icons:feather"
                          className="text-[var(--lightGreen)]  mr-2"
                        />
                        {i.stort}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
            <div className="w-full h-8 flex justify-center items-center my-6">
              <Button
                type="primary"
                className="h-full w-[25%] flex justify-center  items-center text-[var(--text-color)] font-bold"
                shape="round"
                size="large"
              >
                <div>🎉 下一页 🎉</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
