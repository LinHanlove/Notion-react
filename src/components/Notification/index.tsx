import { notification } from "antd";

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
