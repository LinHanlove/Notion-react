import { _NonIndexRouteObject, routes } from "./index";
const MenuRouter = (): _NonIndexRouteObject[] | undefined => {
  return routes
    .filter((i) => i.path == "/")
    .map(({ children }) => children?.filter((i) => i.name !== undefined))[0];
};
export default MenuRouter;
