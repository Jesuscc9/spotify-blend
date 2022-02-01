import { App, Blend } from "../pages";
import { Redirect } from "react-router";
import React, { ComponentType } from "react";

interface Route {
  name: string;
  path: string;
  to: string;
  component: ComponentType;
}

export const privateRoutes: Route[] = [
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
  }
];