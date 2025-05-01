import { ListRestaurants } from "~/features/restaurants/pages/ListRestaurants";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Restaurants - Elsan Eats" }];
}

export default function Index() {
  return <ListRestaurants />;
}
