import { notification, Popconfirm } from "antd";
import { ReactElement, JSXElementConstructor } from "react";

export default function Notification(props: {
  type: string;
  msg: string;
  time: number;
}) {
  const { type, msg, time } = props;
  console.log(props);

  notification.open({
    message: "寒寒提醒你",
    description: msg,
    type: type === "error" ? "error" : "success",
    placement: "bottomRight",
    duration: time,
  });

  return null;
}

export const _Popconfirm = (props: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  handelConfirm: () => void;
  title: string;
  description: string;
}) => {
  const { handelConfirm, title, description } = props;

  return (
    <Popconfirm
      title={title}
      description={description}
      okText="确定"
      cancelText="取消"
      onConfirm={handelConfirm}
    >
      {props.children}
    </Popconfirm>
  );
};
