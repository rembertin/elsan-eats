import type { Route } from "./+types/restaurants.create";
import { CreateRestaurant } from "~/features/restaurants/pages/CreateRestaurant";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Créer un restaurant - Elsan Eats" }];
}

export default function Create() {
  return <CreateRestaurant />;
}
