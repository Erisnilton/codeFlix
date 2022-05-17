import { RouteProps } from "react-router-dom";
import Home from "../pages/home";
import VideoByCategories from "../components/video/VideoByCategories";

export interface MyRouteProps extends RouteProps {
  name: string;
  label: string;
}

const routes: MyRouteProps[] = [
  {
    name: "home",
    label: "Home",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    name: "video.by-category",
    label: "Vídeos por categoria",
    path: "/categories/:id",
    component: VideoByCategories,
    exact: true,
  },
];
export default routes;
