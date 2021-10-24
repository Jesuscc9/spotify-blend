import { App, Blend } from "../pages";
import { Redirect } from "react-router";

export const privateRoutes = [
  {
    name: "Home",
    path: "/",
    to: "/",
    component: function Component() {
      return <Redirect to="/app" />;
    },
  },
  {
    name: "App",
    path: "/app",
    to: "/app",
    component: App,
  },
  {
    name: "Blend",
    path: "/blend/:roomId",
    to: "/blend/:roomId",
    component: Blend,
  },
];
