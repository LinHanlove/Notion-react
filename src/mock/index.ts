/**
 * 首页左侧
 * @argument title plate
 */
export const homeList = [
  {
    title: "速览",
    plate: "生活倒影",
    info: "记录美好生活",
    bg: "bg-gradient-to-r from-[#358bff] to-[#15c6ff]",
  },
  {
    title: "速览",
    plate: "视听盛宴",
    info: "你看这世界多奇妙",
    // #18e7ae #1eebeb
    bg: "bg-gradient-to-r from-[#18e7ae] to-[#1eebeb]",
  },
  {
    title: "速览",
    plate: "学习人生",
    info: "比你优秀的人还在努力",
    // #ff27e8 #ff8000
    bg: "bg-gradient-to-r from-[#ff6655] to-[#ff8000]",
  },
];

import moduleImg from "@/assets/images/宝.jpg";
/**
 * 首页左侧
 */
export const moduleList = [
  {
    time: "2023-09-08 12:25:36",
    title: "javaScript",
    hot: 20,
    comment: 36,
    like: 520,
    info: "javaScript是世界上最好的语言，不接受反驳！",
    plate: "学习人生",
    stort: "js基础",
    img: moduleImg,
  },
  {
    time: "2023-09-08 12:25:36",
    title: "javaScript",
    hot: 20,
    comment: 36,
    like: 520,
    info: "javaScript是世界上最好的语言，不接受反驳！",
    plate: "学习人生",
    stort: "js基础",
    img: moduleImg,
  },
  {
    time: "2023-09-08 12:25:36",
    title: "javaScript",
    hot: 20,
    comment: 36,
    like: 520,
    info: "javaScript是世界上最好的语言，不接受反驳！",
    plate: "学习人生",
    stort: "js基础",
    img: moduleImg,
  },
  {
    time: "2023-09-08 12:25:36",
    title: "javaScript",
    hot: 20,
    comment: 36,
    like: 520,
    info: "javaScript是世界上最好的语言，不接受反驳！",
    plate: "学习人生",
    stort: "js基础",
    img: moduleImg,
  },
  {
    time: "2023-09-08 12:25:36",
    title: "javaScript",
    hot: 20,
    comment: 36,
    like: 520,
    info: "javaScript是世界上最好的语言，不接受反驳！",
    plate: "学习人生",
    stort: "js基础",
    img: moduleImg,
  },
];

/**
 * 弹幕组
 */

export const barrage = Array(100)
  .fill("")
  .map((i, inx) => {
    return {
      img: moduleImg,
      number: `第${inx}条留言`,
      i: i + inx,
    };
  });
