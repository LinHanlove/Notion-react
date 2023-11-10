import { getToken } from "@/utils";
import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * removeHiddenRouter   隐藏路由鉴权规则
 * @parent auth         传递参数对象
 * @params rule         检验规则
 * @params backUrl      未通过校验跳转路由地址
 */
export default function TransitionRouter(props: {
  auth: { rule: string; backUrl: string };
  children: ReactElement;
}) {
  const location = useLocation();

  if (props.auth) {
    const { rule, backUrl } = props.auth;
    console.log(location.pathname, props, rule, backUrl, "---");
    // 未登录
    if (rule == "login" && !getToken()) return <Navigate to={backUrl} />;
  }
  return props.children;
}

/**
 * TransitionRouter     登录路由鉴权规则
 * @parent mate         路由鉴权规则
 * @params pathName     对比路径
 * @params hidden       隐藏路由标识
 */
export const removeHiddenRouter = (routes: any[]) => {
  routes.forEach((i) => {
    if (i.children) {
      removeHiddenRouter(i.children);
    }
    if (i.mate) {
      const { pathName, hidden } = i.mate;
      const condition = pathName;
      const inx = routes.findIndex((item) => item.path == condition);
      if (inx != -1 && hidden) routes.splice(inx, 1);
    }
  });
  console.log(routes, "--33--");

  return routes;
  // 外层没有找到，递归查找内层
};
