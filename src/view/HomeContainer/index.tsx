/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Button,
  Card,
  Input,
  Image,
  Divider,
  List,
  Skeleton,
} from "antd";
import { Icon } from "@iconify/react";
import { useScrollable } from "@/hooks/useScrollable";
import GgUrl from "@/assets/images/bg.jpg";
import { motion } from "framer-motion";
import * as article from "@/service/article";
import * as user from "@/service/user";
import { ResponseCode, getUserInfo, optional, setUserInfo } from "@/utils";
import { IGetUserInfoResult } from "@/service/user";

import InfiniteScroll from "react-infinite-scroll-component";
import { IGetSearchArticleListRes } from "@/service/article";

export default function HomeContainer() {
  const container = useRef<HTMLDivElement>(null);

  const url =
    "https://avatars.githubusercontent.com/u/119206123?s=400&u=c687a9a31da1b18e8b93313bca02766b9478bd50&v=4";

  const userInfo = JSON.parse(getUserInfo()!);

  const [info, setInfo] = useState<IGetUserInfoResult>();

  const [search, setSearch] = useState("");

  /** 获取用户信息 */
  const getUserinfo = async () => {
    try {
      const res = await user.getUserInfo({
        id: userInfo.id,
      });
      if (res.code === ResponseCode.SUCCESS) {
        setInfo(res.data);
        setUserInfo(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* 搜索 */
  const [resData, setResData] = useState<IGetSearchArticleListRes[]>([]);

  const [recommend, setRecommend] = useState<IGetSearchArticleListRes[]>([]);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState(false);

  const [pageInfo, setPageInfo] = useState({
    page: 1,
    page_size: 5,
    count: 0,
  });

  /** 搜索 */
  const handleSearch = async () => {
    if (loading) return;
    setLoading(true);
    const res = await article.getSearchArticleList({
      search: optional(search),
      page: pageInfo.page,
      page_size: pageInfo.page_size,
    });
    if (res.code === ResponseCode.SUCCESS) {
      setResData([...resData, ...res.data.data]);
      setPageInfo({
        ...pageInfo,
        page: pageInfo.page + 1,
        count: res.data.total.count,
      });
      resData.length === res.data.total.count
        ? setStatus(true)
        : setStatus(false);
      setLoading(false);
    } else {
      setPageInfo({
        ...pageInfo,
        page: pageInfo.page,
      });
    }
  };
  /** 获取推荐列表 */
  const getRecommendResData = async () => {
    try {
      const res = await article.getRecommendArticleList({
        search: optional(search),
        page: pageInfo.page,
        page_size: 2,
      });
      if (res.code === ResponseCode.SUCCESS) {
        setRecommend(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void getUserinfo();
    void handleSearch();
    void getRecommendResData();
  }, []);

  return (
    <div className="h-auto w-full  bg-[--background] SmileySans flex justify-center py-5">
      <div className="md:w-[70vw] w-[90%] flex flex-wrap">
        {/* 左 */}
        <div className="h-auto md:w-[30%] w-full ">
          {/* 个人介绍 */}
          <Card className="md:md:w-[80%] bg-[--background] text-[--text-color]  w-[100%] h-auto m-[0_auto] group overflow-hidden   [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2  rounded-xl duration-500  ease-linear shadow-box">
            <div className="w-full h-[12vh] relative flex items-center justify-center">
              <div className="">
                <Avatar
                  className="w-[10vh] h-[10vh] animate-spin"
                  src={info?.avatar ?? url}
                />
              </div>
            </div>

            <div className="w-full h-auto m-[0_auto]  px-4 flex justify-center items-center flex-col ">
              <div className="text-[2rem] font-bold my-2 text-center text-[var(--text-color)]">
                {info?.username}
              </div>
              <div className="w-full flex justify-between items-center px-2 text-[var(--text-color)] font-[var(--globalFont),serif] font-bold break-words">
                <div className="flex justify-center flex-col items-center">
                  <div>文章</div>
                  <div> {info?.personal_articles_count}</div>
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
          <Card className="md:md:w-[80%]  w-[100%] m-[0_auto] shadow-box  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2  bg-[var(--background)]   mt-8">
            <div className="w-full text-[1.4rem] text-[var(--lightGreen)] font-bold">
              搜索
            </div>
            <div className="mt-4 mb-2 [&>.ant-input-affix-wrapper:focus-within]:shadow-[0_0_0_1px_teal]">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜索文章"
                className="rounded-[4rem] h-7 border-[var(--lightGreen)] "
                suffix={
                  <motion.div
                    onClick={handleSearch}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  >
                    <Icon
                      icon="ph:radio-button-fill"
                      className="text-[1.4rem] text-[var(--lightGreen)] "
                    />
                  </motion.div>
                }
              />
            </div>
          </Card>
          {/* 推荐文章 */}
          <Card className="md:w-[80%] w-[100%] m-[0_auto]  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2  border-0 bg-[var(--background)]  shadow-box mt-8">
            <div className="w-full text-[1.4rem] text-[var(--lightGreen)] font-bold flex items-center ">
              <Icon
                icon="ion:book-outline"
                className="mr-[1.2rem] text-center"
              />
              推荐文章
            </div>
            <div className="mt-4">
              {recommend?.map((i) => {
                return (
                  <div className="w-full  h-[10vh] my-2" key={i.article_id}>
                    <div className="w-full h-[8vh] flex ">
                      <div className="w-2/5 rounded-lg h-full overflow-hidden">
                        <Image
                          src={i.article_cover === "" ? GgUrl : i.article_cover}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-3/5 rounded-lg h-full truncate text-[1rem] font-extrabold ml-2 text-[var(--text-color)]">
                        {i.article_summary}
                      </div>
                    </div>
                    <div className="w-full text-[0.7rem] text-[var(--greyFont)] flex items-center">
                      <Icon icon="fluent-mdl2:date-time" className="mr-2" />
                      <div>{i.create_at}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          {/* 赞赏名单 */}
          <Card className="md:w-[80%] w-[100%] m-[0_auto] bg-[--background]  h-[40vh] border-0   [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2  shadow-box mt-8">
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
                git仓库 :{" "}
                <span
                  onClick={() => {
                    window.open("https://gitee.com/linhanlove/notion");
                  }}
                  className="text-[teal]"
                >
                  https://gitee.com/linhanlove/notion
                </span>
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
          <div className="h-auto bg-[--background] flex justify-center ">
            <InfiniteScroll
              className="md:w-[50vw] w-[90vw] h-full "
              dataLength={resData.length}
              next={handleSearch}
              hasMore={!status}
              loader={<Skeleton avatar paragraph={{ rows: 2 }} active />}
              endMessage={<Divider plain>这是全部了！没有更多了~~~ 🤐</Divider>}
              scrollableTarget="scrollDom"
            >
              <List
                split={false}
                dataSource={resData}
                renderItem={(item, inx) => {
                  return inx % 2 === 0 ? (
                    <List.Item>
                      <Card
                        key={item.article_id}
                        className="h-[30vh] [&>.ant-card-body]:overflow-hidden  [&>.ant-card-body]:w-full [&>.ant-card-body]:flex [&>.ant-card-body]:h-full [&>.ant-card-body]:p-0  md:h-[24vh] md:w-[80%] w-[100%] m-[0_auto] flex  rounded-[12px] border-0 bg-[var(--background)]  shadow-box mt-8"
                      >
                        <div className="w-1/2 p-5">
                          <div className="text-sm font-bold text-[var(--text-color)] flex items-center">
                            <Icon icon="clarity:date-line" />
                            <div className="ml-2">发布于：{item.create_at}</div>
                          </div>
                          <div className="my-2 text-2xl font-bold text-[var(--text-color)]">
                            {item.title}
                          </div>
                          <div className="text-sm font-bold text-[var(--text-color)] flex items-center">
                            <div className="flex items-center">
                              <Icon
                                icon="mdi:hot"
                                className="text-[red] mr-1"
                              />
                              <div>{item.viewers}</div>
                            </div>
                            <div className="flex items-center mx-5">
                              <Icon icon="jam:write" className=" mr-1" />
                              <div>{item.author_name}</div>
                            </div>
                            <div className="flex items-center">
                              <Icon
                                icon="flat-color-icons:like"
                                className=" mr-1"
                              />
                              <div>{item.like}</div>
                            </div>
                          </div>
                          <div className="text-sm font-bold text-[var(--text-color)] truncate mt-2">
                            {item.article_summary}
                          </div>
                          <div className="text-sm font-bold  mt-2 flex  items-center">
                            {item.article_label.map((label: string) => {
                              return (
                                <div className="flex items-center  rounded-lg text-[var(--lightGreen)] border-dashed border  border-[var(--lightGray)] px-1">
                                  <Icon
                                    icon="solar:bookmark-opened-outline"
                                    className="text-[orange] mr-[8px]"
                                  />
                                  {label}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="w-1/2 h-full overflow-hidden rounded-[0_12px_12px_0]">
                          <img
                            src={
                              item.article_cover === ""
                                ? GgUrl
                                : item.article_cover
                            }
                            alt=""
                            className="w-full h-full   duration-500  ease-linear hover:scale-[1.2]"
                          />
                        </div>
                      </Card>
                    </List.Item>
                  ) : (
                    <List.Item>
                      <Card
                        key={item.article_id}
                        className="h-[30vh] rounded-[12px] md:h-[24vh] md:w-[80%] [&>.ant-card-body]:overflow-hidden  [&>.ant-card-body]:w-full [&>.ant-card-body]:flex [&>.ant-card-body]:h-full [&>.ant-card-body]:p-0 w-[100%] m-[0_auto] flex  border-0 bg-[var(--background)]  shadow-box mt-8"
                      >
                        <div className="w-1/2 h-full overflow-hidden rounded-[12px_0_0_12px]">
                          <img
                            src={
                              item.article_cover === ""
                                ? GgUrl
                                : item.article_cover
                            }
                            alt=""
                            className="w-full h-full   duration-500  ease-linear hover:scale-[1.2]"
                          />
                        </div>
                        <div className="w-1/2 p-5">
                          <div className="text-sm font-bold text-[var(--text-color)] flex items-center">
                            <Icon icon="clarity:date-line" />
                            <div className="ml-2">发布于：{item.create_at}</div>
                          </div>
                          <div className="my-2 text-2xl font-bold text-[var(--text-color)]">
                            {item.title}
                          </div>
                          <div className="text-sm font-bold text-[var(--text-color)] flex items-center">
                            <div className="flex items-center">
                              <Icon
                                icon="mdi:hot"
                                className="text-[red] mr-1"
                              />
                              <div>{item.viewers}</div>
                            </div>
                            <div className="flex items-center mx-5">
                              <Icon icon="jam:write" className=" mr-1" />
                              <div>{item.nickname}</div>
                            </div>
                            <div className="flex items-center">
                              <Icon
                                icon="flat-color-icons:like"
                                className=" mr-1"
                              />
                              <div>{item.like}</div>
                            </div>
                          </div>
                          <div className="text-sm font-bold text-[var(--text-color)] truncate mt-2">
                            {item.article_summary}
                          </div>
                          <div className="text-sm font-bold  mt-2 flex  items-center">
                            {item.article_label.map((label: string) => {
                              return (
                                <div className="flex items-center  rounded-lg text-[var(--lightGreen)] border-dashed border  border-[var(--lightGray)] px-1">
                                  <Icon
                                    icon="solar:bookmark-opened-outline"
                                    className="text-[orange] mr-[8px]"
                                  />
                                  {label}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </Card>
                    </List.Item>
                  );
                }}
              />
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
