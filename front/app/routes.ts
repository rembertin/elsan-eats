import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layouts/AppLayout.tsx", [
    index("routes/_index.tsx"),
    route("restaurants/create", "routes/restaurants.create.tsx"),
    route("restaurants/:id/edit", "routes/restaurants.edit.tsx"),
  ]),
] satisfies RouteConfig;
