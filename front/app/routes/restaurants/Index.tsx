import { ListRestaurants } from "~/features/restaurants/pages/list-restaurants";
import type { Route } from "./+types/Index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Elsan Eats" },
    { name: "description", content: "Better than Uber." },
  ];
}

export default function Index() {
  return <ListRestaurants />;
}
