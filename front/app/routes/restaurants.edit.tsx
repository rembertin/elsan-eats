import type { Route } from "./+types/restaurants.edit";
import { EditRestaurant } from "~/features/restaurants/pages/EditRestaurant";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Modifier un restaurant - Elsan Eats" }];
}

export default function Create({ params }: Route.ComponentProps) {
  return <EditRestaurant id={Number(params.id)} />;
}
