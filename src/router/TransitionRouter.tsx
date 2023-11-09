import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

export default function TransitionRouter(routes: any[]): any[] {
  return routes.map((i, inx) => {
    if (i.mate) {
      const { rule, backUrl, hidden } = i.mate;
      // 未登录
      if (rule == "login" && !getToken()) i.element = <Navigate to={backUrl} />;
      // 不展示路由
      if (hidden) routes.splice(inx, 1);
    }

    if (i.children) TransitionRouter(i.children);

    return i;
  });
}
