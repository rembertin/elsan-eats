import type {
  CreateRestaurantInputs,
  CreateRestaurantResponse,
  RestaurantDetail,
  RestaurantItem,
  UpdateRestaurantInputs,
} from "../models";
import { del, get, post, put } from "~/api/client/api-client";

export interface RestaurantRepository {
  list(): Promise<RestaurantItem[]>;
  get(restaurantId: any): Promise<RestaurantDetail>;
  create(inputs: CreateRestaurantInputs): Promise<CreateRestaurantResponse>;
  update(id: number, data: UpdateRestaurantInputs): Promise<void>;
  delete(id: number): Promise<void>;
}

class MockRestaurantRepository implements RestaurantRepository {
  private readonly restaurants: RestaurantItem[];
  constructor() {
    this.restaurants = [
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
    ];
  }

  list() {
    return Promise.resolve([...this.restaurants]);
  }

  get(restaurantId: any): Promise<RestaurantDetail> {
    return Promise.resolve({
      id: 5,
      name: "Mr Big Bali",
      categoryId: 4,
      dishes: [
        {
          id: 1,
          name: "Poulet Croustillant",
          photoPath: "/fake/dishes/poulet-croustillant.jpg",
          description:
            "Poulet croustillant, riz jasmin, sriracha, mayo, citron vert, oignon nouveau",
          price: 11.5,
        },
        {
          id: 2,
          name: "Sate Ayam",
          photoPath: "/fake/dishes/sate-ayam.jpg",
          description:
            "Poulet sauce cacahuète, riz jasmin, coriandre, oignon frit",
          price: 12.5,
        },
        {
          id: 3,
          name: "Curry Ayam",
          photoPath: "/fake/dishes/curry-ayam.jpg",
          description:
            "Poulet curry balinais, gingembre, curcuma, lait de coco, citron vert, coriandre, oignon frit, riz jasmin",
          price: 11.9,
        },
      ],
    });
  }

  create(inputs: CreateRestaurantInputs): Promise<CreateRestaurantResponse> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            id: 1,
          }),
        500,
      );
    });
  }

  update(id: number, data: UpdateRestaurantInputs): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  }

  delete(id: number): Promise<void> {
    this.restaurants.splice(
      this.restaurants.findIndex((restaurant) => restaurant.id === id),
      1,
    );

    return Promise.resolve();
  }
}

export const restaurantRepository: RestaurantRepository =
  new MockRestaurantRepository();
