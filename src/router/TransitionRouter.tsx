import { getToken } from "@/utils";
import { ReactElement, useEffect } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const WhiteList = ["/", "home", "note-book", "tree-hole", "/user"];

const AuthRouter = (props: { children: ReactElement }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const { pathname } = location;

  console.log(pathname);

  useEffect(() => {
    // 没有token表明用户未登录，跳转到login
    if (!getToken() && pathname !== "/user") {
      return navigate("/user");
    }
  }, [pathname, props.children, navigate]);
  return props.children;
};

export default function TransitionRouter(routes: any[]): any[] {
  return routes.map((i, inx) => {
    if (i.children) {
      TransitionRouter(i.children);
    }

    // 白名单校验
    if (!WhiteList.includes(i.path)) {
      i.element = <Navigate to="/user" />;
    }
    console.log(i.mate?.hidden);

    // hidden 不展示路由
    if (i.mate?.hidden) {
      routes.splice(inx, 1);
    }
    i.element = <AuthRouter>{i.element}</AuthRouter>;
    return i;
  });
}
