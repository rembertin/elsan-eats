import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  layout("router/layouts/AppLayout.tsx", [
    index("routes/restaurants/Index.tsx"),
  ]),
] satisfies RouteConfig;
