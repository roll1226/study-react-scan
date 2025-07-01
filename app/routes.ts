import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("button", "routes/button.tsx"),
] satisfies RouteConfig;
