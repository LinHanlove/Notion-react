/* eslint-disable react-hooks/exhaustive-deps */
import { TransitionDown, TransitionUp } from "@/components/Transition";
import { Avatar, Divider, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import * as article from "@/service/article";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from "react";
import { ResponseCode, getUserInfo } from "@/utils";

export default function Notebook() {
  const navigate = useNavigate();

  const user = JSON.parse(getUserInfo()!);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState(false);

  const [articleList, setArticleList] = useState<any[]>([]);

  const [pageInfo, setPageInfo] = useState({
    page: 1,
    page_size: 10,
    count: 0,
  });

  const getUserArticleList = async () => {
    try {
      console.log(loading);
      if (loading) return;
      setLoading(true);
      const res = await article.getUserArticleList({
        author_id: user.id,
        page: pageInfo.page,
        page_size: pageInfo.page_size,
      });
      if (res.code === ResponseCode.SUCCESS) {
        setArticleList([...articleList, ...res.data.data]);
        setPageInfo({
          ...pageInfo,
          page: pageInfo.page + 1,
          count: res.data.total.count,
        });
        articleList.length === res.data.total.count
          ? setStatus(true)
          : setStatus(false);
        setLoading(false);
      } else {
        setPageInfo({
          ...pageInfo,
          page: pageInfo.page,
        });
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    void getUserArticleList();
  }, []);

  return (
    <div id="scrollableDiv" className="h-[100vh] overflow-y-auto">
      <TransitionDown>
        <div className="h-[30vh] bg-[teal] text-center text-[var(--text-color)]">
          <div className="leading-[30vh] text-[20px] font-bold">
            make img img...
          </div>
        </div>
      </TransitionDown>
      <TransitionUp>
        <div className="h-auto bg-[--background] flex justify-center ">
          <InfiniteScroll
            className="md:w-[50vw] w-[90vw] h-full "
            dataLength={articleList.length}
            next={getUserArticleList}
            hasMore={!status}
            loader={<Skeleton avatar paragraph={{ rows: 2 }} active />}
            endMessage={<Divider plain>这是全部了！没有更多了~~~ 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              itemLayout="vertical"
              dataSource={articleList}
              renderItem={(item: {
                article_id: any;
                article_cover: string | undefined;
                avatar: any;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                article_summary:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                viewers:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                nickname:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                like:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                article_label: string[];
              }) => (
                <List.Item
                  onClick={() => {
                    navigate("/preview-notes", {
                      state: { id: item.article_id },
                    });
                  }}
                  key={item.article_id}
                  extra={
                    <img
                      width={120}
                      alt="logo"
                      src={
                        item.article_cover !== ""
                          ? item.article_cover
                          : "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      }
                    />
                  }
                  className="w-full   pb-2"
                >
                  <List.Item.Meta
                    className=" h-full overflow-hidden text-[var(--lightGreen)]"
                    avatar={<Avatar src={item.avatar} />}
                    title={<div className="text-[teal]">{item.title}</div>}
                    description={
                      <div className="h-30 text-[var(--text-color)]">
                        <div className="h-10 overflow-hidden">
                          {item.article_summary}
                        </div>
                        <div className="w-full h-8 flex justify-between items-center flex-wrap ">
                          <div className="w-1/2 flex items-center invisible sm:visible">
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
                          <div className="w-1/2 flex justify-end items-center invisible sm:visible">
                            {item.article_label.map((label: string) => {
                              return (
                                <div className="flex h-full items-center mx-1 truncate rounded-lg text-[var(--lightGreen)] border-dashed border  border-[var(--lightGreen)] px-1">
                                  <Icon
                                    icon="solar:bookmark-opened-outline"
                                    className="text-[orange] mr-1"
                                  />
                                  {label}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      </TransitionUp>
    </div>
  );
}
