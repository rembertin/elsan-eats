import type { RestaurantItem } from "~/features/restaurants/models";

export function listRestaurants(): Promise<RestaurantItem[]> {
  return Promise.resolve([
    {
      id: 1,
      name: "Mr Big Bali",
      category: "Indonésien",
      dishesCount: 5,
    },
    {
      id: 2,
      name: "Monzu",
      category: "Italien",
      dishesCount: 5,
    },
    {
      id: 3,
      name: "Papa Jo",
      category: "Sandwich",
      dishesCount: 18,
    },
    {
      id: 4,
      name: "La douce parenthèse",
      category: "Tartes",
      dishesCount: 8,
    },
  ]);
}
